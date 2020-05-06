import { isString } from 'lodash'

const theme = {
  palette: {
    primary: '#333333',
    secondary: '#666666',
    lightgray: '#D3D3D3',
    darkgray: '#A9A9A9',
    white: '#FFFFFF',
    black: '#000000'
  },
  spacing: (...args) => {
    return args.map(item => (isString(item) ? item : `${8 * item}px`)).join(' ')
  },
  textStyles: {
    body1: {
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '27px',
      fontFamily: 'Patrick Hand, sans-serif'
    },
    body2: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily: 'Patrick Hand, sans-serif'
    },
    h1: {
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: '54px',
      fontFamily: 'Patrick Hand SC, sans-serif'
    },
    h2: {
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '48px',
      fontFamily: 'Patrick Hand SC, sans-serif'
    },
    h3: {
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: '42px',
      fontFamily: 'Patrick Hand SC, sans-serif'
    },
    h4: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '36px',
      fontFamily: 'Patrick Hand SC, sans-serif'
    },
    h5: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '30px',
      fontFamily: 'Patrick Hand SC, sans-serif'
    },
    h6: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
      fontFamily: 'Patrick Hand SC, sans-serif'
    }
  },
  textStyle: style => `
    font-size: ${theme.textStyles[style].fontSize};
    font-weight: ${theme.textStyles[style].fontWeight};
    line-height: ${theme.textStyles[style].lineHeight};
    font-family: ${theme.textStyles[style].fontFamily};
  `
}

export default theme
