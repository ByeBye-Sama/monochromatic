import styled from 'styled-components'
import { theme } from 'theme'

const resolveColor = props => {
  const { color } = props

  return theme.palette[color || 'primary']
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
  color: ${resolveColor};
  display: inline-block;
  text-decoration: none;

  ${resolveAlign}
  ${resolveVariant}
`

export default Typography
