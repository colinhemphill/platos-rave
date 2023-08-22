'use client';

import { FormEventHandler } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export function GameInput() {
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col gap-4 rounded-lg border-2 border-neutral-6 p-8">
      <form className="flex flex-col gap-3" onSubmit={onSubmit}>
        <Label htmlFor="game-input">What do you do?</Label>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Input autoFocus className="uppercase" id="game-input" />
          <Button size="xl" variant="primary">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
}
