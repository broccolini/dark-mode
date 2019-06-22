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

export default props =>
<Box mt={4}>
  <Heading fontSize={2} fontWeight="normal" color="gray.9" mb={2}>
    Pinned
  </Heading>
  <Flex>
    <BorderBox width={1/2} p={3}>
      <Flex alignItems="center">
        <StyledOcticon icon={Repo} size="16" color="gray.6" mr={2} />
        <Link fontWeight="bold" display="block" href="">swiss</Link>
      </Flex>
      <Text as="p" fontSize={0} color="gray.5">Jekyll theme inspired by Swiss design</Text>
      <Flex flexDirection="row">
        <Flex mr={4} alignItems="center">
          <StyledOcticon icon={PrimitiveDot} size="24" color="red.4" mr={1} />
          <Text color="gray.6" fontSize={0}>HTML</Text>
        </Flex>
        <Flex mr={4} alignItems="center">
          <StyledOcticon icon={Star} size="16" color="gray.6" mr={1} />
          <Text color="gray.6" fontSize={0}>118</Text>
        </Flex>
        <Flex mr={4} alignItems="center">
          <StyledOcticon icon={RepoForked} size="16" color="gray.6" mr={1} />
          <Text color="gray.6" fontSize={0}>90</Text>
        </Flex>
      </Flex>
    </BorderBox>
  </Flex>
</Box>