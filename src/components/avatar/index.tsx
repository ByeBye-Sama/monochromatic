import React from 'react'
import { isEmpty } from 'lodash'
import { shade } from 'polished'
import { Planet } from 'react-kawaii'
import styled from 'styled-components'
import { theme } from 'theme'

interface AvatarProps {
  alt?: string
  border?: string
  color?: string
  height?: number
  mood?: string
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

  if (!outlined) {
    return ''
  }

  return `
    border: 3px solid ${theme.palette[color || 'primary']};
  `
}

const resolveBorder = (props: AvatarProps) => {
  const { border, outlined } = props

  if (!outlined) {
    return ''
  }

  return `
    border: 3px solid ${shade(0.3, theme.palette[border || 'primary'])};
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

const Border = styled.div`
  border-radius: 50%;
  ${resolveBorder}
  ${resolveHeight}
  ${resolveWidth}
`

const Avatar = (props: AvatarProps) => {
  const {
    src,
    alt,
    mood,
    color,
    width,
    border,
    height,
    outlined,
    ...rest
  } = props

  const size = height * 8 || width * 8 || 40

  const chooseMood = (mood: string) => {
    if (isEmpty(mood) || mood === 'random') {
      const moods = [
        'sad',
        'shocked',
        'happy',
        'blissful',
        'lovestruck',
        'excited',
        'ko'
      ]

      const randomMood = moods[Math.floor(Math.random() * moods.length)]

      return randomMood
    }

    return mood
  }

  if (!src) {
    return (
      <Border width={width} height={height} outlined={outlined} border={color}>
        <Planet
          size={size}
          mood={chooseMood(mood)}
          color={theme.palette[color || 'primary']}
        />
      </Border>
    )
  }

  return (
    <Container
      src={src}
      alt={alt}
      color={color}
      border={border}
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
  width: 5,
  mood: 'random'
}

export default Avatar
