import { includes, keys } from 'lodash'
import { theme } from 'theme'

const colorExists = (color, defaultValue) => {
  const colorExistOnTheme = includes(keys(theme.palette), color)

  if (!colorExistOnTheme) {
    return defaultValue
  }

  return color
}

export default colorExists
