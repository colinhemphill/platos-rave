import { APP_NAME } from '@/lib/metadata';
import { atom } from 'jotai';

export const promptTitleAtom = atom<string>(`Welcome to ${APP_NAME}`);
export const promptDescriptionAtom = atom<string>(
  'In the dead of night you approach a warehouse. Over the door a sign reads "BIGGER THAN TIME", but there is no indication that you have reached your intended destination.',
);
