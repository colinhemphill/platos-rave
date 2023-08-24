import { atomWithStorage } from 'jotai/utils';

export const hungerAtom = atomWithStorage<Hunger>('platosrave-hunger', 2);
