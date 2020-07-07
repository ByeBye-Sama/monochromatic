import React, { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import Box from 'components/box'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  blur?: number
  boxShadow?: number
  gradient?: {
    color?: string
    direction?: string
    height?: number | string
    width?: number | string
  }
  grayscale?: number
  height?: number | string
  objectFit?: string
  width?: number | string
}

const resolveHeight = (props: ImageProps) => {
  const { height } = props

  if (!height) {
    return ''
  }

  if (typeof height === 'string') {
    return `
      height: ${height};
    `
  }

  return `
    height: ${theme.spacing(height)};
  `
}

const resolveWidth = (props: ImageProps) => {
  const { width } = props

  if (!width) {
    return ''
  }

  if (typeof width === 'string') {
    return `
      width: ${width};
    `
  }

  return `
    width: ${theme.spacing(width)};
  `
}

const resolveObjectFit = (props: ImageProps) => {
  const { objectFit } = props

  if (!objectFit) {
    return ''
  }

  return `
    object-fit: ${objectFit};
  `
}

const resolveBoxShadow = (props: ImageProps) => {
  const { boxShadow } = props

  if (!boxShadow) {
    return ''
  }

  return `
    ${theme.boxShadow(boxShadow)}
  `
}

const resolveBlur = (props: ImageProps) => {
  const { blur, grayscale } = props

  if (!blur) {
    return ''
  }

  if (!grayscale) {
    return `
      filter: blur(${blur}px);
    `
  }

  return `
    filter: blur(${blur}px) grayscale(${grayscale});
  `
}

const resolveGrayscale = (props: ImageProps) => {
  const { grayscale, blur } = props

  if (!grayscale) {
    return ''
  }

  if (!blur) {
    return `
      filter: grayscale(${grayscale});
    `
  }

  return `
    filter: blur(${blur}px) grayscale(${grayscale});
  `
}

const resolveGradient = (props: ImageProps) => {
  const { gradient } = props

  if (!gradient) {
    return ''
  }

  const { color, direction, height, width } = gradient

  return `
    background-image: linear-gradient(to ${direction || 'right'}, ${
    theme.palette[color || 'primary']
  }, ${theme.palette['primary00']});
    height: ${height || '100%'};
    width: ${width || '100%'};
  `
}

const resolvePosition = (props: ImageProps) => {
  const { direction } = props.gradient

  if (!direction) {
    return ''
  }

  if (direction === 'top') {
    return `
      bottom: 0;
    `
  }

  if (direction === 'left') {
    return `
      right: 0;
    `
  }

  return ''
}

const Container = styled.img`
  display:block;
  width: 100%;
  ${resolveHeight}
  ${resolveWidth}
  ${resolveBoxShadow}
  ${resolveObjectFit}
  ${resolveBlur}
  ${resolveGrayscale}
`

const StyledBox = styled(props => <Box {...props} />)`
  position: relative;
  width: fit-content;
`

const GradientSpan = styled.span`
  position: absolute;
  ${resolveGradient}
  ${resolvePosition}
`

const Image = (props: ImageProps) => {
  const {
    blur,
    boxShadow,
    gradient,
    grayscale,
    height,
    objectFit,
    width,
    ...rest
  } = props

  const renderContent = () => {
    return (
      <Container
        blur={blur}
        boxShadow={boxShadow}
        grayscale={grayscale}
        height={height}
        objectFit={objectFit}
        width={width}
        {...rest}
      />
    )
  }

  if (gradient) {
    return (
      <StyledBox>
        <GradientSpan gradient={gradient} />
        {renderContent()}
      </StyledBox>
    )
  }

  return renderContent()
}

Image.defaultProps = {
  blur: null,
  boxShadow: null,
  gradient: null,
  grayscale: null,
  height: null,
  objectFit: 'cover',
  width: null
}

export default Image
