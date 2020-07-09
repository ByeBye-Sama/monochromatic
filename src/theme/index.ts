import { css } from 'styled-components'
import { isString, keys, reduce } from 'lodash'
import { tint, shade, transparentize } from 'polished'
import boxShadow from 'utils/box-shadow'

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
  black: '#222222',
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
      accumulator[label] = (
        literals: TemplateStringsArray,
        ...args: any[]
      ) => css`
        @media (max-width: ${breakpoints[label]}px) {
          ${css(literals, ...args)};
        }
      `
      return accumulator
    },
    {} as any
  ),
  textStyles: {
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '1.5',
      fontFamily: 'Maven Pro, sans-serif'
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '1.5',
      fontFamily: 'Maven Pro, sans-serif'
    },
    h1: {
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: '1.5',
      fontFamily: 'Maven Pro, sans-serif'
    },
    h2: {
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: '1.5',
      fontFamily: 'Maven Pro, sans-serif'
    },
    h3: {
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: '1.5',
      fontFamily: 'Maven Pro, sans-serif'
    },
    h4: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '1.5',
      fontFamily: 'Maven Pro, sans-serif'
    },
    h5: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '1.5',
      fontFamily: 'Maven Pro, sans-serif'
    },
    h6: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '1.5',
      fontFamily: 'Maven Pro, sans-serif'
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
