import React from 'react'
import { keys } from 'lodash'
import styled from 'styled-components'
import { text, select, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Box } from 'components'
import Typography from './index'

const metadata = {
  title: 'Data Display|Typography',
  includeStories: []
}

const StyledBox = styled(Box)`
  width: 100%;
`

const textAlign = ['inherit', 'left', 'center', 'right', 'justify']

export const Normal = () => {
  const color = select('color', keys(theme.palette), 'primary')

  const value = text('value', 'Placeholder')

  const variant = select('variant', keys(theme.textStyles), 'h1')

  const align = select('align', textAlign, 'inherit')

  return (
    <StyledBox>
      <Typography variant={variant} color={color} align={align}>
        {value}
      </Typography>
    </StyledBox>
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'shade3',
    to: 'tint1',
    direction: 'right'
  }

  const color = object('color', defaultValue)

  const value = text('value', 'Placeholder')

  const variant = select('variant', keys(theme.textStyles), 'h1')

  return (
    <StyledBox>
      <Typography color={color} variant={variant}>
        {value}
      </Typography>
    </StyledBox>
  )
}

export default metadata
