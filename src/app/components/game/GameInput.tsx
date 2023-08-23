'use client';

import { inputAtom, inputErrorAtom } from '@/state/player/input';
import { playerRoomAtom } from '@/state/player/room';
import { useAtom, useAtomValue } from 'jotai';
import { FormEventHandler } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function GameInput() {
  const [input, setInput] = useAtom(inputAtom);
  const [inputError, setInputError] = useAtom(inputErrorAtom);
  const playerRoom = useAtomValue(playerRoomAtom);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setInputError(null);

    if (!input) {
      return;
    }

    const [action, subject] = input.split(' ');
    const matchingAction = playerRoom.actions.find(
      ({ action: validAction }) => validAction === action,
    );

    if (!action) {
      return setInputError('An action was not recognized');
    } else if (!matchingAction) {
      return setInputError(`Action ${action} is not valid`);
    } else if (!subject) {
      return setInputError(
        `The subject of action ${action} was not recognized`,
      );
    }

    const matchingSubject = matchingAction.subjects.find(
      (validSubject) => validSubject === subject,
    );

    if (!matchingSubject) {
      return setInputError(
        `The subject ${subject} is not valid for action ${action}`,
      );
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
            className="uppercase"
            id="game-input"
            onChange={(e) => setInput(e.target.value.toUpperCase())}
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
