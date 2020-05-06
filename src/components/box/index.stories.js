import React from 'react'
import { keys } from 'lodash'
import styled from 'styled-components'
import { text, select, boolean } from '@storybook/addon-knobs'
import theme from 'theme'
import Box from './index'
import Typography from 'components/typography'

const metadata = {
  title: 'Layout|Box'
}

const StyledBox = styled(Box)`
  min-height: 100px;
  padding: ${theme.spacing(2, 5)};
`

export const Normal = () => {
  const value = text('value', 'Placeholder')

  const display = text('display', 'flex')

  const justifyContent = text('justifyContent', 'center')

  const alignItems = text('alignItems', 'center')

  const background = select('background', keys(theme.palette), 'secondary')

  const rounded = boolean('rounded', false)

  const color = select('color', keys(theme.palette), 'lightgray')

  return (
    <StyledBox
      display={display}
      background={background}
      alignItems={alignItems}
      justifyContent={justifyContent}
      rounded={rounded}
    >
      <Typography variant="h1" color={color}>
        {value}
      </Typography>
    </StyledBox>
  )
}

export default metadata
