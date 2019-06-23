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
  <BorderBox mb={3}>
    <Avatar src="https://avatars.githubusercontent.com/primer" size={'100%'} />
    <Text as="p" color="gray.9" fontSize={0} px={3} my={2}>🐱Everything is purrfect</Text>
  </BorderBox>
  <Heading fontSize={'26px'} lineHeight={1}>Diana Mounter</Heading>
  <Text color="gray.6" fontSize={3} fontWeight="300">broccolini</Text>
  <Text as="p" color="gray.9" fontSize={1} fontWeight="normal">
  Actually more into potatoes 🍟. Design Infrastructure Manager at @github working on @primer design system. Organizes @design-systems-coalition-NYC
  </Text>
</Box>