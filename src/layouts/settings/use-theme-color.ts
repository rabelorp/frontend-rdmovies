/* eslint-disable consistent-return */

'use client';

import {
  DEFAULT_PRESET_COLOR_NAME,
  DEFAULT_PRESET_COLORS,
  usePresets,
} from '@config/color-presets';
import { updateThemeColor } from '@utils/update-theme-color';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

function getLocalStoragePreset() {
  if (typeof window !== 'undefined') {
    const localStorageValue = localStorage.getItem('rdMovies-preset');
    return JSON.parse(String(localStorageValue));
  }
}

const colorPresetsAtom = atom(
  typeof window !== 'undefined'
    ? getLocalStoragePreset()
    : DEFAULT_PRESET_COLORS,
);

const colorPresetsAtomWithPersistence = atom(
  (get) => get(colorPresetsAtom),
  (get, set, newStorage: any) => {
    set(colorPresetsAtom, newStorage);
    localStorage.setItem('rdMovies-preset', JSON.stringify(newStorage));
  },
);

export function useColorPresets() {
  const [colorPresets, setColorPresets] = useAtom(
    colorPresetsAtomWithPersistence,
  );
  return {
    colorPresets: colorPresets === null ? DEFAULT_PRESET_COLORS : colorPresets,
    setColorPresets,
  };
}

const colorPresetNameAtom = atom(
  typeof window !== 'undefined'
    ? localStorage.getItem('rdMovies-preset-name')
    : DEFAULT_PRESET_COLOR_NAME,
);

const colorPresetNameAtomWithPersistence = atom(
  (get) => get(colorPresetNameAtom),
  (get, set, newStorage: any) => {
    set(colorPresetNameAtom, newStorage);
    localStorage.setItem('rdMovies-preset-name', newStorage);
  },
);

export function useColorPresetName() {
  const [colorPresetName, setColorPresetName] = useAtom(
    colorPresetNameAtomWithPersistence,
  );
  return {
    colorPresetName: colorPresetName ?? DEFAULT_PRESET_COLOR_NAME,
    setColorPresetName,
  };
}

export function useApplyColorPreset<T extends Record<string, any>>(
  colorPresets: T,
) {
  const COLOR_PRESETS = usePresets();

  useEffect(() => {
    let colorLighter = COLOR_PRESETS[0].colors.lighter;
    let colorLight = COLOR_PRESETS[0].colors.light;
    let colorDefault = COLOR_PRESETS[0].colors.default;
    let colorDark = COLOR_PRESETS[0].colors.dark;
    let colorForeground = COLOR_PRESETS[0].colors.foreground;

    if (colorPresets) {
      colorLighter = colorPresets.lighter;
      colorLight = colorPresets.light;
      colorDefault = colorPresets.default;
      colorDark = colorPresets.dark;
      colorForeground = colorPresets.foreground;
    }

    updateThemeColor(
      colorLighter,
      colorLight,
      colorDefault,
      colorDark,
      colorForeground,
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorPresets]);
}
