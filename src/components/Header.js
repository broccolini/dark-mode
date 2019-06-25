import React from 'react'
import { useColorMode } from 'theme-ui'
import {
  Flex,
  Heading,
  Link,
  StyledOcticon,
} from '@primer/components'
import {MarkGithub, LightBulb} from '@githubprimer/octicons-react'
import Button from './Button'

export default props => {
  const [ mode, setMode ] = useColorMode()

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <Flex bg="gray.9" color="white" p={3} alignItems="center" height={'64px'} >
      <StyledOcticon color="white" icon={MarkGithub} size="34" my={-2} mr={3}/>
      <Heading fontSize={2} mr={3} color="gray.4">DEMO</Heading>
      <Flex.Item alignItems="center" width={2/3}>
        <Link px="2" fontSize="1" fontWeight="bold" color="gray.2" href="">Pull Requests</Link>
        <Link px="2" fontSize="1" fontWeight="bold" color="gray.2" href="">Issues</Link>
        <Link px="2" fontSize="1" fontWeight="bold" color="gray.2" href="">Marketplace</Link>
        <Link px="2" fontSize="1" fontWeight="bold" color="gray.2" href="">Explore</Link>
      </Flex.Item>
      <Flex justifyContent="flex-end" width={1/3} my={-1}>
        <Button onClick={toggleMode}>
        <StyledOcticon color="gray.9" icon={LightBulb} size="16" mr={1}/>
          {mode}
        </Button>
      </Flex>
    </Flex>
  )
}
