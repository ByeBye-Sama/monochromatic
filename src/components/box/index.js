import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'

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

const Box = props => <Container {...props} />

Box.propTypes = {
  /**
   * String representing the value of this component.
   * Should be a JSON encoded array of each element
   */
  color: PropTypes.oneOfType([
    PropTypes.oneOfType(['primary', 'etc']),
    PropTypes.object
  ]),
  center: PropTypes.bool,
  rounded: PropTypes.bool,
  display: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string
}

Box.defaultProps = {
  color: 'primary'
}

export default Box
