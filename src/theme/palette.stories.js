import React from 'react'
import styled from 'styled-components'
import { toUpper, startsWith } from 'lodash'
import { color, select } from '@storybook/addon-knobs'
import { rgba, tint, shade, readableColor, transparentize, mix } from 'polished'
import { Typography, Box } from 'components'
import { theme } from './index'

const metadata = {
  title: 'Theme|Palette'
}

const directions = [
  'right',
  'left',
  'top',
  'bottom',
  'right top',
  'right bottom',
  'left top',
  'left bottom'
]

const Container = styled(Box)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StyledBox = styled(Container)`
  background-color: ${props => props.bgColor};
  padding: ${theme.spacing(2, 0)};
`

const InnerBox = styled(Container)`
  background-image: linear-gradient(
    to ${props => props.bgColor.direction},
    ${props => props.bgColor.from} 0%,
    ${props => props.bgColor.to} 100%
  );
  padding: ${theme.spacing(3, 0)};
`

const TextBox = styled(Box)`
  align-items: center;
  display: flex;
  justify-content: center;

  > :not(:last-child) {
    margin-right: ${theme.spacing(2)};
  }
`

const StyledTypography = styled(Typography)`
  color: ${props => props.textColor};
`

const resolveColor = bgColor => {
  if (startsWith(bgColor, 'rgba')) {
    const rgbaArray = bgColor
      .slice(5, -1)
      .replace(/, +/g, ',')
      .split(',')
      .map(Number)

    return rgba(rgbaArray[0], rgbaArray[1], rgbaArray[2], rgbaArray[3])
  }

  return bgColor
}

const ColorBox = props => {
  const { label, bgColor, value, opacityValue } = props

  const textColor = readableColor(bgColor)

  const renderColor = resolveColor(bgColor)

  const renderValue = resolveColor(value)

  return (
    <StyledBox bgColor={renderColor}>
      <StyledTypography variant="h5" textColor={textColor}>
        {label}
      </StyledTypography>
      <TextBox>
        <StyledTypography variant="body1" textColor={textColor}>
          {value ? toUpper(renderValue) : toUpper(renderColor)}
        </StyledTypography>
        {opacityValue && (
          <StyledTypography variant="body2" textColor={textColor}>
            OPACITY: {opacityValue}
          </StyledTypography>
        )}
      </TextBox>
    </StyledBox>
  )
}

const GradiantBox = props => {
  const { bgColor } = props

  const { from, to, direction } = bgColor

  const mixColor = mix(0.5, from, to)

  const textColor = readableColor(mixColor)

  return (
    <InnerBox bgColor={bgColor}>
      <StyledTypography variant="h5" textColor={textColor}>
        GRADIANT TO {toUpper(direction)}
      </StyledTypography>
    </InnerBox>
  )
}

export const Normal = () => {
  const primaryColor = color('primaryColor', '#A9A9A9')

  const palette = {
    white: '#ffffff',
    tint3: tint(0.75, primaryColor),
    tint2: tint(0.5, primaryColor),
    tint1: tint(0.25, primaryColor),
    primary: primaryColor,
    shade1: shade(0.25, primaryColor),
    shade2: shade(0.5, primaryColor),
    shade3: shade(0.75, primaryColor),
    black: '#000000',
    primary00: transparentize(1, primaryColor),
    primary25: transparentize(0.75, primaryColor),
    primary50: transparentize(0.5, primaryColor),
    primary75: transparentize(0.25, primaryColor)
  }

  //re-render when primaryColor change
  const fromColor = select('from', palette, palette.primary)

  const toColor = select('to', palette, palette.primary00)

  const direction = select('direction', directions, 'right')

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <ColorBox label="WHITE" bgColor={palette.white} />
        <ColorBox label="TINT3" bgColor={palette.tint3} />
        <ColorBox label="TINT2" bgColor={palette.tint2} />
        <ColorBox label="TINT1" bgColor={palette.tint1} />
        <ColorBox label="PRIMARY" bgColor={palette.primary} />
        <ColorBox label="SHADE1" bgColor={palette.shade1} />
        <ColorBox label="SHADE2" bgColor={palette.shade2} />
        <ColorBox label="SHADE3" bgColor={palette.shade3} />
        <ColorBox label="BLACK" bgColor={palette.black} />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <ColorBox label="PRIMARY" bgColor={palette.primary} opacityValue="1" />
        <ColorBox
          label="PRIMARY75"
          bgColor={palette.primary75}
          value={palette.primary}
          opacityValue=".75"
        />
        <ColorBox
          label="PRIMARY50"
          bgColor={palette.primary50}
          value={palette.primary}
          opacityValue=".50"
        />
        <ColorBox
          label="PRIMARY25"
          bgColor={palette.primary25}
          value={palette.primary}
          opacityValue=".25"
        />
        <ColorBox
          label="PRIMARY00"
          bgColor={palette.primary00}
          value={palette.primary}
          opacityValue="0"
        />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <GradiantBox bgColor={{ from: fromColor, to: toColor, direction }} />
      </Box>
    </>
  )
}

export default metadata
