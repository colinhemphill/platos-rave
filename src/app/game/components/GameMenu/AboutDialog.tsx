import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { APP_DESCRIPTION, APP_NAME } from '@/lib/metadata';
import { MenubarDialogProps } from './GameMenu';

export function AboutDialog({ isOpen, setIsOpen }: MenubarDialogProps) {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{APP_NAME}</DialogTitle>
          <DialogDescription>{APP_DESCRIPTION}</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 rounded-lg bg-neutral-3 p-4 text-sm">
          <p>
            {APP_NAME} was created by{' '}
            <a href="https://colinhemphill.com">Colin Hemphill</a>, a software
            engineer and musician in Austin, TX.
          </p>
          <p>
            You can listen to episode 674 that inspired this game on{' '}
            <a href="https://maximumfun.org/episodes/my-brother-my-brother-and-me/mbmbam-674-platos-rave/">
              Maximum Fun
            </a>{' '}
            or wherever you get your podcasts.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
