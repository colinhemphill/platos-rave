import { ActionType, StatChanges } from '@/state/map/action.types';
import { inputAtom, inputErrorAtom } from '@/state/player/input';
import {
  addInventoryItemAtom,
  inventoryAtom,
  removeInventoryItemAtom,
} from '@/state/player/inventory';
import { playerRoomAtom, setPlayerRoomAtom } from '@/state/player/room';
import { adjustAlignmentAtom } from '@/state/stats/alignment';
import { adjustHungerAtom } from '@/state/stats/hunger';
import { adjustTimeAtom } from '@/state/stats/time';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

export function useGameInput() {
  const [input, setInput] = useAtom(inputAtom);
  const [error, setError] = useAtom(inputErrorAtom);
  const playerRoom = useAtomValue(playerRoomAtom);
  const playerInventory = useAtomValue(inventoryAtom);
  const addInventoryItem = useSetAtom(addInventoryItemAtom);
  const removeInventoryItem = useSetAtom(removeInventoryItemAtom);
  const setPlayerRoom = useSetAtom(setPlayerRoomAtom);
  const adjustTime = useSetAtom(adjustTimeAtom);
  const adjustAlignment = useSetAtom(adjustAlignmentAtom);
  const adjustHunger = useSetAtom(adjustHungerAtom);

  const makeStatChanges = (statChanges?: StatChanges) => {
    if (!statChanges) {
      return;
    }

    if (statChanges.time) {
      adjustTime(statChanges.time);
    }
    if (statChanges.alignment) {
      adjustAlignment(statChanges.alignment);
    }
    if (statChanges.hunger) {
      adjustHunger(statChanges.hunger);
    }
    if (statChanges.addInventoryItem) {
      addInventoryItem(statChanges.addInventoryItem);
    }
    if (statChanges.removeInventoryItem) {
      removeInventoryItem(statChanges.removeInventoryItem);
    }
  };

  const invokeUseAction = (item: string) => {
    const matchingItem = playerInventory.find(
      (inventoryItem) => inventoryItem.item === item,
    );
    if (!matchingItem) {
      return setError(`You don’t have ${item}`);
    }

    makeStatChanges(matchingItem.statChanges);
    removeInventoryItem(matchingItem);
  };

  const interpretInput = () => {
    setError(null);

    if (!input) {
      return;
    }

    const inputTokens = input.split(' ');

    if (inputTokens[0] === 'USE') {
      return invokeUseAction(inputTokens[1]);
    }

    const matchingAction = playerRoom.actions.find(({ method: validAction }) =>
      inputTokens.find((token) => token === validAction),
    );

    if (!matchingAction) {
      return setError('No valid action recognized');
    }

    if (matchingAction.actionType === ActionType.Direct) {
      setPlayerRoom(matchingAction.next.id);
      makeStatChanges(matchingAction.statChanges);
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
      makeStatChanges(matchingSubject.statChanges);
    }

    setInput('');
  };

  return { error, input, interpretInput, setInput };
}
