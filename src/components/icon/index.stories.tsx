import React from 'react'
import { keys } from 'lodash'
import { text, select, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Typography, Box, Link } from 'components'
import Icon from './index'

const metadata = {
  title: 'Data Display|Icon'
}

const AditionalInfo = () => {
  return (
    <Box>
      <Typography>
        Search for icon types {''}
        <Link
          href="https://material.io/resources/icons"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </Link>
      </Typography>
    </Box>
  )
}

const variants = ['filled', 'outlined']

const sizes = ['small', 'medium', 'large', 'extralarge']

export const Normal = () => {
  const type = text('type', 'home')

  const color = select('color', keys(theme.palette), 'primary')

  const variant = select('variant', variants, 'filled')

  const size = select('size', sizes, 'large')

  return (
    <>
      <AditionalInfo />
      <Icon type={type} variant={variant} color={color} size={size} />
    </>
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'shade2',
    to: 'tint1',
    direction: 'right'
  }

  const type = text('type', 'home')

  const color = object('color', defaultValue)

  const variant = select('variant', variants, 'filled')

  const size = select('size', sizes, 'large')

  return (
    <>
      <AditionalInfo />
      <Icon type={type} variant={variant} color={color} size={size} />
    </>
  )
}

export default metadata
