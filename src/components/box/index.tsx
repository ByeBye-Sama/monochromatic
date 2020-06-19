import React, { ReactNode, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  alignItems?: string
  center?: boolean
  children?: ReactNode
  /**
   * For solid color use a string.
   * If you want to use gradient use and object with `from`, `to` and `direction` inside.
   */
  color?: any
  display?: string
  flexDirection?: string
  justifyContent?: string
  rounded?: boolean
}

const resolveColor = (props: BoxProps) => {
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

const resolveRounded = (props: BoxProps) => {
  const { rounded } = props

  if (!rounded) {
    return ''
  }

  return `
    border-radius: ${theme.spacing(0.5)}; 
  `
}

const resolveDisplay = (props: BoxProps) => {
  const { display, justifyContent, alignItems, flexDirection } = props

  if (!display) {
    return ''
  }

  if (display === ('flex' || 'inline-flex')) {
    return `
      align-items: ${alignItems || ''};
      display: ${display};
      justify-content: ${justifyContent || ''};
      flex-direction: ${flexDirection || ''};
    `
  }

  return `
    display: ${display}; 
  `
}

const isCenter = (props: BoxProps) => {
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
  ${resolveColor}
  ${isCenter}
`

const Box = (props: BoxProps) => <Container {...props} />

Box.defaultProps = {
  alignItems: null,
  center: false,
  children: null,
  color: null,
  display: null,
  flexDirection: null,
  justifyContent: null,
  rounded: false
}

export default Box
