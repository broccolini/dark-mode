import React from 'react'
import {
  BorderBox,
  Box,
  CounterLabel,
  Flex,
  Link,
  StyledOcticon,
  UnderlineNav,
} from '@primer/components'
import {MarkGithub} from '@githubprimer/octicons-react'
import Pins from './Pins.js'
import Contributions from './Contributions.js'

export default props =>
<Box width={3/4} pl={2} px={2}>
  <UnderlineNav>
    <UnderlineNav.Link href="#foo" selected>
      Overview
    </UnderlineNav.Link>
    <UnderlineNav.Link href="#bar">Repositories <CounterLabel>74</CounterLabel></UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Projects <CounterLabel>0</CounterLabel></UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Stars <CounterLabel>407</CounterLabel></UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Followers <CounterLabel>1.1k</CounterLabel></UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Following <CounterLabel>114</CounterLabel></UnderlineNav.Link>
  </UnderlineNav>
  <Pins />
  <BorderBox as={Flex} justifyContent="center" p={3} width={10/12}> 
    <Contributions width={'100%'} />
  </BorderBox>
</Box>