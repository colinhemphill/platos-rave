'use client';

import { playerRoomAtom } from '@/state/player/room';
import { useAtomValue } from 'jotai';

export function GamePrompt() {
  const playerRoom = useAtomValue(playerRoomAtom);

  return (
    <section className="order-2 flex flex-col gap-8 rounded-lg border-2 border-neutral-6 p-8 lg:order-1 lg:w-8/12">
      <div className="text-2xl font-bold uppercase text-neutral-12 duration-700 animate-in fade-in-0 motion-safe:slide-in-from-top-4">
        {playerRoom.room.name}
      </div>
      <div
        className="text-lg text-neutral-11 delay-500 duration-700 animate-in fade-in motion-safe:slide-in-from-top-4"
        dangerouslySetInnerHTML={{ __html: playerRoom.room.body.html }}
      />
    </section>
  );
}
