import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'
import { colorExists } from 'utils'

const resolveColor = props => {
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

const resolveVariant = props => {
  const { variant } = props

  return theme.textStyle(variant || 'body1')
}

const resolveAlign = props => {
  const { align } = props

  if (!align) {
    return ''
  }

  return `
    text-align: ${align};
    width: 100%;
  `
}

const Typography = styled.div`
  display: inline-block;
  text-decoration: none;
  ${resolveColor}
  ${resolveAlign}
  ${resolveVariant}
`

export default Typography
