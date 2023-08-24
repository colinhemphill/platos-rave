import { fetchRoom } from '@/lib/fetchers/fetchRoom';
import { atom } from 'jotai';
import { ActionType, Direction } from './action.types';
import { GameMap } from './room.types';

export const gameMap: GameMap = [
  {
    room: fetchRoom('invitation'),
    actions: [
      {
        action: ActionType.Interact,
        subjects: [{ subject: 'ENVELOPE', next: fetchRoom('invitation-open') }],
      },
    ],
  },
  {
    room: fetchRoom('invitation-open'),
    actions: [
      {
        action: ActionType.Travel,
        subjects: [
          {
            subject: 'CONTAINER STORE',
            next: fetchRoom('arrive-container-store'),
            statChanges: {
              time: 30,
            },
          },
        ],
      },
    ],
  },
  {
    room: fetchRoom('arrive-container-store'),
    actions: [
      {
        action: ActionType.Move,
        subjects: [
          {
            subject: Direction.North,
            next: fetchRoom('inside-container-store'),
          },
        ],
      },
    ],
  },
  {
    room: fetchRoom('inside-container-store'),
    actions: [
      {
        action: ActionType.Move,
        subjects: [
          {
            subject: Direction.East,
            next: fetchRoom('approach-break-room'),
          },
          {
            subject: Direction.South,
            next: fetchRoom('arrive-container-store'),
          },
        ],
      },
    ],
  },
];

export const mapAtom = atom<GameMap>(gameMap);
