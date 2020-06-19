import React from 'react'
import { keys } from 'lodash'
import styled from 'styled-components'
import { select, boolean, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Typography, CardContent, CardHeader } from 'components'
import Card from './index'

const metadata = {
  title: 'Surfaces|Card',
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

const StyledCard = styled(Card)`
  width: ${theme.spacing(60)};
`

const Content = () => {
  return (
    <>
      <CardHeader>
        <Typography variant="h3">Card Header</Typography>
      </CardHeader>
      <CardContent>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          tellus a augue congue gravida vestibulum et risus. Duis euismod felis
          sit amet vehicula posuere. Donec scelerisque pulvinar orci sed mollis.
          Praesent vel lectus sed nulla pellentesque efficitur. Integer gravida,
          risus eget tempus iaculis, elit quam tristique nisi, vel ultricies
          augue est vel tortor. Pellentesque ornare felis sit amet elit pharetra
          dapibus.
        </Typography>
      </CardContent>
    </>
  )
}

const variants = ['contained', 'outlined']

export const Normal = () => {
  const color = select('color', keys(theme.palette), 'white')

  const variant = select('variant', variants, 'contained')

  const disableRounded = boolean('disableRounded', false)

  const disableElevation = boolean('disableElevation', false)

  return (
    <StyledCard
      color={color}
      variant={variant}
      disableRounded={disableRounded}
      disableElevation={disableElevation}
    >
      <Content />
    </StyledCard>
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'white',
    to: 'tint2',
    direction: 'bottom'
  }

  const color = object('color', defaultValue)

  const variant = select('variant', variants, 'contained')

  return (
    <StyledCard color={color} variant={variant}>
      <Content />
    </StyledCard>
  )
}

export default metadata
