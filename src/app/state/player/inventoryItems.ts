import { InventoryItem, Item } from './inventory.types';

export const itemsMap = {
  drugs: {
    item: Item.Drugs,
    statChanges: {
      alignment: -1,
      hunger: +1,
      rave: +2,
    },
  },
  munchies: {
    item: Item.Munchies,
    statChanges: {
      hunger: -1,
    },
  },
} satisfies Record<string, InventoryItem>;
