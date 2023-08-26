import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const hungerAtom = atomWithStorage<Hunger>('platosrave-hunger', 2);

export const adjustHungerAtom = atom(null, (get, set, change: number) => {
  const hunger = get(hungerAtom);
  let updatedHunger = hunger + change;

  if (updatedHunger > 10) {
    updatedHunger = 10;
  } else if (updatedHunger < 0) {
    updatedHunger = 0;
  }

  set(hungerAtom, updatedHunger as Hunger);
});
