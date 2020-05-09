import React from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import { Typography, Box } from 'components'
import Hidden from './index'

const metadata = {
  title: 'Layout|Hidden'
}

const StyledBox = styled(Box)`
  padding: ${theme.spacing(2)};
  width: calc(100% - ${theme.spacing(4)});

  > :not(:last-child) {
    margin-right: ${theme.spacing(4)};
  }
`

const MediaBox = props => {
  const { value } = props

  return (
    <Box
      display="flex"
      background="primary"
      alignItems="center"
      justifyContent="center"
      rounded
    >
      <Typography variant="h3" color="lightgray">
        {value}
      </Typography>
    </Box>
  )
}

export const Normal = () => {
  return (
    <>
      <Typography variant="h1" color="primary" align="center">
        Hide on ...
      </Typography>
      <StyledBox
        display="flex"
        background="secondary"
        alignItems="center"
        justifyContent="space-between"
        rounded
      >
        <Hidden xs>
          <MediaBox value="xs" />
        </Hidden>
        <Hidden sm>
          <MediaBox value="sm" />
        </Hidden>
        <Hidden md>
          <MediaBox value="md" />
        </Hidden>
        <Hidden lg>
          <MediaBox value="lg" />
        </Hidden>
        <Hidden xl>
          <MediaBox value="xl" />
        </Hidden>
      </StyledBox>
    </>
  )
}

export default metadata
