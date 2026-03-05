import { colors, semantic } from './colors';

export const tokens = {
  colors: semantic,
  spacing: { 1:4, 2:8, 3:12, 4:16, 5:20, 6:24, 8:32, 10:40, 12:48, 16:64 },
  radius:  { sm:8, md:12, lg:20, xl:28, full:9999 },
  font:    { display: 'Quicksand', body: 'Nunito' },
  shadow: {
    sm: {
      shadowColor: '#3D2C2C', shadowOffset: { width:0, height:2 },
      shadowOpacity: 0.06, shadowRadius: 8, elevation: 2,
    },
    md: {
      shadowColor: '#3D2C2C', shadowOffset: { width:0, height:4 },
      shadowOpacity: 0.08, shadowRadius: 20, elevation: 4,
    },
    lg: {
      shadowColor: '#3D2C2C', shadowOffset: { width:0, height:8 },
      shadowOpacity: 0.12, shadowRadius: 32, elevation: 8,
    },
  },
} as const;
