import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'
import { PaletteTypes } from 'types'

interface BoxProps {
  /**
   * For solid color use a string.
   * If you want to use gradient use and object with `from`, `to` and `direction` inside.
   */
  color?: any
  children: ReactNode | string
  center?: boolean
  rounded?: boolean
  display?: string
  alignItems?: string
  justifyContent?: string
}

const resolveColor = props => {
  const { color } = props

  if (!color) {
    return ''
  }

  if (isPlainObject(color)) {
    const { from, to, direction } = color

    return `
      background-image: linear-gradient(to ${direction || 'right'}, ${
      theme.palette[from || 'primary']
    } 0%, ${theme.palette[to || 'primary00']} 100%);
    `
  }

  return `
    background-color: ${theme.palette[color || 'primary']};
  `
}

const resolveTextAlign = props => {
  const { textAlign } = props

  if (!textAlign) {
    return ''
  }

  return `
    text-align: ${textAlign}; 
  `
}

const resolveRounded = props => {
  const { rounded } = props

  if (!rounded) {
    return ''
  }

  return `
    border-radius: ${theme.spacing(0.5)}; 
  `
}

const resolveDisplay = props => {
  const { display, justifyContent, alignItems } = props

  if (!display) {
    return ''
  }

  if (display === ('flex' || 'inline-flex')) {
    return `
      align-items: ${alignItems || ''};
      display: ${display};
      justify-content: ${justifyContent || ''};
    `
  }

  return `
    display: ${display}; 
  `
}

const isCenter = props => {
  const { center } = props

  if (!center) {
    return ''
  }

  return `
  align-items: center;
  display: flex;
  justify-content: center;
  `
}

const Container = styled.div`
  width: 100%;
  ${resolveRounded}
  ${resolveDisplay}
  ${resolveTextAlign}
  ${resolveColor}
  ${isCenter}
`

const Box = (props: BoxProps) => <Container {...props} />

export default Box
