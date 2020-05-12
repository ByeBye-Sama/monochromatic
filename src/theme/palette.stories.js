import React from 'react'
import { toUpper, startsWith } from 'lodash'
import styled from 'styled-components'
import { color } from '@storybook/addon-knobs'
import { tint, shade, readableColor, rgba } from 'polished'
import { Typography, Box } from 'components'
import { theme } from './index'

const metadata = {
  title: 'Theme|Palette'
}

const StyledBox = styled(Box)`
  align-items: center;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${theme.spacing(2, 0)};
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
  const { value, bgColor } = props

  const textColor = readableColor(bgColor)

  const renderColor = resolveColor(bgColor)

  return (
    <StyledBox bgColor={renderColor}>
      <StyledTypography variant="h5" textColor={textColor}>
        {value}
      </StyledTypography>
      <StyledTypography variant="body1" textColor={textColor}>
        {toUpper(renderColor)}
      </StyledTypography>
    </StyledBox>
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
    black: '#000000'
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <ColorBox value="WHITE" bgColor={palette.white} />
      <ColorBox value="TINT3" bgColor={palette.tint3} />
      <ColorBox value="TINT2" bgColor={palette.tint2} />
      <ColorBox value="TINT1" bgColor={palette.tint1} />
      <ColorBox value="PRIMARY" bgColor={palette.primary} />
      <ColorBox value="SHADE1" bgColor={palette.shade1} />
      <ColorBox value="SHADE2" bgColor={palette.shade2} />
      <ColorBox value="SHADE3" bgColor={palette.shade3} />
      <ColorBox value="BLACK" bgColor={palette.black} />
    </Box>
  )
}

export default metadata
