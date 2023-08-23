import { Room } from '@content';

export enum Direction {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST',
}

export enum ActionType {
  Walk = 'WALK',
  Use = 'USE',
  Interact = 'INTERACT',
}

interface BaseAction {
  next: Room;
}

interface InteractAction {
  action: ActionType.Interact;
  subjects: Array<string>;
}

interface WalkAction {
  action: ActionType.Walk;
  subjects: Array<Direction>;
}

export type Action = BaseAction & (InteractAction | WalkAction);
