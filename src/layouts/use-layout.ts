'use client';

import { LAYOUT_OPTIONS } from '@config/enums';
import { atom, useAtom } from 'jotai';

const rdMoviesLayoutAtom = atom(
  typeof window !== 'undefined'
    ? localStorage.getItem('rdMovies-layout')
    : LAYOUT_OPTIONS.MAIN,
);

const rdMoviesLayoutAtomWithPersistence = atom(
  (get) => get(rdMoviesLayoutAtom),
  (get, set, newStorage: any) => {
    set(rdMoviesLayoutAtom, newStorage);
    localStorage.setItem('rdMovies-layout', newStorage);
  },
);

export function useLayout() {
  const [layout, setLayout] = useAtom(rdMoviesLayoutAtomWithPersistence);
  return {
    layout: layout ?? LAYOUT_OPTIONS.MAIN,
    setLayout,
  };
}
