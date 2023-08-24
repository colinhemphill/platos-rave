import dayjs from 'dayjs';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const startTime = dayjs().startOf('day').hour(20).minute(30).valueOf();

export const timeAtom = atomWithStorage<number>('platosrave-time', startTime);

export const adjustTimeAtom = atom(null, (get, set, minutes: number) => {
  const unixTime = get(timeAtom);
  const time = dayjs(unixTime);
  const updatedTime = time.add(minutes, 'minutes');

  set(timeAtom, updatedTime.valueOf());
});
