import React from 'react'
import { useColorMode } from 'theme-ui'
import {
  Button,
  Flex,
  Heading,
  Link,
  StyledOcticon,
} from '@primer/components'
import {MarkGithub, LightBulb} from '@githubprimer/octicons-react'

export default props => {
  const [ mode, setMode ] = useColorMode()

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <Flex bg="black" color="white" p={3}>
      <StyledOcticon color="white" icon={MarkGithub} size="28" mr={3}/>
      <Flex.Item alignItems="center" width={2/3}>
        <Link px="2" fontSize="1" fontWeight="bold" color="white" href="">Pull Requests</Link>
        <Link px="2" fontSize="1" fontWeight="bold" color="white" href="">Issues</Link>
        <Link px="2" fontSize="1" fontWeight="bold" color="white" href="">Marketplace</Link>
        <Link px="2" fontSize="1" fontWeight="bold" color="white" href="">Explore</Link>
      </Flex.Item>
      <Flex justifyContent="flex-end" width={1/3}>
        <Button onClick={toggleMode}>
        <StyledOcticon color="gray.9" icon={LightBulb} size="16" mr={1}/>
          {mode}
        </Button>
      </Flex>
    </Flex>
  )
}