import React from 'react'
import { ThemeProvider, useThemeUI, ColorMode } from 'theme-ui'
import { ThemeProvider as SCProvider } from 'styled-components'
import theme from './theme'

const ThemeConverter = props => {
  const context = useThemeUI()
  return (
    <SCProvider theme={context.theme}>
      {props.children}
    </SCProvider>
  )
}

export const wrapRootElement = ({ element, props }) =>
  <ThemeProvider theme={theme}>
    <ColorMode />
    <ThemeConverter>
      {element}
    </ThemeConverter>
  </ThemeProvider>
