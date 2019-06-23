import React from 'react'
import {
  Avatar,
  Box,
  BorderBox,
  Button,
  Flex,
  Heading,
  Link,
  Text,
} from '@primer/components'

export default props =>
<Box width={1/4} pr={6}>
  <BorderBox borderColor="border" mb={3}>
    <Avatar src="https://avatars.githubusercontent.com/primer" size={'100%'} />
    <Text as="p" color="text" fontSize={0} px={3} my={2}>🐱Everything is purrfect</Text>
  </BorderBox>
  <Heading color="text" fontSize={'26px'} lineHeight={1}>Diana Mounter</Heading>
  <Text color="textMid" fontSize={3} fontWeight="300">broccolini</Text>
  <Button width={'100%'} mt={3}>Follow</Button>
  <Text as="p" color="text" fontSize={1} fontWeight="normal">
  Actually more into potatoes 🍟. Design Infrastructure Manager at @github working on @primer design system. Organizes @design-systems-coalition-NYC
  </Text>
</Box>