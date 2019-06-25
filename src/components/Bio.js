import React from 'react'
import {
  Avatar,
  Box,
  BorderBox,
  Button,
  Flex,
  Heading,
  Text,
  StyledOcticon,
} from '@primer/components'
import {Organization, Location, Link as LinkIcon} from '@githubprimer/octicons-react'
import Link from '../primer/Link'


export default props =>
<Box width={1/4} pr={6}>
  <BorderBox mb={3} borderColor="border">
    <Avatar src="anakin.jpeg" size={'100%'} />
    <Flex px={3} my={1} alignItems="center" >
      <Text fontSize={3} mr={1}>🧘‍♂️</Text> 
      <Text color="text" fontSize={0} lineHeight={1.25}>Clearing my mind</Text>
    </Flex>
  </BorderBox>
  <Heading color="text" fontSize={'26px'} lineHeight={1}>Anakin Skywalker</Heading>
  <Text color="textSecondary" fontSize={3} fontWeight="300">padawan</Text>
  <Button width={'100%'} mt={3}>Follow</Button>
  <Text as="p" color="textSecondary" fontSize={1} fontWeight="normal">
    Jedi knight in training, 1st place winner at @Tatooine-podracing. #usetheforce
  </Text>
  <Box mb={3}>
    <Flex alignItems="center" mb={1}>
      <StyledOcticon color="icon" icon={Organization} size="16" mr={2}/>
      <Text color="textSecondary" fontSize={1} fontWeight="bold">@Jedi</Text>
    </Flex>
    <Flex alignItems="center" mb={1}>
      <StyledOcticon color="icon" icon={Location} size="16" mr={2}/>
      <Text color="textSecondary" fontSize={1}>Coruscant</Text>
    </Flex>
    <Flex alignItems="center">
      <StyledOcticon color="icon" icon={LinkIcon} size="16" mr={2}/>
      <Link href="" fontSize={1}>http://best.jedi.com</Link>
    </Flex>
  </Box>
  <Text fontSize={0} color="textSecondary">Block or report user</Text>
  <BorderBox mt={3} py={3} borderColor="border" borderLeft="0" borderRight="0" borderRadius="0" borderBottom="0">
    <Heading color="text" as="h3" fontSize={2} mb={1}>Organizations</Heading>
    <Link href="https://github.primer"><Avatar mr={1} src="primer-og.png" size={35} /></Link>
    <Link href="https://octodex.github.com"><Avatar src="octobiwan.jpg" size={35} /></Link>
  </BorderBox>
</Box>