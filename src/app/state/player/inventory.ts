import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { Inventory, InventoryItem } from './inventory.types';

export const inventoryAtom = atomWithStorage<Inventory>(
  'platosrave-inventory',
  [],
);

export const addInventoryItemAtom = atom(
  null,
  (get, set, item: InventoryItem) => {
    const inventory = get(inventoryAtom);
    const updatedInventory = [...inventory, item];
    set(inventoryAtom, updatedInventory);
  },
);

export const removeInventoryItemAtom = atom(
  null,
  (get, set, item: InventoryItem) => {
    const inventory = get(inventoryAtom);
    const updatedInventory = inventory.filter(
      (inventoryItem) => inventoryItem.item !== item.item,
    );
    set(inventoryAtom, updatedInventory);
  },
);
