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
      fontSize: '14px',
      lineHeight: '21px'
    },
    h1: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '32px'
    },
    h2: {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '24px'
    },
    title: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px'
    }
  },
  textStyle: style => `
    font-size: ${theme.textStyles[style].fontSize};
    font-weight: ${theme.textStyles[style].fontWeight};
    line-height: ${theme.textStyles[style].lineHeight};
    font-family: Open Sans,sans-serif;
  `
}

export default theme
