import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styled from 'styled-components'
import {COMMON, get} from './constants'
import theme from './theme'

const ITEM_CLASS = 'UnderlineNav-item'
const SELECTED_CLASS = 'selected'

function UnderlineNavBase({actions, className, align, children, full, label}) {
  const classes = classnames(className, 'UnderlineNav', align && `UnderlineNav--${align}`, full && 'UnderlineNav--full')
  return (
    <nav className={classes} aria-label={label}>
      <div className="UnderlineNav-body">{children}</div>
      {actions && <div className="UnderlineNav-actions">{actions}</div>}
    </nav>
  )
}

const UnderlineNav = styled(UnderlineNavBase)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${get('colors.border')};
  &.UnderlineNav--right {
    justify-content: flex-end;

    .UnderlineNav-item {
      margin-right: 0;
      margin-left: ${get('space.3')}px;
    }

    .UnderlineNav-actions {
      flex: 1 1 auto;
    }
  }
  &.UnderlineNav--full {
    display: block;
  }

  .UnderlineNav-body {
    display: flex;
    margin-bottom: -1px;
  }

  .UnderlineNav-actions {
    align-self: center;
  }

  ${COMMON};
`

UnderlineNav.Link = styled.a.attrs(props => ({
  activeClassName: typeof props.to === 'string' ? 'selected' : '',
  className: classnames(ITEM_CLASS, props.selected && SELECTED_CLASS, props.className)
}))`
  padding: ${get('space.3')}px ${get('space.2')}px;
  margin-right: ${get('space.3')}px;
  font-size: ${get('fontSizes.1')}px;
  line-height: ${get('lineHeights.default')};
  color: ${get('colors.textSecondary')};
  text-align: center;
  border-bottom: 2px solid transparent;
  text-decoration: none;

  &:hover,
  &:focus {
    color: ${get('colors.text')};
    text-decoration: none;
    border-bottom-color: ${get('colors.gray.3')};
    transition: 0.2s ease;

    .UnderlineNav-octicon {
      color: ${get('colors.gray.5')};
    }
  }

  &.selected {
    font-weight: ${get('fontWeights.bold')};
    color: ${get('colors.text')};
    border-bottom-color: ${get('colors.accent')};

    .UnderlineNav-octicon {
      color: ${get('colors.gray.5')};
    }
  }
`

UnderlineNav.defaultProps = {
  theme
}

UnderlineNav.propTypes = {
  actions: PropTypes.node,
  align: PropTypes.oneOf(['right']),
  children: PropTypes.node,
  full: PropTypes.bool,
  label: PropTypes.string,
  theme: PropTypes.object,
  ...COMMON.propTypes
}

UnderlineNav.Link.defaultProps = {
  theme
}

UnderlineNav.Link.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  selected: PropTypes.bool,
  ...COMMON.propTypes
}

export default UnderlineNav
