import React from 'react'
import {
  Box,
  BorderBox,
  Flex,
  Link,
  StyledOcticon,
  Text,
} from '@primer/components'
import {Star, RepoForked, PrimitiveDot, Repo} from '@githubprimer/octicons-react'

const PinItem = ({
  name,
  desc,
  language,
  languagecolor,
  stars,
  forks
}) => (
  <Box width={1/2} px={2} py={2}>

    <BorderBox p={3} borderColor="gray.3">
      <Flex alignItems="center">
        <StyledOcticon icon={Repo} size="16" color="gray.6" mr={2} />
        <Link fontWeight="bold" display="block" fontSize={1} lineHeigh={1} href="">{name}</Link>
      </Flex>
      <Text as="p" mt={2} fontSize={0} color="gray.5">{desc}</Text>
      <Flex flexDirection="row">
        <Flex mr={4} alignItems="center">
          <StyledOcticon icon={PrimitiveDot} size="24" color={languagecolor} mr={1} />
          <Text color="gray.6" fontSize={0}>{language}</Text>
        </Flex>
        <Flex mr={4} alignItems="center">
          <StyledOcticon icon={Star} size="16" color="gray.6" mr={1} />
          <Text color="gray.6" fontSize={0}>{stars}</Text>
        </Flex>
        <Flex mr={4} alignItems="center">
          <StyledOcticon icon={RepoForked} size="16" color="gray.6" mr={1} />
          <Text color="gray.6" fontSize={0}>{forks}</Text>
        </Flex>
      </Flex>
    </BorderBox>
    </Box>

)

export default PinItem