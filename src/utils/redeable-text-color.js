import { isPlainObject } from 'lodash'
import { readableColor, mix } from 'polished'
import { theme } from 'theme'
import colorExists from './color-exists'

const readableTextColor = color => {
  if (isPlainObject(color)) {
    const colorFrom = theme.palette[colorExists(color.from, 'primary')]

    const colorTo = theme.palette[colorExists(color.to, 'primary00')]

    const mixColor = mix(0.5, colorFrom, colorTo)

    const textColor = readableColor(mixColor)

    return textColor === '#fff' ? 'white' : 'black'
  }

  const textColor = readableColor(theme.palette[color])

  return textColor === '#fff' ? 'white' : 'black'
}

export default readableTextColor
