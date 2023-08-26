'use client';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Version from '@/components/version';
import { useState } from 'react';
import { AboutDialog } from './AboutDialog';
import { ResetDialog } from './ResetDialog';
import { SoftwareDialog } from './SoftwareDialog';

export interface MenubarDialogProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function GameMenu() {
  const [resetDialog, setResetDialog] = useState(false);
  const [aboutDialog, setAboutDialog] = useState(false);
  const [softwareDialog, setSoftwareDialog] = useState(false);

  return (
    <>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => setResetDialog(true)}>
              Reset game
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Help</MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => setAboutDialog(true)}>
              About
            </MenubarItem>
            <MenubarItem onClick={() => setSoftwareDialog(true)}>
              Software
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <div className="flex-1 text-right text-sm text-neutral-11">
          <Version />
        </div>
      </Menubar>

      <ResetDialog isOpen={resetDialog} setIsOpen={setResetDialog} />
      <AboutDialog isOpen={aboutDialog} setIsOpen={setAboutDialog} />
      <SoftwareDialog isOpen={softwareDialog} setIsOpen={setSoftwareDialog} />
    </>
  );
}
