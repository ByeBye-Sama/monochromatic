import React from 'react'
import { keys } from 'lodash'
import styled from 'styled-components'
import { readableColor } from 'polished'
import { text, select, boolean, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Typography } from 'components'
import Box from './index'

const metadata = {
  title: 'Layout|Box'
}

const StyledBox = styled(Box)`
  min-height: ${theme.spacing(15)};
  padding: ${theme.spacing(0, 2)};
  width: calc(100% - ${theme.spacing(4)});
`

export const Normal = () => {
  const background = select('background', keys(theme.palette), 'shade3')

  const center = boolean('center', false)

  const rounded = boolean('rounded', false)

  const display = text('display', 'flex')

  const justifyContent = text('justifyContent', 'space-between')

  const alignItems = text('alignItems', 'flex-start')

  const value = text('text', 'Placeholder')

  const color = readableColor(theme.palette[background])

  const textColor = color === '#fff' ? 'white' : 'black'

  return (
    <StyledBox
      center={center}
      display={display}
      background={background}
      alignItems={alignItems}
      justifyContent={justifyContent}
      rounded={rounded}
    >
      <Typography variant="h1" color={textColor}>
        {value}
      </Typography>
    </StyledBox>
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'shade3',
    to: 'primary00',
    direction: 'right bottom'
  }

  const background = object('background', defaultValue)

  return <StyledBox background={background} />
}

export default metadata
