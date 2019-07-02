import React from 'react'
import {
  Box,
  BorderBox,
  Flex,
  StyledOcticon,
  Text,
} from '@primer/components'
import {Star, RepoForked, PrimitiveDot, Repo} from '@githubprimer/octicons-react'
import Link from '../primer/Link'


const PinItem = ({
  name,
  desc,
  language,
  languagecolor,
  stars,
  forks
}) => (
  <Box width={1/2} px={2} py={2}>

    <BorderBox p={3} borderColor="border">
      <Flex alignItems="center">
        <StyledOcticon icon={Repo} size="16" color="icon" mr={2} />
        <Link fontWeight="bold" display="block" fontSize={1} lineHeigh={1} href="">{name}</Link>
      </Flex>
      <Text as="p" mt={2} fontSize={0} color="textSecondary">{desc}</Text>
      <Flex flexDirection="row">
        <Flex mr={4} alignItems="center">
          <StyledOcticon icon={PrimitiveDot} size="24" color={languagecolor} mr={1} />
          <Text color="textSecondary" fontSize={0}>{language}</Text>
        </Flex>
        <Flex mr={4} alignItems="center">
          <StyledOcticon icon={Star} size="16" color="textSecondary" mr={1} />
          <Text color="textSecondary" fontSize={0}>{stars}</Text>
        </Flex>
        <Flex mr={4} alignItems="center">
          <StyledOcticon icon={RepoForked} size="16" color="textSecondary" mr={1} />
          <Text color="textSecondary" fontSize={0}>{forks}</Text>
        </Flex>
      </Flex>
    </BorderBox>
    </Box>

)

export default PinItem