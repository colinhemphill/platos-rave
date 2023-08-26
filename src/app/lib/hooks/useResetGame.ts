import { inputAtom, inputErrorAtom } from '@/state/player/input';
import { inventoryAtom } from '@/state/player/inventory';
import { playerRoomAtom } from '@/state/player/room';
import { alignmentAtom } from '@/state/stats/alignment';
import { hungerAtom } from '@/state/stats/hunger';
import { timeAtom } from '@/state/stats/time';
import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';

export function useResetGame() {
  const setRoom = useSetAtom(playerRoomAtom);
  const setInventory = useSetAtom(inventoryAtom);
  const setAlignment = useSetAtom(alignmentAtom);
  const setHunger = useSetAtom(hungerAtom);
  const setTime = useSetAtom(timeAtom);
  const setInput = useSetAtom(inputAtom);
  const setError = useSetAtom(inputErrorAtom);

  const resetGame = () => {
    setRoom(RESET);
    setInventory(RESET);
    setAlignment(RESET);
    setHunger(RESET);
    setTime(RESET);
    setInput('');
    setError('');
  };

  return resetGame;
}
