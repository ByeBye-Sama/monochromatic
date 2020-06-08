import React from 'react'
import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'
import { colorExists } from 'utils'

interface IconProps {
  color?: any
  size?: string | number
  type?: string
  variant?: string
}

const resolveColor = (props: IconProps) => {
  const { color } = props

  if (isPlainObject(color)) {
    const { from, to, direction } = color

    const fromColor = theme.palette[colorExists(from, 'primary')]

    const toColor = theme.palette[colorExists(to, 'primary00')]

    return `
      background: linear-gradient(to ${direction ||
        'right'}, ${fromColor} 0%, ${toColor} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
  }

  return `color: ${theme.palette[color || 'black']};`
}

const resolveVariant = (props: IconProps) => {
  const { variant } = props

  if (!variant) {
    return ''
  }

  if (variant === 'outlined') {
    return `
      font-family: 'Material Icons Outlined';
    `
  }

  return ''
}

const resolveSize = (props: IconProps) => {
  const { size } = props

  if (!size) {
    return ''
  }

  if (typeof size === 'number') {
    return `
      font-size: ${size}px;
    `
  }

  if (size === 'small') {
    return `
      font-size: 18px;
    `
  }

  if (size === 'large') {
    return `
      font-size: 36px;
    `
  }

  if (size === 'extralarge') {
    return `
      font-size: 48px;
    `
  }

  return ''
}

const Container = styled.span`
  display: inline-block;
  font-size: 24px;
  font-family: 'Material Icons';
  ${resolveColor}
  ${resolveSize}
  ${resolveVariant}
`

const Icon = (props: IconProps) => {
  const { type, color, variant, size, ...rest } = props

  return (
    <Container color={color} variant={variant} size={size} {...rest}>
      {type}
    </Container>
  )
}

Icon.defaultProps = {
  color: 'black',
  size: 'medium',
  type: '',
  variant: 'filled'
}

export default Icon
