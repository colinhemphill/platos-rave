import { StatChanges } from '../map/action.types';

export enum Item {
  Drugs = 'DRUGS',
  Munchies = 'MUNCHIES',
}

export interface InventoryItem {
  item: Item;
  statChanges?: StatChanges;
}

export type Inventory = Array<InventoryItem>;
