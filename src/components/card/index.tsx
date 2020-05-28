import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'
import { colorExists } from 'utils'

interface CardProps {
  children?: ReactNode
  color?: any
  disableElevation?: boolean
  disableRounded?: boolean
  variant?: string
}

const resolveColor = (props: CardProps) => {
  const { color } = props

  if (!color) {
    return ''
  }

  if (isPlainObject(color)) {
    const { from, to, direction } = color

    const fromColor = theme.palette[colorExists(from, 'white')]

    const toColor = theme.palette[colorExists(to, 'tint2')]

    return `
    background-image: linear-gradient(to ${direction ||
      'right'}, ${fromColor} 0%, ${toColor} 100%);
  `
  }

  return `
    background-color: ${theme.palette[color || 'white']};
  `
}

const resolveDisableRounded = (props: CardProps) => {
  const { disableRounded } = props

  if (!disableRounded) {
    return ''
  }

  return `
    border-radius: 0; 
  `
}

const resolveDisableElevation = (props: CardProps) => {
  const { disableElevation } = props

  if (!disableElevation) {
    return ''
  }

  return `
    ${theme.boxShadow(0)}
  `
}

const resolveVariant = (props: CardProps) => {
  const { variant, color } = props

  if (!variant) {
    return ''
  }

  if (variant === 'outlined') {
    if (isPlainObject(color)) {
      const { from, to, direction } = color

      const fromColor = theme.palette[colorExists(from, 'white')]

      const toColor = theme.palette[colorExists(to, 'tint2')]

      return `
        background-image: none;
        border: 2px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to ${direction ||
          'right'}, ${fromColor}, ${toColor});
        border-radius: 0;
        ${theme.boxShadow(0)}
      `
    }

    return `
      background-color: transparent;
      border: 1px solid ${theme.palette[color || 'white']};
      ${theme.boxShadow(0)}
    `
  }

  return ''
}

const Container = styled.div`
  border-radius: ${theme.spacing(0.5)};
  width: fit-content;
  ${theme.boxShadow(2)}
  ${resolveDisableRounded}
  ${resolveColor}
  ${resolveDisableElevation}
  ${resolveVariant}
`

const Card = (props: CardProps) => <Container {...props} />

Card.defaultProps = {
  children: null,
  color: 'white',
  disableElevation: false,
  disableRounded: false,
  variant: 'contained'
}

export default Card
