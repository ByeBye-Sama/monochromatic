import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import { Box } from 'components'

const StyledBox = styled(Box)`
  padding: ${theme.spacing(2)};
  width: calc(100% - ${theme.spacing(4)});
`

interface CardHeader {
  children?: ReactNode
}

const CardHeader = (props: CardHeader) => <StyledBox {...props} />

CardHeader.defaultProps = {
  children: null
}

export default CardHeader
