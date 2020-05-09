import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({
  backgrounds: [
    { name: 'light', value: '#D3D3D3', default: true },
    { name: 'dark', value: '#333333' }
  ]
})

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } })

addDecorator(withKnobs)
