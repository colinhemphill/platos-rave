import { Room } from '@content';

export enum Direction {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST',
}

export enum ActionType {
  Move = 'MOVE',
  Use = 'USE',
  Interact = 'INTERACT',
  Travel = 'TRAVEL',
}

interface Subject {
  subject: string;
  next: Room;
}

interface InteractAction {
  action: ActionType.Interact;
  subjects: Array<Subject>;
}

interface TravelAction {
  action: ActionType.Travel;
  subjects: Array<Subject>;
}

interface WalkAction {
  action: ActionType.Move;
  subjects: Array<Subject>;
}

export type Action = InteractAction | WalkAction | TravelAction;
