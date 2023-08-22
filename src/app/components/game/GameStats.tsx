'use client';

import { hungerAtom } from '@/state/hunger';
import { timeAtom } from '@/state/time';
import { cva } from 'class-variance-authority';
import { useAtomValue } from 'jotai';
import { Progress } from '../ui/progress';

const statTitleClasses = cva('uppercase py-1 px-2 bg-neutral-3 rounded-lg');

export function GameStats() {
  const time = useAtomValue(timeAtom);
  const hunger = useAtomValue(hungerAtom);

  return (
    <aside className="order-1 flex flex-col gap-4 rounded-lg border-2 border-neutral-6 p-4 lg:order-2 lg:w-4/12">
      <div className="flex items-center gap-2">
        <strong className={statTitleClasses()}>Time</strong>
        {time.format('h A')}
      </div>
      <div className="flex items-center gap-2">
        <strong className={statTitleClasses()}>Hunger</strong>
        <Progress value={(hunger / 10) * 100} />
      </div>
    </aside>
  );
}
