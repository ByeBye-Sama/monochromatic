import { withKnobs } from '@storybook/addon-knobs'
import { addDecorator, addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({
  backgrounds: [
    { name: 'light', value: '#FFFFFF', default: true },
    { name: 'dark', value: '#333333' }
  ]
})

addParameters({ viewport: { viewports: INITIAL_VIEWPORTS } })

addDecorator(withKnobs)
