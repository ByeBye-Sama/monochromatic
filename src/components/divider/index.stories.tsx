import React from 'react'
import { keys } from 'lodash'
import styled from 'styled-components'
import { select, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Typography, Card, Box, CardHeader } from 'components'
import Divider from './index'

const metadata = {
  title: 'Data Display|Divider',
  parameters: {
    backgrounds: [
      { name: 'light', value: '#E0E0E0', default: true },
      { name: 'dark', value: '#333333' }
    ]
  }
}

const StyledCard = styled(Card)`
  min-width: ${theme.spacing(30)};
`

interface ContentProps {
  color?: any
  orientation?: string
}
const Content = (props: ContentProps) => {
  const { orientation, color } = props

  const renderContent = () => {
    return (
      <>
        <CardHeader>
          <Typography variant="h5">Inbox</Typography>
        </CardHeader>
        <Divider color={color} orientation={orientation} />
        <CardHeader>
          <Typography variant="h5">Trash</Typography>
        </CardHeader>
        <Divider color={color} orientation={orientation} />
        <CardHeader>
          <Typography variant="h5">Drafts</Typography>
        </CardHeader>
        <Divider color={color} orientation={orientation} />
        <CardHeader>
          <Typography variant="h5">Spam</Typography>
        </CardHeader>
      </>
    )
  }

  if (orientation === 'vertical') {
    return <Box display="flex">{renderContent()}</Box>
  }

  return renderContent()
}

const orientations = ['horizontal', 'vertical']

export const Normal = () => {
  const color = select('color', keys(theme.palette), 'gray')

  const orientation = select('orientation', orientations, 'horizontal')

  return (
    <StyledCard>
      <Content orientation={orientation} color={color} />
    </StyledCard>
  )
}

export const Gradient = () => {
  const defaultValue = {
    from: 'primary',
    to: 'gray',
    direction: 'right'
  }

  const color = object('color', defaultValue)

  const orientation = select('orientation', orientations, 'contained')

  return (
    <StyledCard>
      <Content orientation={orientation} color={color} />
    </StyledCard>
  )
}

export default metadata
