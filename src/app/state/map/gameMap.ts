import { fetchRoom } from '@/lib/fetchers/fetchRoom';
import { atom } from 'jotai';
import { ActionType } from './action.types';
import { GameMap } from './room.types';

export const gameMap: GameMap = [
  {
    room: fetchRoom('invitation'),
    actions: [
      {
        action: ActionType.Interact,
        subjects: ['ENVELOPE'],
        next: fetchRoom('invitation-accept'),
      },
    ],
  },
  {
    room: fetchRoom('invitation-accept'),
    actions: [
      {
        action: ActionType.Interact,
        subjects: ['INVITATION'],
        next: fetchRoom('arrive-container-store'),
      },
    ],
  },
];

export const mapAtom = atom<GameMap>(gameMap);
