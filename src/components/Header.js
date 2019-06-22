import React from 'react'
import {
  Flex,
  Link,
  StyledOcticon,
} from '@primer/components'
import {MarkGithub} from '@githubprimer/octicons-react'

export default props =>

<Flex bg="black" color="white" p={3}>
  <StyledOcticon color="white" icon={MarkGithub} size="28" mr={3}/>
  <Flex.Item alignItems="center">
    <Link px="2" fontSize="1" fontWeight="bold" color="white" href="">Pull Requests</Link>
    <Link px="2" fontSize="1" fontWeight="bold" color="white" href="">Issues</Link>
    <Link px="2" fontSize="1" fontWeight="bold" color="white" href="">Marketplace</Link>
    <Link px="2" fontSize="1" fontWeight="bold" color="white" href="">Explore</Link>
  </Flex.Item>
</Flex>
