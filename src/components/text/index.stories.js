import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import Text from './index'
import { keys } from 'lodash'
import theme from 'theme'

const metadata = {
  title: 'Theme|Text'
}

export const Normal = () => {
  const value = text('value', 'Placeholder')

  const color = select('color', keys(theme.colors))

  const textStyle = select('textStyle', keys(theme.textStyles))

  const textAlign = select('textAlign', ['left', 'center', 'right'])

  return (
    <Text textStyle={textStyle} color={color} textAlign={textAlign}>
      {value}
    </Text>
  )
}

export default metadata
