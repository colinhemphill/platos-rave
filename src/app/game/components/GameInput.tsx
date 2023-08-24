'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { inputAtom, inputErrorAtom } from '@/state/player/input';
import { playerRoomAtom, setPlayerRoomAtom } from '@/state/player/room';
import { adjustTimeAtom } from '@/state/stats/time';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { FormEventHandler } from 'react';

export function GameInput() {
  const [input, setInput] = useAtom(inputAtom);
  const [inputError, setInputError] = useAtom(inputErrorAtom);
  const playerRoom = useAtomValue(playerRoomAtom);
  const setPlayerRoom = useSetAtom(setPlayerRoomAtom);
  const adjustTime = useSetAtom(adjustTimeAtom);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setInputError(null);

    if (!input) {
      return;
    }

    const matchingAction = playerRoom.actions.find(({ action: validAction }) =>
      input.includes(validAction),
    );

    if (!matchingAction) {
      return setInputError('No valid action recognized');
    }

    const matchingSubject = matchingAction.subjects.find((validSubject) =>
      input.includes(validSubject.subject),
    );

    if (!matchingSubject) {
      return setInputError(
        `No valid subject recognized for action ${matchingAction.action}`,
      );
    }

    setInput('');
    setPlayerRoom(matchingSubject.next.id);

    if (matchingSubject?.statChanges?.time) {
      adjustTime(matchingSubject.statChanges.time);
    }
  };

  return (
    <section className="flex flex-col gap-4">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <Label htmlFor="game-input">What do you do?</Label>
          {inputError && (
            <div className="leading-none text-red-11">{inputError}</div>
          )}
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Input
            autoFocus
            id="game-input"
            onChange={(e) => setInput(e.target.value.toUpperCase())}
            placeholder="Type an ACTION and a SUBJECT"
            value={input}
          />
          <Button size="xl" variant="primary">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}
