import { Room } from '@content';
import { Action } from './action.types';

export interface GameRoom {
  actions: Array<Action>;
  room: Room;
}

export type GameMap = Array<GameRoom>;
