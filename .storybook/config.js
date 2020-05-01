import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters } from '@storybook/react'

addParameters({
  backgrounds: [
    { name: 'light', value: '#D3D3D3', default: true },
    { name: 'dark', value: '#333333' }
  ]
})

addDecorator(withKnobs)
