import React from 'react'
import { keys } from 'lodash'
import { action } from '@storybook/addon-actions'
import { text, select, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Typography } from 'components'
import Link from './index'

const metadata = {
  title: 'Navigation|Link',
  includeStories: []
}

const underlineStyles = ['hover', 'none', 'always']

export const Normal = () => {
  const onClick = action('onClick')

  const color = select('color', keys(theme.palette), 'primary')

  const value = text('value', 'Link')

  const underline = select('underline', underlineStyles, 'hover')

  const href = text('href', 'https://github.com/ByeBye-Sama')

  return (
    <Typography variant="h4" color="black">
      This is an example for {''}
      <Link
        color={color}
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        target="_blank"
        underline={underline}
      >
        {value}
      </Link>
      . The Link component is built on top of the Typography component
    </Typography>
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'shade3',
    to: 'tint1',
    direction: 'right'
  }

  const onClick = action('onClick')

  const color = object('color', defaultValue)

  const value = text('text', 'Gradient Link')

  const underline = select('underline', underlineStyles, 'hover')

  const href = text('href', 'https://github.com/ByeBye-Sama')

  return (
    <Typography variant="h4" color="black">
      This is an example for {''}
      <Link
        color={color}
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        target="_blank"
        underline={underline}
      >
        {value}
      </Link>
      . The Link component is built on top of the Typography component
    </Typography>
  )
}

export default metadata
