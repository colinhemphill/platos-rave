import { GameInput } from './GameInput';
import { GamePrompt } from './GamePrompt';

export function GameScreen() {
  return (
    <div className="flex flex-col gap-8">
      <GamePrompt />
      <GameInput />
    </div>
  );
}
