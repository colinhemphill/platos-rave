import { atom } from 'jotai';

const gameMap: GameMap = [
  {
    room: {
      description: '',
      name: 'An invitation',
    },
  },
];

export const mapAtom = atom<GameMap>(gameMap);
