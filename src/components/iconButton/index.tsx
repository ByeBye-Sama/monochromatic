import React, { ButtonHTMLAttributes } from 'react'
import { shade, mix, transparentize } from 'polished'
import styled from 'styled-components'
import { isPlainObject } from 'lodash'
import { theme } from 'theme'
import { Icon } from 'components'
import { readableTextColor, colorExists } from 'utils'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: any
  disabled?: boolean
  disableElevation?: boolean
  icon?: string
  iconVariant?: string
  padding?: number
  size?: string | number
  type?: 'button' | 'submit' | 'reset'
  variant?: string
}

const resolveColor = (props: IconButtonProps) => {
  const { color } = props

  if (!color) {
    return ''
  }

  if (isPlainObject(color)) {
    const { from, to, direction } = color

    const fromColor = theme.palette[colorExists(from, 'primary')]

    const toColor = theme.palette[colorExists(to, 'primary00')]

    const fromHover = shade(0.15, fromColor)

    const toHover = shade(0.15, toColor)

    const mixColor = mix(0.5, fromColor, toColor)

    return `
    background-image: linear-gradient(to ${direction ||
      'right'}, ${fromColor} 0%, ${toColor} 100%);

    :hover {
      background-image: linear-gradient(to ${direction ||
        'right'}, ${fromHover} 0%, ${toHover} 100%);
    }

    :focus {
      box-shadow: 0 0 3px 2px ${shade(0.25, mixColor)};
      outline: none;
    }
  `
  }

  const colorValue = theme.palette[color || 'primary']

  return `
    background-color: ${colorValue};

    :hover {
      background-color: ${shade(0.15, colorValue)};
    }

    :focus {
      box-shadow: 0 0 3px 2px ${shade(0.25, colorValue)};
      outline: none;
    }
  `
}

const resolveDisableElevation = (props: IconButtonProps) => {
  const { disableElevation } = props

  if (!disableElevation) {
    return ''
  }

  return `
    ${theme.boxShadow(0)}

    :hover {
      ${theme.boxShadow(0)}
    }
  `
}

const resolvePadding = (props: IconButtonProps) => {
  const { padding } = props

  if (!padding) {
    return ''
  }

  return `
    padding: ${theme.spacing(padding)};
  `
}

const resolveDisabled = (props: IconButtonProps) => {
  const { disabled, variant } = props

  if (!disabled) {
    return ''
  }

  const disabledStyle = `
    background-image: none;
    cursor: default;
    pointer-events:none;
    user-select: none;
    ${theme.boxShadow(0)}
   

    * {
      color: ${theme.palette.textDisabled} !important;
      -webkit-text-fill-color: unset !important;
    }

    :hover {
      ${theme.boxShadow(0)}
    }
  `

  if (variant === 'outlined') {
    return `
      border-image-source: none ;
      border-color: ${theme.palette.gray};
     
      ${disabledStyle}
    `
  }

  if (variant === 'text') {
    return `
      ${disabledStyle}
    `
  }

  return `
    background-color: ${theme.palette.disabled}; 
    ${disabledStyle}
  `
}

const resolveVariant = (props: IconButtonProps) => {
  const { variant, color } = props

  if (!variant) {
    return ''
  }

  const colorValue = theme.palette[color || 'primary']

  if (isPlainObject(color)) {
    const { from, to, direction } = color

    const fromColor = theme.palette[colorExists(from, 'primary')]

    const toColor = theme.palette[colorExists(to, 'primary00')]

    const fromHover = transparentize(0.85, fromColor)

    const toHover = transparentize(0.85, toColor)

    if (variant === 'text') {
      return `
        background: none;
        background-image: none;
        ${theme.boxShadow(0)}

        :hover {
          background-image: linear-gradient(to ${direction ||
            'right'}, ${fromHover} 0%, ${toHover} 100%);
          ${theme.boxShadow(0)}
        }
    `
    }

    return ''
  }

  if (variant === 'text') {
    return `
      background-color: transparent;
      ${theme.boxShadow(0)}

      * {
        color: ${colorValue} !important;
      }

      :hover {
        background-color: ${transparentize(0.85, colorValue)};
        ${theme.boxShadow(0)}
      }
    `
  }

  if (variant === 'outlined') {
    return `
      background-color: transparent;
      border: 1px solid ${colorValue};
      padding: ${theme.spacing(1.375)};
      ${theme.boxShadow(0)}

      * {
        color: ${colorValue} !important;
      }

      :hover {
        background-color: ${transparentize(0.85, colorValue)};
        border-color: ${shade(0.25, colorValue)};
        ${theme.boxShadow(0)}
      }
    `
  }

  return ''
}

const Container = styled.button`
  align-items: center;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: ${theme.spacing(1.5)};
  position: relative;
  transition: all 0.25s ease;
  ${theme.boxShadow(2)}
  ${resolveColor}

  :hover {
    ${theme.boxShadow(4)}
  }

  ${resolveDisableElevation}
  ${resolveVariant}
  ${resolveDisabled}
  ${resolvePadding}
`

const IconButton = (props: IconButtonProps) => {
  const {
    color,
    disabled,
    disableElevation,
    icon,
    iconVariant,
    padding,
    size,
    type,
    variant,
    ...rest
  } = props

  const hasGradientText =
    isPlainObject(color) && (variant === 'text' || variant === 'outlined')

  const textColor = hasGradientText ? color : readableTextColor(color)

  return (
    <Container
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      padding={padding}
      type={type}
      variant={variant}
      {...rest}
    >
      <Icon type={icon} color={textColor} variant={iconVariant} size={size} />
    </Container>
  )
}

IconButton.defaultProps = {
  color: 'primary',
  disabled: false,
  disableElevation: false,
  icon: null,
  iconVariant: 'filled',
  padding: null,
  size: 'medium',
  type: 'button',
  variant: 'text'
}

export default IconButton
