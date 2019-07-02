import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {get} from './constants'
import Avatar from './Avatar'
import theme from './theme'

const getBackgroundColor = get('colors.white')

const Wrapper = styled('div')`
  display: inline-flex;
  position: relative;
`

const childStyles = props => ({
  display: 'inline-block',
  overflow: 'hidden', // Ensure page layout in Firefox should images fail to load
  lineHeight: `${get('lineHeights.condensedUltra')}`,
  verticalAlign: 'middle',
  borderRadius: '2px',
  position: 'absolute',
  right: '-15%',
  bottom: '-9%',
  boxShadow: '-2px -2px 0 rgba(255,255,255,0.8)',
  backgroundColor: `${getBackgroundColor(props)}`
})

const ChildAvatar = styled(Avatar)(childStyles)
const AvatarPair = ({children, ...rest}) => {
  const avatars = React.Children.map(children, (child, i) => {
    return i === 0 ? React.cloneElement(child, {size: 40}) : <ChildAvatar {...child.props} size={20} />
  })
  return <Wrapper {...rest}>{avatars}</Wrapper>
}

// styled() changes this
AvatarPair.displayName = 'AvatarPair'

AvatarPair.defaultProps = {theme}
AvatarPair.propTypes = {
  children: PropTypes.instanceOf(Avatar),
  ...Avatar.propTypes,
  theme: PropTypes.object
}

export default AvatarPair
