import React from 'react'
import { keys } from 'lodash'
import { action } from '@storybook/addon-actions'
import { text, select, boolean, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import Button from './index'

const metadata = {
  title: 'Inputs|Button'
}

const variants = ['contained', 'outlined', 'text']

const sizes = ['small', 'medium', 'large']

export const Normal = () => {
  const onClick = action('onClick')

  const color = select('color', keys(theme.palette), 'primary')

  const variant = select('variant', variants, 'contained')

  const size = select('size', sizes, 'medium')

  const disabled = boolean('disabled', false)

  const fullWidth = boolean('fullWidth', false)

  const disableRounded = boolean('disableRounded', false)

  const disableElevation = boolean('disableElevation', false)

  const value = text('text', 'Primary')

  return (
    <Button
      size={size}
      color={color}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      disableRounded={disableRounded}
      disableElevation={disableElevation}
    >
      {value}
    </Button>
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'shade2',
    to: 'primary',
    direction: 'right bottom'
  }

  const onClick = action('onClick')

  const color = object('color', defaultValue)

  const variant = select('variant', variants, 'contained')

  const value = text('text', 'Placeholder')

  return (
    <Button onClick={onClick} color={color} variant={variant}>
      {value}
    </Button>
  )
}

export default metadata
