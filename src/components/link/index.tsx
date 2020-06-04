import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'
import { colorExists } from 'utils'

interface LinkProps {
  children?: ReactNode
  color?: any
  href?: string
  onClick?: () => void
  rel?: string
  target?: string
  underline?: string
}

const underlineGradientStyle = (direction, fromColor, toColor) => {
  return `
    background: linear-gradient(to ${direction ||
      'right'}, ${fromColor} 0%, ${toColor} 100%);
    bottom: 3px;
    content: "";
    height: 2px;
    left: 0;
    position: absolute;
    width: 100%;
  `
}

const resolveColor = (props: LinkProps) => {
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

      :hover::after {
        ${underlineGradientStyle(direction, fromColor, toColor)}
       }
    `
  }

  return `color: ${theme.palette[color || 'primary']};`
}

const resolveUnderline = (props: LinkProps) => {
  const { underline, color } = props

  if (!underline) {
    return ''
  }

  if (underline === 'none') {
    if (isPlainObject(color)) {
      return `
        :hover::after {
          content: none;
        }
      `
    }

    return ` 
      :hover {
        text-decoration: none;
      }
    `
  }

  if (underline === 'always') {
    if (isPlainObject(color)) {
      const { from, to, direction } = color

      const fromColor = theme.palette[colorExists(from, 'primary')]

      const toColor = theme.palette[colorExists(to, 'primary00')]

      return `
        ::after {
          ${underlineGradientStyle(direction, fromColor, toColor)}
        }
      `
    }

    return `
      text-decoration: underline;   
    `
  }

  return ''
}

const Container = styled.a`
  cursor: pointer;
  position: relative;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }

  ${resolveColor}
  ${resolveUnderline}
`

const Link = (props: LinkProps) => {
  const {
    rel,
    href,
    color,
    target,
    onClick,
    children,
    underline,
    ...rest
  } = props

  return (
    <Container
      rel={rel}
      href={href}
      color={color}
      target={target}
      onClick={onClick}
      underline={underline}
      {...rest}
    >
      {children}
    </Container>
  )
}

Link.defaultProps = {
  children: null,
  color: 'primary',
  href: null,
  onClick: null,
  rel: null,
  target: null,
  underline: 'hover'
}

export default Link
