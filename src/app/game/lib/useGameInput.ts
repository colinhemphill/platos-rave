import { ActionType } from '@/state/map/action.types';
import { inputAtom, inputErrorAtom } from '@/state/player/input';
import { playerRoomAtom, setPlayerRoomAtom } from '@/state/player/room';
import { adjustTimeAtom } from '@/state/stats/time';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

export function useGameInput() {
  const [input, setInput] = useAtom(inputAtom);
  const [error, setError] = useAtom(inputErrorAtom);
  const playerRoom = useAtomValue(playerRoomAtom);
  const setPlayerRoom = useSetAtom(setPlayerRoomAtom);
  const adjustTime = useSetAtom(adjustTimeAtom);

  const interpretInput = () => {
    setError(null);

    if (!input) {
      return;
    }

    const inputTokens = input.split(' ');

    const matchingAction = playerRoom.actions.find(({ method: validAction }) =>
      inputTokens.find((token) => token === validAction),
    );

    if (!matchingAction) {
      return setError('No valid action recognized');
    }

    if (matchingAction.actionType === ActionType.Direct) {
      setPlayerRoom(matchingAction.next.id);
    } else if (matchingAction.actionType === ActionType.Subject) {
      const matchingSubject = matchingAction.subjects.find((validSubject) =>
        inputTokens.find((token) => token === validSubject.subject),
      );

      if (!matchingSubject) {
        return setError(
          `No valid subject recognized for action ${matchingAction.method}`,
        );
      }

      setPlayerRoom(matchingSubject.next.id);

      if (matchingSubject?.statChanges?.time) {
        adjustTime(matchingSubject.statChanges.time);
      }
    }

    setInput('');
  };

  return { error, input, interpretInput, setInput };
}
