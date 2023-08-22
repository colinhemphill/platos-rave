import { GameInput } from './GameInput';
import { GamePrompt } from './GamePrompt';
import { GameStats } from './GameStats';

export function GameScreen() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <GamePrompt />
        <GameStats />
      </div>
      <GameInput />
    </div>
  );
}
