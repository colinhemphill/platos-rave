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

  statChanges?: {
    // Amount of time in minutes to pass when the action is called
    time?: number;
    // Amount the player alignment will change when the action is called
    alignment?: number;
    // Amount the player hunger will change when the action is called
    hunger?: number;
  };
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
