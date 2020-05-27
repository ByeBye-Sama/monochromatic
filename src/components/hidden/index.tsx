import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { breakpoints } from 'theme'
import { useWindowDimensions } from 'hooks'

interface HiddenProps {
  children?: ReactNode
  lg?: boolean
  md?: boolean
  sm?: boolean
  xl?: boolean
  xs?: boolean
}

const Container = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Hidden = (props: HiddenProps) => {
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

Hidden.defaultProps = {
  children: null,
  lg: false,
  md: false,
  sm: false,
  xl: false,
  xs: false
}

export default Hidden
