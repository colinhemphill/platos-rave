import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { inventoryAtom } from '@/state/player/inventory';
import { playerRoomAtom } from '@/state/player/room';
import { alignmentAtom } from '@/state/stats/alignment';
import { hungerAtom } from '@/state/stats/hunger';
import { timeAtom } from '@/state/stats/time';
import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { MenubarDialogProps } from './GameMenu';

export function ResetDialog({ isOpen, setIsOpen }: MenubarDialogProps) {
  const setRoom = useSetAtom(playerRoomAtom);
  const setInventory = useSetAtom(inventoryAtom);
  const setAlignment = useSetAtom(alignmentAtom);
  const setHunger = useSetAtom(hungerAtom);
  const setTime = useSetAtom(timeAtom);

  const resetAll = () => {
    setRoom(RESET);
    setInventory(RESET);
    setAlignment(RESET);
    setHunger(RESET);
    setTime(RESET);
  };

  return (
    <AlertDialog onOpenChange={setIsOpen} open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Game progress is stored only in your browser, and can be erased if
            you want to start a new game. You can also start a new game by using
            an incognito window if you prefer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={resetAll}>Reset game</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
