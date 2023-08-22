'use client';

import { promptDescriptionAtom, promptTitleAtom } from '@/state/prompt';
import { useAtomValue } from 'jotai';

export function GamePrompt() {
  const promptTitle = useAtomValue(promptTitleAtom);
  const promptDescription = useAtomValue(promptDescriptionAtom);

  return (
    <section className="border-neutral-6 flex flex-col gap-8 rounded-lg border-2 p-8">
      <div className="sr-only">The game screen</div>
      <div className="text-2xl text-neutral-50">{promptTitle}</div>
      <div className="text-lg text-neutral-400">{promptDescription}</div>
    </section>
  );
}
