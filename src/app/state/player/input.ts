import { atom } from 'jotai';

export const inputAtom = atom<string>('');

export const inputErrorAtom = atom<string | null>(null);
