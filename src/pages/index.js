import React from 'react'
import {
  Avatar,
  Box,
  Button,
  BaseStyles,
  Flex,
  Heading,
} from '@primer/components'
import Header from '../components/Header.js'
import Overview from '../components/Overview.js'
import Bio from '../components/Bio.js'


export default props => 
  <Box>
    <BaseStyles>
      <Header />
      <Flex maxWidth="1280px" px={3} mt={4} mx={'auto'}>
        <Bio />
        <Overview />
      </Flex>
    </BaseStyles>
  </Box>
