import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'
import { colorExists } from 'utils'

interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  align?: string
  color?: any
  variant?: string
}

const resolveColor = (props: TypographyProps) => {
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

const resolveVariant = (props: TypographyProps) => {
  const { variant } = props

  return theme.textStyle(variant || 'body1')
}

const resolveAlign = (props: TypographyProps) => {
  const { align } = props

  if (!align) {
    return ''
  }

  return `
    text-align: ${align};
    width: 100%;
  `
}

const Container = styled.div`
  display: inline-block;
  ${resolveColor}
  ${resolveAlign}
  ${resolveVariant}
`

const Typography = (props: TypographyProps) => <Container {...props} />

Typography.defaultProps = {
  align: null,
  color: 'black',
  variant: 'body1'
}

export default Typography
