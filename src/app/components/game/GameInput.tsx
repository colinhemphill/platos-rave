import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function GameInput() {
  return (
    <section className="border-neutral-6 flex flex-col gap-4 rounded-lg border-2 p-8">
      <Label htmlFor="game-input">What do you do?</Label>
      <Input id="game-input" />
    </section>
  );
}
