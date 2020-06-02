import React from 'react'
import styled from 'styled-components'
import { theme } from 'theme'

interface AvatarProps {
  alt?: string
  color?: string
  height?: number
  outlined?: boolean
  src?: string
  width?: number
}

const resolveHeight = (props: AvatarProps) => {
  const { height } = props

  if (!height) {
    return ''
  }

  return `
    height: ${theme.spacing(height || 5)};
  `
}

const resolveWidth = (props: AvatarProps) => {
  const { width } = props

  if (!width) {
    return ''
  }

  return `
    width: ${theme.spacing(width || 5)};
  `
}

const resolveColor = (props: AvatarProps) => {
  const { color, outlined } = props

  const algo = !color && outlined

  console.log('algo', algo)

  if (!outlined) {
    return ''
  }

  return `
    border: 3px solid ${theme.palette[color || 'primary']};
  `
}

const Container = styled.img`
  height: ${theme.spacing(5)};
  object-fit: cover;
  width: ${theme.spacing(5)};
  border-radius: 50%;
  ${resolveColor}
  ${resolveHeight}
  ${resolveWidth}
`

const Avatar = (props: AvatarProps) => {
  const { color, src, alt, height, width, outlined, ...rest } = props

  return (
    <Container
      src={src}
      alt={alt}
      color={color}
      width={width}
      height={height}
      outlined={outlined}
      {...rest}
    />
  )
}

Avatar.defaultProps = {
  alt: '',
  color: '',
  height: 5,
  outlined: false,
  src: '',
  width: 5
}

export default Avatar
