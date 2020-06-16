import React, { ReactNode, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'
import { shade, mix, transparentize } from 'polished'
import { isPlainObject, isString, toUpper } from 'lodash'
import { theme } from 'theme'
import { Typography, Loading, Box } from 'components'
import { readableTextColor, colorExists } from 'utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  color?: any
  disabled?: boolean
  disableElevation?: boolean
  disableRounded?: boolean
  endIcon?: ReactNode
  fullWidth?: boolean
  loading?: boolean
  loadingColor?: string
  size?: string
  startIcon?: ReactNode
  variant?: string
}

const StyledBox = styled(props => <Box {...props} />)`
  visibility: hidden;

  > :not(:last-child) {
    margin-right: ${theme.spacing(1)};
  }
`

const WithIconBox = styled(props => <Box {...props} />)`
  > :not(:last-child) {
    margin-right: ${theme.spacing(1)};
  }
`

const resolveColor = (props: ButtonProps) => {
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

const resolveDisableRounded = (props: ButtonProps) => {
  const { disableRounded } = props

  if (!disableRounded) {
    return ''
  }

  return `
    border-radius: 0; 
  `
}

const resolveDisableElevation = (props: ButtonProps) => {
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

const resolveWidth = (props: ButtonProps) => {
  const { fullWidth } = props

  if (!fullWidth) {
    return ''
  }

  return `
    width: 100%;
  `
}

const resolveSize = (props: ButtonProps) => {
  const { size, variant } = props

  const smallFontSize = `
    * {
      font-size: 18px !important;
    }
  `

  const largeFontSize = `
    * {
      font-size: 22px !important;
    }
`

  if (!size) {
    return ''
  }

  if (size === 'small') {
    if (variant === 'outlined') {
      return `
        padding: ${theme.spacing(0.375, 1.125)};
        ${smallFontSize}
      `
    }

    if (variant === 'text') {
      return `
        padding: ${theme.spacing(0.5, 0.625)};
        ${smallFontSize}
      `
    }

    return `
      padding: ${theme.spacing(0.5, 1.25)};
      ${smallFontSize}
    `
  }

  if (size === 'large') {
    if (variant === 'outlined') {
      return `
        padding: ${theme.spacing(0.875, 2.875)};
        ${largeFontSize}
      `
    }

    if (variant === 'text') {
      return `
        padding: ${theme.spacing(1, 1.375)};
        ${largeFontSize}
      `
    }

    return `
      padding: ${theme.spacing(1, 3)};
      ${largeFontSize}
    `
  }

  return ''
}

const resolveDisabled = (props: ButtonProps) => {
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

const resolveVariant = (props: ButtonProps) => {
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
        padding: ${theme.spacing(0.75, 1)};
        ${theme.boxShadow(0)}

        :hover {
          background-image: linear-gradient(to ${direction ||
            'right'}, ${fromHover} 0%, ${toHover} 100%);
          ${theme.boxShadow(0)}
        }
    `
    }

    if (variant === 'outlined') {
      return `
        background: none;
        background-image: none;
        border: 2px solid;
        border-image-slice: 1;
        border-image-source: linear-gradient(to ${direction ||
          'right'}, ${fromColor}, ${toColor});
        border-radius: 0;
        padding: ${theme.spacing(0.625, 1.875)};
        ${theme.boxShadow(0)}

        :hover {
          background-image: linear-gradient(to ${direction ||
            'right'}, ${fromHover} 0%, ${toHover} 100%);
          ${theme.boxShadow(0)}
        }
      `
    }
  }

  if (variant === 'text') {
    return `
      background-color: transparent;
      padding: ${theme.spacing(0.75, 1)};
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
      padding: ${theme.spacing(0.625, 1.875)};
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
  border-radius: ${theme.spacing(0.5)};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: ${theme.spacing(0.75, 2)};
  position: relative;
  transition: all 0.25s ease;
  ${theme.boxShadow(2)}
  ${resolveDisableRounded}
  ${resolveColor}
  ${resolveWidth}

  :hover {
    ${theme.boxShadow(4)}
  }

  ${resolveDisableElevation}
  ${resolveVariant}
  ${resolveDisabled}
  ${resolveSize}
`

const Button = (props: ButtonProps) => {
  const {
    children,
    color,
    disabled,
    disableElevation,
    disableRounded,
    endIcon,
    fullWidth,
    loading,
    loadingColor,
    size,
    startIcon,
    variant,
    ...rest
  } = props

  const hasGradientText =
    isPlainObject(color) && (variant === 'text' || variant === 'outlined')

  const textColor = hasGradientText ? color : readableTextColor(color)

  const getLoadingColor = () => {
    if (loadingColor) {
      return loadingColor
    }

    if (variant === 'outlined' || variant === 'text') {
      return isPlainObject(color) ? color.from : color
    }

    return readableTextColor(color)
  }

  console.log('color', getLoadingColor())

  const renderLoading = () => {
    return (
      <Loading
        color={getLoadingColor()}
        elementSize="small"
        height={2}
        position="absolute"
        variant="linear2"
        width={5}
      />
    )
  }

  const defaultContent = () => {
    if (startIcon || endIcon) {
      return (
        <WithIconBox display="flex" center>
          {startIcon && startIcon}
          <Typography variant="h5" color={textColor}>
            {toUpper(children)}
          </Typography>
          {endIcon && endIcon}
        </WithIconBox>
      )
    }

    return (
      <Typography variant="h5" color={textColor}>
        {toUpper(children)}
      </Typography>
    )
  }

  const renderContent = () => {
    if (!isString(children)) {
      if (loading) {
        return (
          <>
            <StyledBox>
              {startIcon && startIcon}
              {children}
              {endIcon && endIcon}
            </StyledBox>
            {renderLoading()}
          </>
        )
      }

      if (startIcon || endIcon) {
        return (
          <WithIconBox>
            {startIcon && startIcon}
            {children}
            {endIcon && endIcon}
          </WithIconBox>
        )
      }

      return children
    }

    if (loading) {
      return (
        <>
          <StyledBox>{defaultContent()}</StyledBox>
          {renderLoading()}
        </>
      )
    }

    return defaultContent()
  }

  return (
    <Container
      color={color}
      disabled={disabled}
      disableElevation={disableElevation}
      disableRounded={disableRounded}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      {...rest}
    >
      {renderContent()}
    </Container>
  )
}

Button.defaultProps = {
  children: null,
  color: 'primary',
  disabled: false,
  disableElevation: false,
  disableRounded: false,
  endIcon: null,
  fullWidth: false,
  loading: false,
  loadingColor: null,
  onClick: null,
  size: 'medium',
  startIcon: null,
  variant: 'contained'
}

export default Button
