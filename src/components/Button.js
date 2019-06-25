import styled from 'styled-components'
import {fontSize, width, themeGet as get } from 'styled-system'
import {COMMON} from '../primer/constants'

const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 6px 12px;
  color: ${get('colors.button.fg')};
  background-color: ${get('colors.gray.1')};
  background-image: linear-gradient(-180deg, ${get('colors.button.bg')} 0%, ${get('colors.button.bg2')} 90%);
  font-size: ${get('fontSizes.1')}px;
  font-weight: ${get('fontWeights.bold')};
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-repeat: repeat-x;
  background-position: -1px -1px;
  background-size: 110% 110%;
  border: 1px solid ${get('colors.button.border')};
  border-radius: 0.25em;
  appearance: none;

  &:hover {
    background-color: ${get('colors.button.hoverBg')};
    background-image: linear-gradient(-180deg, ${get('colors.button.hoverBg2')} 0%, ${get('colors.button.hoverBg')} 90%);
    background-position: -0.5em center;
    border-color: ${get('colors.button.borderHover')};
    text-decoration: none;
    background-repeat: repeat-x;
  }

  &:active {
    background-color: ${get('colors.button.activeBg')};
    background-image: none;
    box-shadow: ${get('colors.blackfade15')} 0px 0.15em 0.3em inset;
    border-color: ${get('colors.button.border')}; //convert black to rbg here
  }

  &:selected {
    background-color: ${get('colors.button.activeBg')};
    background-image: none;
    box-shadow: ${get('colors.blackfade15')} 0px 0.15em 0.3em inset;
    border-color: ${get('colors.button.border')};
  }

  &.disabled {
    color: ${get('colors.button.disabledColor')}!important;
    background-color: ${get('colors.gray.1')}!important;
    background-image: none!important;
    border-color: ${get('colors.blackfade20')}!important;
    box-shadow: none!important;
  }

  &:focus {
    outline: none;
    box-shadow: ${get('colors.button.focusShadow')} 0px 0px 0px 0.2em;
  }
  ${fontSize};
  ${COMMON};
  ${width};
`

export default Button
