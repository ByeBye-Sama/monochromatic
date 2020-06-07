import React from 'react'
import { keys } from 'lodash'
import styled from 'styled-components'
import { select, number } from '@storybook/addon-knobs'
import { theme } from 'theme'
import { Box } from 'components'
import Loading from './index'

const metadata = {
  title: 'Feedback|Loading'
}

const variants = [
  'circular',
  'circular2',
  'linear',
  'linear2',
  'diamond',
  'solar'
]

const sizes = ['small', 'medium', 'large']

const StyledBox = styled(Box)`
  height: calc(100vh - ${theme.spacing(2)});
  width: 100%;
`

export const Normal = () => {
  const color = select('color', keys(theme.palette), 'primary')

  const variant = select('variant', variants, 'circular')

  const height = number('height', 5)

  const width = number('width', 5)

  const speed = number('speed', 1)

  const elementSize = select('size', sizes, 'medium')

  return (
    <StyledBox center>
      <Loading
        color={color}
        speed={speed}
        width={width}
        height={height}
        variant={variant}
        elementSize={elementSize}
      />
    </StyledBox>
  )
}

export default metadata
