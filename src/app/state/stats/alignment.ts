import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const alignmentAtom = atomWithStorage<Alignment>(
  'platosrave-alignment',
  0,
);

export const adjustAlignmentAtom = atom(null, (get, set, change: number) => {
  const alignment = get(alignmentAtom);
  let updatedAlignment = alignment + change;

  if (updatedAlignment > 10) {
    updatedAlignment = 10;
  } else if (updatedAlignment < -10) {
    updatedAlignment = -10;
  }

  set(alignmentAtom, updatedAlignment as Alignment);
});
