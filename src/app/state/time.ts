import dayjs from 'dayjs';
import { atom } from 'jotai';

const startTime = dayjs().startOf('hour').hour(21);

export const timeAtom = atom(startTime);
