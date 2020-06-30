import React from 'react'
import { keys } from 'lodash'
import { text, select, boolean, number } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { moods, cloudinaryPath } from 'constants.js'
import Avatar from './index'

const metadata = {
  title: 'Data Display|Avatar',
  includeStories: []
}

export const Normal = () => {
  const color = select('color', keys(theme.palette), 'primary')

  const mood = select('mood', moods, 'random')

  const outlined = boolean('outlined', false)

  const size = number('size', 5)

  return <Avatar color={color} mood={mood} outlined={outlined} size={size} />
}

export const Image = () => {
  const color = select('color', keys(theme.palette), 'primary')

  const path = `${cloudinaryPath}/v1591074685/monochromatic/stories/avatar.jpg`

  const src = text('src', path)

  const alt = text('alt', 'avatar')

  const outlined = boolean('outlined', false)

  const size = number('size', 5)

  return (
    <Avatar alt={alt} color={color} outlined={outlined} size={size} src={src} />
  )
}

export default metadata
