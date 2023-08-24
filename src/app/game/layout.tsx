import { PropsWithChildren } from 'react';
import { GameMenu } from './components/GameMenu/GameMenu';

export default function GameLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col gap-8">
      <GameMenu />
      <main>{children}</main>
    </div>
  );
}
