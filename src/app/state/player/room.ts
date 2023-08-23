import { Room } from '@content';
import { atom } from 'jotai';
import { gameMap, mapAtom } from '../map/gameMap';
import { GameRoom } from '../map/room.types';

export const playerRoomAtom = atom<GameRoom>(gameMap[0]);

export const setPlayerRoomAtom = atom(null, (get, set, roomId: Room['id']) => {
  const map = get(mapAtom);
  const room = map.find((gameRoom) => gameRoom.room.id === roomId);

  if (!room) {
    throw new Error('Room not found');
  }

  set(playerRoomAtom, room);
});
