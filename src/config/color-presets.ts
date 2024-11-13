export const presetLight = {
  lighter: '#f1f1f1',
  light: '#666666',
  default: '#111111',
  dark: '#000000',
  foreground: '#ffffff',
};

export const presetDark = {
  lighter: '#222222',
  light: '#929292',
  default: '#f1f1f1',
  dark: '#ffffff',
  foreground: '#111111',
};

export const DEFAULT_PRESET_COLORS = {
  lighter: '#ccfbf1',
  light: '#5eead4',
  default: '#2FB551',
  dark: '#258D3F',
  foreground: '#ffffff',
};

export const DEFAULT_PRESET_COLOR_NAME = 'Verde';

export const usePresets = () => {
  return [
    {
      name: DEFAULT_PRESET_COLOR_NAME,
      colors: DEFAULT_PRESET_COLORS,
    },
  ];
};
