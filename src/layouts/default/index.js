import React from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import { Typography } from 'components'

export const Main = styled.main`
  align-items: center;
  background-color: ${theme.palette.black};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;

  > :not(:last-child) {
    margin-bottom: ${theme.spacing(2)};
  }
`

const DefaultLayout = props => {
  const { children } = props

  return (
    <Main id="main">
      <Typography color="white" variant="h2">
        Boilerplate by KayPacha
      </Typography>
      {children}
    </Main>
  )
}

export default DefaultLayout
