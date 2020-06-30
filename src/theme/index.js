import { css } from 'styled-components'
import { isString, keys, reduce } from 'lodash'
import { tint, shade, transparentize } from 'polished'
import { boxShadow } from 'utils'

export const breakpoints = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const palette = {
  white: '#FFFFFF',
  get tint3() {
    return tint(0.75, this.primary)
  },
  get tint2() {
    return tint(0.5, this.primary)
  },
  get tint1() {
    return tint(0.25, this.primary)
  },
  primary: '#29AC9C',
  get shade1() {
    return shade(0.25, this.primary)
  },
  get shade2() {
    return shade(0.5, this.primary)
  },
  get shade3() {
    return shade(0.75, this.primary)
  },
  black: 'rgba(0, 0, 0, 0.87)',
  get primary00() {
    return transparentize(1, this.primary)
  },
  get primary25() {
    return transparentize(0.75, this.primary)
  },
  get primary50() {
    return transparentize(0.5, this.primary)
  },
  get primary75() {
    return transparentize(0.25, this.primary)
  },
  disabled: '#DCDCDC',
  textDisabled: '#A0A0A0',
  gray: '#D3D3D3'
}

export const theme = {
  palette,
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
  `,
  boxShadow: depth => boxShadow(depth)
}
