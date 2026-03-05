export const colors = {
  peach: {
    50:  '#FFF5EF',
    100: '#FFE8D8',
    200: '#FFD6C0',
    300: '#FFB899',
    400: '#FF9B7A',
    500: '#FF8A60', // brand primary
    600: '#FF6A40',
    700: '#E04820',
  },
  mint: {
    50:  '#F0FBF7',
    100: '#D8F4EC',
    200: '#C8EFE3',
    400: '#7DD9BC',
    600: '#2D9C78',
  },
  lavender: {
    50:  '#F5F0FF',
    200: '#E2D9F3',
    400: '#B8A9D9',
    600: '#6B4EAA',
  },
  yellow: {
    200: '#FFF0C2',
    400: '#FFDA6A',
    600: '#E0A800',
  },
  neutral: {
    0:   '#FFFFFF',
    50:  '#FFFAF5',
    100: '#FFF8F3',
    200: '#F5EDE8',
    300: '#F0E4DC',
    400: '#D8C8C0',
    500: '#B09898',
    600: '#7A6060',
    700: '#5A4040',
    800: '#3D2C2C',
    900: '#2C1C1C',
  },
  success: { light: '#E8F9F1', default: '#1A8C62' },
  danger:  { light: '#FFE8E8', default: '#D94040' },
} as const;

export const semantic = {
  bgApp:         colors.neutral[50],
  bgCard:        colors.neutral[0],
  bgSubtle:      colors.neutral[100],
  textPrimary:   colors.neutral[800],
  textSecondary: colors.neutral[600],
  textTertiary:  colors.neutral[500],
  brandPrimary:  colors.peach[500],
  borderDefault: colors.neutral[300],
} as const;
