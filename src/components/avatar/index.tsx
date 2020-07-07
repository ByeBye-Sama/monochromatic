import React, { ImgHTMLAttributes } from 'react'
import { isEmpty } from 'lodash'
import { shade } from 'polished'
import { Planet } from 'react-kawaii'
import styled from 'styled-components'
import { theme } from 'theme'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  color?: string
  mood?: string
  outlined?: boolean
  size?: number
}

const resolveSize = (props: AvatarProps) => {
  const { size } = props

  if (!size) {
    return ''
  }

  return `
    height: ${theme.spacing(size || 5)};
    width: ${theme.spacing(size || 5)};
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
  const { color, outlined } = props

  if (!outlined) {
    return ''
  }

  return `
    border: 3px solid ${shade(0.3, theme.palette[color || 'primary'])};
  `
}

const Container = styled.img<AvatarProps>`
  height: ${theme.spacing(5)};
  object-fit: cover;
  width: ${theme.spacing(5)};
  border-radius: 50%;
  ${resolveColor}
  ${resolveSize}
`

const Border = styled.div`
  border-radius: 50%;
  ${resolveBorder}
  ${resolveSize}
`

const Avatar = (props: AvatarProps) => {
  const { src, mood, color, outlined, size, ...rest } = props

  const moodSize = size * 8 || 40

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
      <Border size={size} outlined={outlined} color={color}>
        <Planet
          size={moodSize}
          mood={chooseMood(mood)}
          color={theme.palette[color || 'primary']}
        />
      </Border>
    )
  }

  return (
    <Container
      color={color}
      outlined={outlined}
      size={size}
      src={src}
      {...rest}
    />
  )
}

Avatar.defaultProps = {
  color: null,
  mood: 'random',
  outlined: false,
  size: 5,
  src: null
}

export default Avatar
