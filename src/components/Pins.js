import React from 'react'
import {
  Box,
  Flex,
  Heading,
} from '@primer/components'
import PinItem from './PinItem.js'

export default props =>
<Box mt={4}>
  <Heading fontSize={2} fontWeight="normal" color="text">
    Pinned
  </Heading>
  <Flex mx={-2} flexWrap="wrap">
    <PinItem 
      name="sith"
      desc="Jekyll theme inspired by Sith design"
      language="HTML"
      languagecolor="red.5"
      stars="118"
      forks="90"
    />
    <PinItem 
      name="primer/css"
      desc="The CSS design system that powers GitHub"
      language="CSS"
      languagecolor="purple.6"
      stars="8.4k"
      forks="616"
    />
    <PinItem 
      name="50shadesofblk"
      desc="An exploration of black color palettes."
      language="HTML"
      languagecolor="red.5"
      stars="60"
      forks="2"
    />
    <PinItem 
      name="primer/components"
      desc="Primer React Components"
      language="JavaScript"
      languagecolor="yellow.4"
      stars="398"
      forks="25"
    />
    <PinItem 
      name="dotfiles"
      desc="anakin does dotfiles"
      language="Shell"
      languagecolor="green.3"
      stars="5.5k"
      forks="3.1k"
    />
    <PinItem 
      name="podracer"
      desc="blazing fast"
      language="Swift"
      languagecolor="orange.3"
      stars="3.9k"
      forks="124"
    />
    
  </Flex>
</Box>