import { allRooms } from '@content';
import { atom } from 'jotai';
import { ActionType } from './action.types';
import { GameMap } from './room.types';

export const gameMap: GameMap = [
  {
    room: allRooms[0],
    actions: [
      {
        action: ActionType.Interact,
        objects: ['ENVELOPE'],
      },
    ],
  },
];

export const mapAtom = atom<GameMap>(gameMap);
