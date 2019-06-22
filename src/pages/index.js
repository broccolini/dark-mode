import React from 'react'
import { useColorMode } from 'theme-ui'

export default props => {
  const [ mode, setMode ] = useColorMode()

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <div>
      <h1>Hello Potato {mode}</h1>
      <button onClick={toggleMode}>
        {mode}
      </button>
    </div>
  )
}
