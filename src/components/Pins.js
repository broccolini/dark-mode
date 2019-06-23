import React from 'react'
import {
  Box,
  BorderBox,
  Flex,
  Heading,
  Link,
  StyledOcticon,
  Text,
} from '@primer/components'
import {Star, RepoForked, PrimitiveDot, Repo} from '@githubprimer/octicons-react'
import PinItem from './PinItem.js'

export default props =>
<Box mt={4}>
  <Heading fontSize={2} fontWeight="normal" color="gray.9" mb={2}>
    Pinned
  </Heading>
  <Flex mx={-2}>
    <PinItem 
      name="swiss"
      desc="Jekyll theme inspired by Swiss design"
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
  </Flex>
</Box>