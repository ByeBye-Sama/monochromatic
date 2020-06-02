import React from 'react'
import { keys } from 'lodash'
import { text, select, boolean, number } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { moods, cloudinaryPath } from 'constants.js'
import Avatar from './index'

const metadata = {
  title: 'Data Display|Avatar'
}

export const Normal = () => {
  const color = select('color', keys(theme.palette), 'primary')

  const mood = select('mood', moods, 'random')

  const outlined = boolean('outlined', false)

  const height = number('height', 5)

  const width = number('width', 5)

  return (
    <Avatar
      mood={mood}
      color={color}
      width={width}
      height={height}
      outlined={outlined}
    />
  )
}

export const Image = () => {
  const color = select('color', keys(theme.palette), 'primary')

  const path = `${cloudinaryPath}/v1591074685/monochromatic/stories/avatar.jpg`

  const src = text('src', path)

  const alt = text('alt', 'Avatar')

  const outlined = boolean('outlined', false)

  const height = number('height', 5)

  const width = number('width', 5)

  return (
    <Avatar
      src={src}
      alt={alt}
      color={color}
      width={width}
      height={height}
      outlined={outlined}
    />
  )
}

export default metadata
