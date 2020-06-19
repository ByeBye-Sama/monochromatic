import React from 'react'
import { keys } from 'lodash'
import styled from 'styled-components'
import { select, boolean, object } from '@storybook/addon-knobs'
import {
  Avatar,
  Button,
  CardContent,
  CardHeader,
  IconButton,
  Image,
  Typography,
  CardActions
} from 'components'
import { theme } from 'theme'
import { cloudinaryPath } from 'constants.js'
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
  width: ${theme.spacing(45)};
`

const StyledIconButton = styled(IconButton)`
  margin-right: ${theme.spacing(-1)};
  margin-top: ${theme.spacing(-1)};
`

const src = `${cloudinaryPath}/v1591074685/monochromatic/stories/avatar.jpg`

const variants = ['contained', 'outlined']

const actionsPositions = ['left', 'center', 'right']

interface Content {
  actionsPosition: string
}

const Content = (props: Content) => {
  const { actionsPosition } = props

  return (
    <>
      <CardHeader
        label="Card Title"
        subtitle="This is a Card Subtitle"
        avatar={<Avatar />}
        action={<StyledIconButton icon="more_vert" />}
      />
      <Image src={src} grayscale={0.5} />
      <CardContent>
        <Typography color="shade2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at
          tellus a augue congue gravida vestibulum et risus. Duis euismod felis
          sit amet vehicula posuere. Donec scelerisque pulvinar orci sed mollis.
          Praesent vel lectus sed nulla pellentesque efficitur. Integer gravida,
          risus eget tempus iaculis, elit quam tristique nisi, vel ultricies
          augue est vel tortor. Pellentesque ornare felis sit amet elit pharetra
          dapibus.
        </Typography>
      </CardContent>
      <CardActions position={actionsPosition}>
        <Button variant="text">share</Button>
        <Button
          variant="text"
          color={{ from: 'shade3', to: 'primary', direction: 'left' }}
        >
          learn more
        </Button>
      </CardActions>
    </>
  )
}

export const Normal = () => {
  const color = select('color', keys(theme.palette), 'white')

  const variant = select('variant', variants, 'contained')

  const disableRounded = boolean('disableRounded', false)

  const disableElevation = boolean('disableElevation', false)

  const actionsPosition = select('actionsPosition', actionsPositions, 'left')

  return (
    <StyledCard
      color={color}
      variant={variant}
      disableRounded={disableRounded}
      disableElevation={disableElevation}
    >
      <Content actionsPosition={actionsPosition} />
    </StyledCard>
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'white',
    to: 'tint3',
    direction: 'bottom'
  }

  const color = object('color', defaultValue)

  const variant = select('variant', variants, 'contained')

  const actionsPosition = select('actionsPosition', actionsPositions, 'left')

  return (
    <StyledCard color={color} variant={variant}>
      <Content actionsPosition={actionsPosition} />
    </StyledCard>
  )
}

export default metadata
