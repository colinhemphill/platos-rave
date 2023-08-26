import { fetchRoom } from '@/lib/fetchers/fetchRoom';
import { atom } from 'jotai';
import { itemsMap } from '../player/inventoryItems';
import { ActionType, Direction, Method } from './action.types';
import { GameMap } from './room.types';

export const gameMap: GameMap = [
  {
    room: fetchRoom('invitation-pray'),
    actions: [
      {
        actionType: ActionType.Subject,
        method: 'PRAY',
        subjects: [{ subject: 'GODS', next: fetchRoom('invitation') }],
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
        method: 'PREPARE',
        subjects: [
          {
            subject: 'RAVE',
            next: fetchRoom('invitation-prepare'),
          },
        ],
      },
    ],
  },
  {
    room: fetchRoom('invitation-prepare'),
    actions: [
      {
        actionType: ActionType.Subject,
        method: 'GATHER',
        subjects: [
          {
            subject: 'MUNCHIES',
            next: fetchRoom('invitation-gather-munchies'),
            statChanges: {
              addInventoryItem: itemsMap.munchies,
            },
          },
          {
            subject: 'DRUGS',
            next: fetchRoom('invitation-gather-drugs'),
            statChanges: {
              alignment: -1,
              addInventoryItem: itemsMap.drugs,
            },
          },
        ],
      },
    ],
  },
  {
    room: fetchRoom('invitation-gather-munchies'),
    actions: [
      {
        actionType: ActionType.Subject,
        method: 'DRIVE',
        subjects: [
          {
            subject: 'STORE',
            next: fetchRoom('arrive-container-store'),
          },
        ],
      },
    ],
  },
  {
    room: fetchRoom('invitation-gather-drugs'),
    actions: [
      {
        actionType: ActionType.Subject,
        method: 'DRIVE',
        subjects: [
          {
            subject: 'STORE',
            next: fetchRoom('arrive-container-store'),
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
