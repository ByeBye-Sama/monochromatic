import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import { Box } from 'components'

const StyledBox = styled(Box)`
  padding: ${theme.spacing(2)};
  width: calc(100% - ${theme.spacing(4)});
`

interface CardContent extends HTMLAttributes<HTMLDivElement> {
  noPaddingBottom: boolean
  noPaddingTop: boolean
}

const CardContent = (props: CardContent) => <StyledBox {...props} />

CardContent.defaultProps = {
  noPaddingBottom: false,
  noPaddingTop: false
}

export default CardContent
