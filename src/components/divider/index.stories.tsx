import React from 'react'
import { keys } from 'lodash'
import styled from 'styled-components'
import { select, object } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Typography, Card, Box } from 'components'
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

const StyledBox = styled(Box)`
  padding: ${theme.spacing(2)};
`

const StyledCard = styled(Card)`
  min-width: ${theme.spacing(30)};
`

interface ContentProps {
  color?: any
  orientation?: string
}
// Change for CardContent or CardHeader elements
const Content = (props: ContentProps) => {
  const { orientation, color } = props

  const renderContent = () => {
    return (
      <>
        <StyledBox>
          <Typography variant="h5">Inbox</Typography>
        </StyledBox>
        <Divider color={color} orientation={orientation} />
        <StyledBox>
          <Typography variant="h5">Trash</Typography>
        </StyledBox>
        <Divider color={color} orientation={orientation} />
        <StyledBox>
          <Typography variant="h5">Drafts</Typography>
        </StyledBox>
        <Divider color={color} orientation={orientation} />
        <StyledBox>
          <Typography variant="h5">Spam</Typography>
        </StyledBox>
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
