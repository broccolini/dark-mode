import React from 'react'
import { useColorMode } from 'theme-ui'
import {
  Box,
  Button,
} from '@primer/components'

export default props => {
  const [ mode, setMode ] = useColorMode()

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <Box>
      <h1>Hello Potato {mode}</h1>
      <Button onClick={toggleMode}>
        {mode}
      </Button>
    </Box>
  )
}
