import React from 'react'
import { keys } from 'lodash'
import { action } from '@storybook/addon-actions'
import { text, select } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Typography } from 'components'
import { Link, LinkProps } from './index'

const metadata = {
  title: 'Navigation|Link'
}

const underlineStyles = ['hover', 'none', 'always']

export const Normal = (props: LinkProps) => {
  const { ...args } = props

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
        {...args}
      >
        {value}
      </Link>
      . The Link component is built on top of the Typography component
    </Typography>
  )
}

Normal.argTypes = {
  children: {
    type: { required: false },
    description: 'testing',
    table: {
      type: {
        summary: 'color',
        detail: `${keys(theme.palette)}`
      }
    },
    control: {
      type: null
    }
  },
  underline: {
    description: 'description of prop',
    table: {
      type: {
        summary: 'hover | none | always'
      },
      defaultValue: {
        summary: 'hover'
      }
    },
    control: {
      type: null
    }
  },
  color: {
    description: 'testing',
    table: {
      type: {
        summary: 'color',
        detail: `${keys(theme.palette)}`
      }
    },
    control: {
      type: null
    }
  }
}

export default metadata
