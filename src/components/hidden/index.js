import React from 'react'
import styled from 'styled-components'
import { breakpoints } from 'theme'
import { useWindowDimensions } from 'hooks'

const Container = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Hidden = props => {
  const { xs, sm, md, lg, xl, children } = props

  const { width } = useWindowDimensions()

  if (xs && width <= breakpoints.xs) {
    return null
  }

  if (sm && width <= breakpoints.sm) {
    return null
  }

  if (md && width <= breakpoints.md) {
    return null
  }

  if (lg && width <= breakpoints.lg) {
    return null
  }

  if (xl && width <= breakpoints.xl) {
    return null
  }

  return <Container>{children}</Container>
}

export default Hidden
