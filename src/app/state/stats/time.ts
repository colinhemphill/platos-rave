import dayjs, { Dayjs } from 'dayjs';
import { atom } from 'jotai';

const startTime = dayjs().startOf('hour').hour(20).minute(30);

export const timeAtom = atom<Dayjs>(startTime);

export const adjustTimeAtom = atom(null, (get, set, minutes: number) => {
  const time = get(timeAtom);
  const updatedTime = time.add(minutes, 'minutes');

  set(timeAtom, updatedTime);
});
