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

interface InteractAction {
  action: ActionType.Interact;
  subjects: Array<string>;
}

interface WalkAction {
  action: ActionType.Walk;
  subjects: Array<Direction>;
}

export type Action = InteractAction | WalkAction;
