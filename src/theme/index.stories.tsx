import React from 'react'
import styled from 'styled-components'
import { toUpper, startsWith } from 'lodash'
import { color, select } from '@storybook/addon-knobs'
import { rgba, tint, shade, readableColor, transparentize, mix } from 'polished'
import { Typography, Box } from 'components'
import { theme } from './index'

const metadata = {
  title: 'System|Theme',
  includeStories: [],
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#E0E0E0', default: true },
        { name: 'dark', value: '#333333' }
      ]
    }
  }
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

interface PalleteProps {
  bgColor?: any
  textColor?: any
  label?: string
  value?: string
  opacityValue?: string
}

const Container = styled(Box)`
  flex-direction: column;
`

const SolidContainer = styled(Container)<PalleteProps>`
  background-color: ${props => props.bgColor};
  padding: ${theme.spacing(2, 0)};
`

const GradientContainer = styled(Container)<PalleteProps>`
  background-image: linear-gradient(
    to ${props => props.bgColor.direction},
    ${props => props.bgColor.from} 0%,
    ${props => props.bgColor.to} 100%
  );
  padding: ${theme.spacing(3, 0)};
`

const TextBox = styled(Box)`
  > :not(:last-child) {
    margin-right: ${theme.spacing(2)};
  }
`

const StyledTypography = styled(Typography)<PalleteProps>`
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

const ColorBox = (props: PalleteProps) => {
  const { label, bgColor, value, opacityValue } = props

  const textColor = readableColor(bgColor)

  const renderColor = resolveColor(bgColor)

  const renderValue = resolveColor(value)

  return (
    <SolidContainer center bgColor={renderColor}>
      <StyledTypography variant="h6" textColor={textColor}>
        {label}
      </StyledTypography>
      <TextBox center>
        <StyledTypography variant="body1" textColor={textColor}>
          {value ? toUpper(renderValue) : toUpper(renderColor)}
        </StyledTypography>
        {opacityValue && (
          <StyledTypography variant="body2" textColor={textColor}>
            OPACITY: {opacityValue}
          </StyledTypography>
        )}
      </TextBox>
    </SolidContainer>
  )
}

const GradientBox = (props: PalleteProps) => {
  const { bgColor } = props

  const { from, to, direction } = bgColor

  const mixColor = mix(0.5, from, to)

  const textColor = readableColor(mixColor)

  return (
    <GradientContainer center bgColor={bgColor}>
      <StyledTypography variant="h6" textColor={textColor}>
        GRADIENT TO {toUpper(direction)}
      </StyledTypography>
    </GradientContainer>
  )
}

export const Palette = () => {
  const primary = color('primaryColor', theme.palette.primary)

  const palette = {
    white: '#ffffff',
    tint3: tint(0.75, primary),
    tint2: tint(0.5, primary),
    tint1: tint(0.25, primary),
    primary,
    shade1: shade(0.25, primary),
    shade2: shade(0.5, primary),
    shade3: shade(0.75, primary),
    black: '#000000',
    primary00: transparentize(1, primary),
    primary25: transparentize(0.75, primary),
    primary50: transparentize(0.5, primary),
    primary75: transparentize(0.25, primary)
  }

  // Knobs don't handle dynamic default value, change it when it works
  // https://github.com/storybookjs/storybook/issues/8376
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
        <GradientBox bgColor={{ from: fromColor, to: toColor, direction }} />
      </Box>
    </>
  )
}

export const TextStyle = () => {
  return (
    <>
      <Typography variant="h1">textStyle h1</Typography>
      <Typography variant="h2">textStyle h2</Typography>
      <Typography variant="h3">textStyle h3</Typography>
      <Typography variant="h4">textStyle h4</Typography>
      <Typography variant="h5">textStyle h5</Typography>
      <Typography variant="h6">textStyle h6</Typography>
      <Typography variant="body1">textStyle body1</Typography>
      <Typography variant="body2">textStyle body2</Typography>
    </>
  )
}

const Container1 = styled(Box)`
  height: ${theme.spacing(1)};
  width: ${theme.spacing(1)};
`

const Container2 = styled(Box)`
  height: ${theme.spacing(2)};
  width: ${theme.spacing(2)};
`

const Container3 = styled(Box)`
  height: ${theme.spacing(3)};
  width: ${theme.spacing(3)};
`

const Container4 = styled(Box)`
  height: ${theme.spacing(4)};
  width: ${theme.spacing(4)};
`

const Container5 = styled(Box)`
  height: ${theme.spacing(5)};
  width: ${theme.spacing(5)};
`

export const Spacing = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box display="flex" flexDirection="column" center>
          <Container1 color="primary" />
          <Typography>theme.spacing(1)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <Container2 color="primary" />
          <Typography>theme.spacing(2)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <Container3 color="primary" />
          <Typography>theme.spacing(3)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <Container4 color="primary" />
          <Typography>theme.spacing(4)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <Container5 color="primary" />
          <Typography>theme.spacing(5)</Typography>
        </Box>
      </Box>
    </>
  )
}

interface BoxShadowProps {
  boxShadow?: number
}

const resolveBoxShadow = (props: BoxShadowProps) => {
  const { boxShadow } = props

  if (!boxShadow) {
    return ''
  }

  return `
    ${theme.boxShadow(boxShadow)}
  `
}

const BoxShadowComponent = styled(Box)`
  height: ${theme.spacing(8)};
  width: ${theme.spacing(8)};
  ${resolveBoxShadow}
`

export const BoxShadow = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={1} />
          <br />
          <Typography>theme.boxShadow(1)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={2} />
          <br />
          <Typography>theme.boxShadow(2)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={3} />
          <br />
          <Typography>theme.boxShadow(3)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={4} />
          <br />
          <Typography>theme.boxShadow(4)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={5} />
          <br />
          <Typography>theme.boxShadow(5)</Typography>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <Box display="flex" justifyContent="space-around" alignItems="center">
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={6} />
          <br />
          <Typography>theme.boxShadow(6)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={7} />
          <br />
          <Typography>theme.boxShadow(7)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={8} />
          <br />
          <Typography>theme.boxShadow(8)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={9} />
          <br />
          <Typography>theme.boxShadow(9)</Typography>
        </Box>
        <Box display="flex" flexDirection="column" center>
          <BoxShadowComponent color="white" boxShadow={10} />
          <br />
          <Typography>theme.boxShadow(10)</Typography>
        </Box>
      </Box>
    </>
  )
}

const BreakpointComponent = styled(Box)`
  background: ${theme.palette.black};
  padding: ${theme.spacing(5)};

  ${theme.breakpoint.lg`
    background: ${theme.palette.shade2};
  `}

  ${theme.breakpoint.md`
    background: ${theme.palette.primary};
  `}

  ${theme.breakpoint.sm`
    background: ${theme.palette.tint1};
  `}

  ${theme.breakpoint.xs`
    background: ${theme.palette.tint2};
  `}
`

export const Breakpoint = () => {
  return (
    <BreakpointComponent center>
      <Typography variant="h3" color="white">
        Modify color when theme.breakpoint change.
      </Typography>
    </BreakpointComponent>
  )
}

export default metadata
