import React from 'react'
import { keys } from 'lodash'
import styled from 'styled-components'
import { text, select, boolean, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Typography } from 'components'
import { readableTextColor } from 'utils'
import Box from './index'

const metadata = {
  title: 'Layout|Box',
  includeStories: []
}

const StyledBox = styled(Box)`
  min-height: ${theme.spacing(15)};
  padding: ${theme.spacing(0, 2)};
  width: calc(100% - ${theme.spacing(4)});
`

export const Normal = () => {
  const color = select('color', keys(theme.palette), 'primary')

  const center = boolean('center', false)

  const rounded = boolean('rounded', false)

  const display = text('display', 'flex')

  const justifyContent = text('justifyContent', 'space-between')

  const alignItems = text('alignItems', 'flex-start')

  const value = text('text', 'Placeholder')

  const textColor = readableTextColor(color)

  return (
    <StyledBox
      color={color}
      center={center}
      rounded={rounded}
      display={display}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      <Typography variant="h1" color={textColor}>
        {value}
      </Typography>
    </StyledBox>
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'shade1',
    to: 'primary75',
    direction: 'right bottom'
  }

  const color = object('color', defaultValue)

  return <StyledBox color={color} />
}

export default metadata
