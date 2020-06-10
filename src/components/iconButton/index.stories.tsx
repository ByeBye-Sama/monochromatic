import React from 'react'
import { keys } from 'lodash'
import { action } from '@storybook/addon-actions'
import { text, select, boolean, object, number } from '@storybook/addon-knobs'
import { theme } from 'theme'
import IconButton from './index'

const metadata = {
  title: 'Inputs|IconButton'
}

const variants = ['contained', 'outlined', 'text']

const gradientVariants = ['contained', 'text']

const iconVariants = ['filled', 'outlined']

const sizes = ['small', 'medium', 'large', 'extralarge']

export const Normal = () => {
  const onClick = action('onClick')

  const icon = text('icon', 'delete')

  const color = select('color', keys(theme.palette), 'primary')

  const variant = select('variant', variants, 'text')

  const disabled = boolean('disabled', false)

  const size = select('size', sizes, 'medium')

  const iconVariant = select('iconVariant', iconVariants, 'filled')

  const disableElevation = boolean('disableElevation', false)

  const padding = number('padding', null)

  return (
    <IconButton
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      icon={icon}
      iconVariant={iconVariant}
      onClick={onClick}
      padding={padding}
      size={size}
      variant={variant}
    />
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'shade2',
    to: 'primary',
    direction: 'right bottom'
  }

  const onClick = action('onClick')

  const icon = text('icon', 'delete')

  const color = object('color', defaultValue)

  const variant = select('variant', gradientVariants, 'text')

  const disabled = boolean('disabled', false)

  const size = select('size', sizes, 'medium')

  const iconVariant = select('iconVariant', iconVariants, 'filled')

  const disableElevation = boolean('disableElevation', false)

  const padding = number('padding', null)

  return (
    <IconButton
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      icon={icon}
      iconVariant={iconVariant}
      onClick={onClick}
      padding={padding}
      size={size}
      variant={variant}
    />
  )
}

export default metadata
