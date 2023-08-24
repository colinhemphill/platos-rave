import { Room } from '@content';

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
}

interface SubjectAction extends BaseAction {
  actionType: ActionType.Subject;
  subjects: Array<Subject>;
}

export type Action = DirectAction | SubjectAction;
