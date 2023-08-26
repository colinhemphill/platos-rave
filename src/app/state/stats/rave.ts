import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const raveAtom = atomWithStorage<Rave>('platosrave-rave', 0);

export const adjustRaveAtom = atom(null, (get, set, change: number) => {
  const rave = get(raveAtom);
  let updatedRave = rave + change;

  if (updatedRave > 10) {
    updatedRave = 10;
  } else if (updatedRave < -10) {
    updatedRave = -10;
  }

  set(raveAtom, updatedRave as Rave);
});
