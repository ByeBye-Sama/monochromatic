import React, { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components'
import { theme } from 'theme'
import Box from 'components/box'
import Typography from 'components/typography'

const StyledBox = styled(Box)`
  padding: ${theme.spacing(2)};
  width: calc(100% - ${theme.spacing(4)});
`

const ContentBox = styled(Box)`
  > :not(:last-child) {
    margin-right: ${theme.spacing(2)};
  }
`

interface CardHeader extends HTMLAttributes<HTMLDivElement> {
  action: ReactNode
  avatar: ReactNode
  label: string
  subtitle: string
}

const CardHeader = (props: CardHeader) => {
  const { action, avatar, label, subtitle, children, ...rest } = props

  if (!avatar && !label && !subtitle && !action) {
    return <StyledBox {...props} />
  }

  const renderChildren = () => {
    if (!label && !subtitle) {
      return children
    }

    return (
      <Box display="flex" flexDirection="column">
        {label && (
          <Typography variant="h5" color="primary">
            {label}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" color="shade2">
            {subtitle}
          </Typography>
        )}
        {children}
      </Box>
    )
  }

  const renderContent = () => {
    if (!avatar) {
      return renderChildren()
    }

    return (
      <ContentBox display="flex" alignItems="center">
        {avatar}
        {renderChildren()}
      </ContentBox>
    )
  }

  return (
    <StyledBox display="flex" justifyContent="space-between" {...rest}>
      {renderContent()}
      {action}
    </StyledBox>
  )
}

CardHeader.defaultProps = {
  action: null,
  avatar: null,
  label: null,
  subtitle: null
}

export default CardHeader
