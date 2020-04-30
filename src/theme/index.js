import { isString } from 'lodash'

const theme = {
  colors: {
    primary: 'red',
    secondary: 'blue',
    white: 'white',
    black: 'black'
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
