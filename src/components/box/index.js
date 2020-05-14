import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'

const resolveBackground = props => {
  const { background } = props

  if (!background) {
    return ''
  }

  if (isPlainObject(background)) {
    const { from, to, direction } = background

    return `background-image: linear-gradient(to ${direction || 'right'}, ${
      theme.palette[from || 'primary']
    } 0%, ${theme.palette[to || 'primary00']} 100%);`
  }

  return `
    background-color: ${theme.palette[background || 'primary']};
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

const Box = styled.div`
  width: 100%;
  ${resolveRounded}
  ${resolveDisplay}
  ${resolveTextAlign}
  ${resolveBackground}
`

export default Box
