'use client';

import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { alignmentAtom } from '@/state/stats/alignment';
import { hungerAtom } from '@/state/stats/hunger';
import { timeAtom } from '@/state/stats/time';
import { cva } from 'class-variance-authority';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtomValue } from 'jotai';

const statTitleClasses = cva('uppercase py-1 px-2 bg-neutral-3 rounded-lg');

export function GameStats() {
  const time = useAtomValue(timeAtom);
  const hunger = useAtomValue(hungerAtom);
  const alignment = useAtomValue(alignmentAtom);

  return (
    <aside className="order-1 flex flex-col justify-between rounded-lg border-2 border-neutral-7 p-8 lg:order-2 lg:w-4/12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <strong className={statTitleClasses()}>Time</strong>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              key={time.unix()}
            >
              {time.format('h:mm A')}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-3">
          <strong className={statTitleClasses()}>Hunger</strong>
          <Progress value={(hunger / 10) * 100} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <strong className="text-sm text-red-11">WHDD</strong>
        <Slider
          defaultValue={[alignment]}
          disabled
          min={-10}
          max={10}
          aria-readonly
        />
        <strong className="text-sm text-primary-11">PLUR</strong>
      </div>
    </aside>
  );
}