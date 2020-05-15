import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'

const resolveColor = props => {
  const { color } = props

  if (isPlainObject(color)) {
    const { from, to, direction } = color

    return `
      background: linear-gradient(to ${direction}, ${theme.palette[from]} 0%, ${theme.palette[to]} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `
  }

  return `color: ${theme.palette[color || 'shade3']};`
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
