import React from 'react'
import { keys, isPlainObject } from 'lodash'
import { action } from '@storybook/addon-actions'
import { text, select, boolean, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Icon } from 'components'
import { readableTextColor } from 'utils'
import Button from './index'

const metadata = {
  title: 'Inputs|Button',
  includeStories: []
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

  const loading = boolean('loading', false)

  const disableRounded = boolean('disableRounded', false)

  const disableElevation = boolean('disableElevation', false)

  const value = text('text', 'Primary')

  return (
    <Button
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      disableRounded={disableRounded}
      fullWidth={fullWidth}
      loading={loading}
      onClick={onClick}
      size={size}
      variant={variant}
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

  const disabled = boolean('disabled', false)

  const loading = boolean('loading', false)

  const value = text('text', 'Placeholder')

  return (
    <Button
      color={color}
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      loading={loading}
    >
      {value}
    </Button>
  )
}

export const WithIcon = () => {
  const onClick = action('onClick')

  const iconType = text('iconType', 'send')

  const hasStartIcon = boolean('startIcon', false)

  const hasEndIcon = boolean('endIcon', true)

  const color = select('color', keys(theme.palette), 'primary')

  const variant = select('variant', variants, 'contained')

  const size = select('size', sizes, 'medium')

  const disabled = boolean('disabled', false)

  const fullWidth = boolean('fullWidth', false)

  const loading = boolean('loading', false)

  const disableRounded = boolean('disableRounded', false)

  const disableElevation = boolean('disableElevation', false)

  const iconVariant = variant === 'contained' ? 'filled' : 'outlined'

  const hasGradientText =
    isPlainObject(color) && (variant === 'text' || variant === 'outlined')

  const iconColor = hasGradientText ? color : readableTextColor(color)

  return (
    <Button
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      disableRounded={disableRounded}
      fullWidth={fullWidth}
      loading={loading}
      onClick={onClick}
      size={size}
      variant={variant}
      startIcon={
        hasStartIcon && (
          <Icon
            color={iconColor}
            type={iconType}
            variant={iconVariant}
            size={20}
          />
        )
      }
      endIcon={
        hasEndIcon && (
          <Icon
            color={iconColor}
            type={iconType}
            variant={iconVariant}
            size={20}
          />
        )
      }
    >
      {iconType}
    </Button>
  )
}

export default metadata
