import { atom } from 'jotai';
import { gameMap } from '../map/gameMap';
import { GameRoom } from '../map/room.types';

export const playerRoomAtom = atom<GameRoom>(gameMap[0]);
