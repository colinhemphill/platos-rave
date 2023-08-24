import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MenubarDialogProps } from './GameMenu';

export function SoftwareDialog({ isOpen, setIsOpen }: MenubarDialogProps) {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Software</DialogTitle>
          <DialogDescription>
            This game was made possible with lots of great software.
          </DialogDescription>
        </DialogHeader>
        <ul className="list-inside list-disc space-y-1 rounded-lg bg-neutral-3 p-4 text-sm">
          <li>
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>
          </li>
          <li>
            <a href="https://jotai.org/" target="_blank">
              Jotai
            </a>
          </li>
          <li>
            <a href="https://www.radix-ui.com/colors" target="_blank">
              Radix UI (Primitives, Icons, and Colors)
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" target="_blank">
              Tailwind CSS
            </a>
          </li>
          <li>
            <a href="https://ui.shadcn.com/" target="_blank">
              shadcn/ui
            </a>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
