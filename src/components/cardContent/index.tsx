import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import { Box } from 'components'

const StyledBox = styled(Box)`
  padding: ${theme.spacing(2)};
  width: calc(100% - ${theme.spacing(4)});
`

const CardContent = (props: HTMLAttributes<HTMLDivElement>) => (
  <StyledBox {...props} />
)

export default CardContent
