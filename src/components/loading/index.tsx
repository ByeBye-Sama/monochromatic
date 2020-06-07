import React from 'react'
import {
  CommonLoading,
  LoopCircleLoading,
  DisappearedLoading,
  SolarSystemLoading,
  RotateCircleLoading,
  WaveTopBottomLoading
} from 'react-loadingg'
import styled from 'styled-components'
import { theme } from 'theme'

interface LoadingProps {
  color?: string
  elementSize?: string
  height?: number
  position?: string
  speed?: number
  variant?: string
  width?: number
}

const resolveHeight = (props: LoadingProps) => {
  const { height } = props

  if (!height) {
    return ''
  }

  return `
    height: ${theme.spacing(height || 5)};
  `
}

const resolveWidth = (props: LoadingProps) => {
  const { width } = props

  if (!width) {
    return ''
  }

  return `
    width: ${theme.spacing(width || 5)};
  `
}

const resolvePosition = (props: LoadingProps) => {
  const { position } = props

  if (!position) {
    return ''
  }

  return `
    position: ${position};
  `
}

const Container = styled.div`
  height: ${theme.spacing(5)};
  position: relative;
  width: ${theme.spacing(5)};
  ${resolveWidth}
  ${resolveHeight}
  ${resolvePosition}
`

const Content = (props: LoadingProps) => {
  const { variant, color, elementSize, speed } = props

  const loadingColor = theme.palette[color || 'primary']

  const loadingSize = elementSize === 'medium' ? 'default' : elementSize

  const style = { height: 'inherit', width: 'inherit' }

  if (variant === 'linear') {
    return (
      <WaveTopBottomLoading
        color={loadingColor}
        size={loadingSize}
        speed={speed}
        style={style}
      />
    )
  }

  if (variant === 'linear2') {
    return (
      <DisappearedLoading
        color={loadingColor}
        size={loadingSize}
        speed={speed}
        style={style}
      />
    )
  }

  if (variant === 'circular2') {
    return (
      <CommonLoading
        color={loadingColor}
        size={loadingSize}
        speed={speed}
        style={style}
      />
    )
  }

  if (variant === 'solar') {
    return (
      <SolarSystemLoading
        color={loadingColor}
        size={loadingSize}
        speed={speed}
        style={style}
      />
    )
  }

  if (variant === 'diamond') {
    return (
      <RotateCircleLoading
        color={loadingColor}
        size={loadingSize}
        speed={speed}
        style={style}
      />
    )
  }

  return (
    <LoopCircleLoading
      color={loadingColor}
      size={loadingSize}
      speed={speed}
      style={style}
    />
  )
}

const Loading = (props: LoadingProps) => {
  const { variant, color, elementSize, speed, height, width, ...rest } = props

  return (
    <Container height={height} width={width} {...rest}>
      <Content
        variant={variant}
        color={color}
        elementSize={elementSize}
        speed={speed}
      />
    </Container>
  )
}

Loading.defaultProps = {
  color: 'primary',
  elementSize: 'medium',
  height: 5,
  position: 'relative',
  speed: 1,
  variant: 'circular',
  width: 5
}

export default Loading
