import { GameInfo } from './GameInfo';
import { GameInput } from './GameInput';
import { GamePrompt } from './GamePrompt';

export function GameScreen() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <GamePrompt />
        <GameInfo />
      </div>
      <GameInput />
    </div>
  );
}
