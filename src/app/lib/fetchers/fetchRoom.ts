import { Room, allRooms } from '@content';

export function fetchRoom(id: Room['id']) {
  const room = allRooms.find((room) => room.id === id);

  if (!room) {
    throw new Error('Room not found');
  } else {
    return room;
  }
}
