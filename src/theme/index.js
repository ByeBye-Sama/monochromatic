import { css } from 'styled-components'
import { tint, shade } from 'polished'
import { isString, keys, reduce } from 'lodash'

export const breakpoints = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const primaryColor = '#A9A9A9'

export const theme = {
  palette: {
    white: '#FFFFFF',
    tint3: tint(0.75, primaryColor),
    tint2: tint(0.5, primaryColor),
    tint1: tint(0.25, primaryColor),
    primary: primaryColor,
    shade1: shade(0.25, primaryColor),
    shade2: shade(0.5, primaryColor),
    shade3: shade(0.75, primaryColor),
    black: '#000000'
  },
  spacing: (...args) => {
    return args.map(item => (isString(item) ? item : `${8 * item}px`)).join(' ')
  },
  breakpoint: reduce(
    keys(breakpoints),
    (accumulator, label) => {
      accumulator[label] = (...args) => css`
        @media (max-width: ${breakpoints[label]}px) {
          ${css(...args)};
        }
      `
      return accumulator
    },
    {}
  ),
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
