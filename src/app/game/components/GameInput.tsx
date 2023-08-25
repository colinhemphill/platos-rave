'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormEventHandler } from 'react';
import { useGameInput } from '../lib/useGameInput';

export function GameInput() {
  const { error, input, interpretInput, setInput } = useGameInput();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    interpretInput();
  };

  return (
    <section className="flex flex-col gap-4">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
          <Label htmlFor="game-input">What do you do?</Label>
          {error && <div className="leading-none text-red-11">{error}</div>}
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Input
            autoFocus
            id="game-input"
            onChange={(e) => setInput(e.target.value.toUpperCase())}
            placeholder="Type an ACTION and a SUBJECT"
            value={input}
          />
          <Button size="xl" variant="primary">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}
