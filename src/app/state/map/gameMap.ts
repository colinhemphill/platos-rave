import { fetchRoom } from '@/lib/fetchers/fetchRoom';
import { atom } from 'jotai';
import { ActionType, Direction, Method } from './action.types';
import { GameMap } from './room.types';

export const gameMap: GameMap = [
  {
    room: fetchRoom('invitation-pray'),
    actions: [
      {
        actionType: ActionType.Subject,
        method: 'PRAY',
        subjects: [{ subject: 'RAVE GODS', next: fetchRoom('invitation') }],
      },
    ],
  },
  {
    room: fetchRoom('invitation'),
    actions: [
      {
        actionType: ActionType.Subject,
        method: 'OPEN',
        subjects: [{ subject: 'ENVELOPE', next: fetchRoom('invitation-open') }],
      },
    ],
  },
  {
    room: fetchRoom('invitation-open'),
    actions: [
      {
        actionType: ActionType.Subject,
        method: 'TRAVEL',
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
        actionType: ActionType.Direct,
        method: 'WAIT',
        next: fetchRoom('inside-container-store'),
      },
    ],
  },
  {
    room: fetchRoom('inside-container-store'),
    actions: [
      {
        actionType: ActionType.Subject,
        method: Method.Move,
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
