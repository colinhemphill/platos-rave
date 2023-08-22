'use client';

import { timeAtom } from '@/state/time';
import { useAtomValue } from 'jotai';

export function GameInfo() {
  const time = useAtomValue(timeAtom);

  return (
    <aside className="order-1 flex flex-col gap-4 rounded-lg border-2 border-neutral-6 p-4 md:order-2 md:w-4/12">
      <div className="font-bold">{time.format('h A')}</div>
    </aside>
  );
}
