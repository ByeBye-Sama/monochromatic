import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'
import { colorExists } from 'utils'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  color?: any
  orientation?: string
}

const resolveColor = (props: DividerProps) => {
  const { color } = props

  if (!color) {
    return ''
  }

  if (isPlainObject(color)) {
    const { from, to, direction } = color

    const fromColor = theme.palette[colorExists(from, 'primary')]

    const toColor = theme.palette[colorExists(to, 'gray')]

    return `
    background-image: linear-gradient(to ${direction ||
      'right'}, ${fromColor} 0%, ${toColor} 100%);
  `
  }

  return `
    background-color: ${theme.palette[color || 'gray']};
  `
}

const resolveOrientation = (props: DividerProps) => {
  const { orientation } = props

  if (!orientation) {
    return ''
  }

  if (orientation === 'vertical') {
    return `
      width: 8px;
    `
  }

  return `
    height: 1px;
    width: 100%;
  `
}

const Container = styled.hr`
  border: none;
  margin: 0;
  ${resolveColor}
  ${resolveOrientation}
`

const Divider = (props: DividerProps) => <Container {...props} />

Divider.defaultProps = {
  color: 'gray',
  orientation: 'horizontal'
}

export default Divider
