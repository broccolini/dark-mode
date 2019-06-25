import React from 'react'
import {
  BorderBox,
  Box,
  CounterLabel,
  Flex,
  Link,
  Text,
} from '@primer/components'
import Pins from './Pins.js'
import Contributions from './Contributions.js'
import UnderlineNav from '../primer/UnderlineNav'
import FilterList from '../primer/FilterList'

export default props =>
<Box width={3/4} pl={2} pl={2}>
  <UnderlineNav>
    <UnderlineNav.Link href="#foo" selected>
      Overview
    </UnderlineNav.Link>
    <UnderlineNav.Link href="#bar">Repositories <CounterLabel>74</CounterLabel></UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Projects <CounterLabel>0</CounterLabel></UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Stars <CounterLabel>406</CounterLabel></UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Followers <CounterLabel>1.1k</CounterLabel></UnderlineNav.Link>
    <UnderlineNav.Link href="#baz">Following <CounterLabel>114</CounterLabel></UnderlineNav.Link>
  </UnderlineNav>
  <Pins />
  <Flex mt={5}>
    <Flex width={1} width={10/12} flexWrap="wrap">
      <Text color="text" fontSize={2}>1,666 contributions in the last year</Text>
      <BorderBox borderColor="border" as={Flex} justifyContent="center" p={3} width={1} > 
        <Contributions width={'100%'} />
      </BorderBox>
    </Flex>
    <Box width={2/12} pl={5}>
      <FilterList>
        <FilterList.Item small py={2} selected href='#foo'>2019</FilterList.Item>
        <FilterList.Item small py={2} href='#bar'>2018</FilterList.Item>
        <FilterList.Item small py={2} href='#baz'>2017</FilterList.Item>
        <FilterList.Item small py={2} href='#baz'>2016</FilterList.Item>
        <FilterList.Item small py={2} href='#baz'>2015</FilterList.Item>
      </FilterList>
    </Box>
  </Flex>
</Box>