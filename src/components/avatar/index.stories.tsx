import React from 'react'
import { keys } from 'lodash'
import { text, select, boolean, number } from '@storybook/addon-knobs'
import { theme } from 'theme'
import Avatar from './index'

const metadata = {
  title: 'Data Display|Avatar'
}

export const Normal = () => {
  const color = select('color', keys(theme.palette), 'primary')

  const test =
    'https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg'

  const src = text('src', test)

  const alt = text('alt', 'Avatar')

  const outlined = boolean('outlined', false)

  const height = number('height', 5)

  const width = number('width', 5)

  return (
    <Avatar
      src={src}
      alt={alt}
      color={color}
      width={width}
      height={height}
      outlined={outlined}
    />
  )
}

export default metadata
