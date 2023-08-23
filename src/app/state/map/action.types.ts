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
  objects: Array<string>;
}

interface WalkAction {
  action: ActionType.Walk;
  directions: Array<Direction>;
}

export type Action = InteractAction | WalkAction;
