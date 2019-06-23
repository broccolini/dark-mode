import React from 'react'
import { useColorMode } from 'theme-ui'
import {
  Avatar,
  Box,
  Button,
  BaseStyles,
  Flex,
} from '@primer/components'
import Header from '../components/Header.js'
import Overview from '../components/Overview.js'
import Bio from '../components/Bio.js'


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
      <BaseStyles>
        <Header />
        <Flex maxWidth="1280px" px={3} mt={6} mx={'auto'}>
          <Bio />
          <Overview />
        </Flex>
      </BaseStyles>
    </Box>
  )
}
