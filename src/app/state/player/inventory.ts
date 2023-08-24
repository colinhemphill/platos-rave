import { atomWithStorage } from 'jotai/utils';
import { Inventory } from '../map/inventory.types';

export const inventoryAtom = atomWithStorage<Inventory>(
  'platosrave-inventory',
  [],
);
