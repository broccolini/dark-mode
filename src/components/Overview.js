import React from 'react'
import {
  Box,
  Flex,
  Link,
  StyledOcticon,
  UnderlineNav,
} from '@primer/components'
import {MarkGithub} from '@githubprimer/octicons-react'
import Pins from '../Pins.js'

export default props =>
<Box width={3/4} pl={2}>
  <UnderlineNav>
    <UnderlineNav.Link href="#foo" selected>
      Overview
    </UnderlineNav.Link>
    <UnderlineNav.Link href="#bar">Repositories</UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Projects</UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Stars</UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Followers</UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Following</UnderlineNav.Link>
  </UnderlineNav>
  <Pins />
</Box>