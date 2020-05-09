import React from 'react'
import { keys } from 'lodash'
import { text, select } from '@storybook/addon-knobs'
import { theme } from 'theme'
import Typography from './index'

const metadata = {
  title: 'Data Display|Typography'
}

export const Normal = () => {
  const value = text('value', 'Placeholder')

  const color = select('color', keys(theme.palette), 'primary')

  const variant = select('variant', keys(theme.textStyles), 'h1')

  const align = select('align', ['left', 'center', 'right'], 'left')

  return (
    <Typography variant={variant} color={color} align={align}>
      {value}
    </Typography>
  )
}

export default metadata
