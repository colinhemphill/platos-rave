import { atomWithStorage } from 'jotai/utils';

export const alignmentAtom = atomWithStorage<Alignment>(
  'platosrave-alignment',
  0,
);
