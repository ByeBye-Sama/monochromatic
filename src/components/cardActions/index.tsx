import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import { Box } from 'components'

interface CardActions extends HTMLAttributes<HTMLDivElement> {
  position: string
}

const resolvePosition = (props: CardActions) => {
  const { position } = props

  if (!position) {
    return ''
  }

  if (position === 'right') {
    return `
      justify-content: flex-end;

      > :not(:last-child) {
        margin-left: ${theme.spacing(1)};
      }
    `
  }

  if (position === 'center') {
    return `
      justify-content: center;
    `
  }

  return ''
}

const StyledBox = styled(Box)`
  display: flex;
  padding: ${theme.spacing(1)};
  width: calc(100% - ${theme.spacing(2)});

  > :not(:last-child) {
    margin-right: ${theme.spacing(1)};
  }

  ${resolvePosition}
`

const CardActions = (props: CardActions) => <StyledBox {...props} />

CardActions.defaultProps = {
  position: 'left'
}

export default CardActions
