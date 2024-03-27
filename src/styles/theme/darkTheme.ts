// export const darkTheme = {
//   baseProfile: '#282828',
//   input: '#262626',
//   headerBackground: '#191919',
//   baseBackground: '#1F1F1F',
//   post: '#2C2C2C',
//   border: '#3E3E3E',
//   label: '#8D8D8D',
//   span: '#A5A5A5',
//   text: '#A5A5A5',
//   subtitle: '#CFCFCF',
//   baseTitle: '#E7EDF4',
//   title: '#E7EDF4',
//   blueHyperlink: '#3294F8',
// } as const

export const darkTheme = {
  color: {
    white: '#FFF',
    'gray-050': '#EEEEEE',
    'gray-075': '#D8D8D8',
    'gray-100': '#B4B4B4',
    'gray-150': '##7B7B7B',
    'gray-200': '#6E6E6E',
    'gray-300': '#606060',
    'gray-400': '#484848',
    'gray-500': '#3A3A3A',
    'gray-600': '#313131',
    'gray-700': '#222222',
    'gray-800': '#191919',
    'gray-900': '#111111',
    'blue-link': '#777DFA',
  },
  textSizes: {
    '4xl': '4rem', // 64px
    '2xl': '2rem', // 32px
    xl: '1.5rem', // 24px
    lg: '1.25rem', // 20px
    base: '1rem', // 16px
    sm: '0.875rem', // 14px
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  fontFamilies: {
    default: 'Geist',
    mono: 'monospace',
    BigTitle: 'Pedanna',
  },
  lineHeight: {
    heading: '1.25',
    base: '1.6',
  },
} as const
