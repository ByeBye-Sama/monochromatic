import React from 'react'
import { text, number, object, select } from '@storybook/addon-knobs'
import { cloudinaryPath } from 'constants.js'
import Image from './index'

const metadata = {
  title: 'Data Display|Image'
}

const objectFitValues = ['fill', 'contain', 'cover', 'scale-down', 'none']

const shadowRange = {
  range: true,
  min: 0,
  max: 10,
  step: 1
}

const grayscaleRange = {
  range: true,
  min: 0,
  max: 1,
  step: 0.1
}

export const Normal = () => {
  const path = `${cloudinaryPath}/v1591074685/monochromatic/stories/Avatar.jpg`

  const src = text('src', path)

  const alt = text('alt', 'image')

  const height = number('height', 40)

  const width = number('width', 40)

  const objectFit = select('objectFit', objectFitValues, 'cover')

  const boxShadow = number('boxShadow', 0, shadowRange)

  const grayscale = number('grayscale', 0, grayscaleRange)

  const blur = number('blur', 0)

  return (
    <Image
      alt={alt}
      blur={blur}
      boxShadow={boxShadow}
      grayscale={grayscale}
      height={height}
      objectFit={objectFit}
      src={src}
      width={width}
    />
  )
}

export const Gradient = () => {
  const defaultValue = {
    color: 'shade1',
    direction: 'bottom',
    height: '50%',
    width: '100%'
  }

  const gradient = object('color', defaultValue)

  const path = `${cloudinaryPath}/v1591074685/monochromatic/stories/Avatar.jpg`

  const src = text('src', path)

  const alt = text('alt', 'image')

  const height = text('height', '80vh')

  const width = text('width', '40vw')

  const objectFit = select('objectFit', objectFitValues, 'cover')

  const boxShadow = number('boxShadow', 0, shadowRange)

  return (
    <Image
      alt={alt}
      boxShadow={boxShadow}
      gradient={gradient}
      height={height}
      objectFit={objectFit}
      src={src}
      width={width}
    />
  )
}

export default metadata
