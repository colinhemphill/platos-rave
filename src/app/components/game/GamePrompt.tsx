'use client';

import { playerRoomAtom } from '@/state/player/room';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtomValue } from 'jotai';

export function GamePrompt() {
  const playerRoom = useAtomValue(playerRoomAtom);

  return (
    <section className="order-2 flex h-96 flex-col gap-8 overflow-auto rounded-lg border-2 border-neutral-6 p-8 lg:order-1 lg:w-8/12">
      <AnimatePresence>
        <motion.div
          className="text-2xl font-bold uppercase text-neutral-12"
          key={playerRoom.room.name}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
          transition={{ duration: 1 }}
        >
          {playerRoom.room.name}
        </motion.div>
        <motion.div
          className="text-lg text-neutral-11"
          dangerouslySetInnerHTML={{ __html: playerRoom.room.body.html }}
          key={playerRoom.room.body.raw}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0 } }}
          transition={{ delay: 1, duration: 1 }}
        />
      </AnimatePresence>
    </section>
  );
}
