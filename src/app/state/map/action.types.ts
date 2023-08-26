import { Room } from '@content';
import { InventoryItem } from '../player/inventory.types';

export enum Direction {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST',
}

export enum Method {
  Move = 'MOVE',
  Use = 'USE',
  Interact = 'INTERACT',
}

export interface StatChanges {
  // Amount of time in minutes to pass when the action is called
  time?: number;
  // Amount the player rave stat will change when the action is called
  rave?: number;
  // Amount the player alignment will change when the action is called
  alignment?: number;
  // Amount the player hunger will change when the action is called
  hunger?: number;
  // An item to add to inventory when the action is called
  addInventoryItem?: InventoryItem;
  // An item to remove from inventory when the action is called
  removeInventoryItem?: InventoryItem;
}

interface Subject {
  subject: string;
  next: Room;

  statChanges?: StatChanges;
}

export enum ActionType {
  Direct = 'DIRECT',
  Subject = 'SUBJECT',
}

interface BaseAction {
  method: Method | string;
}

interface DirectAction extends BaseAction {
  actionType: ActionType.Direct;
  next: Room;
  statChanges?: StatChanges;
}

interface SubjectAction extends BaseAction {
  actionType: ActionType.Subject;
  subjects: Array<Subject>;
}

export type Action = DirectAction | SubjectAction;
