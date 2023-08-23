import { atom } from 'jotai';
import { Inventory } from '../map/inventory.types';

export const inventoryAtom = atom<Inventory>([]);
