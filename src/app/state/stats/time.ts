import dayjs from 'dayjs';
import { atom } from 'jotai';

const startTime = dayjs().startOf('hour').hour(19);

export const timeAtom = atom(startTime);
