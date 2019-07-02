import React from 'react'
import { useThemeUI } from 'theme-ui'

export default props => {
  const context = useThemeUI()

  const colors = {
    light: [
      '#ebedf0',
      '#c6e48b',
      '#7bc96f',
      '#239a3b',
      '#196127',
    ],
    dark: [
      '#2f363d',
      '#165c26',
      '#17a238',
      '#16db43',
      '#7aff99',
    ]
  }

  // for squares
  // const fill = colors.light
  const fill = colors[context.colorMode] || colors.light

  const text = {
    light: context.theme.colors.gray[6],
    dark: context.theme.colors.gray[3],
  }
  text.fill = text[context.colorMode] || text.light

  return (
    <svg width="722" height="112">
      <g transform="translate(10, 20)" >
        <g transform="translate(0, 0)">
          <rect className="day" width="10" height="10" x="14" y="0" fill={fill[0]} data-count="0" data-date="2018-06-24"></rect>
          <rect className="day" width="10" height="10" x="14" y="13" fill={fill[2]} data-count="9" data-date="2018-06-25"></rect>
          <rect className="day" width="10" height="10" x="14" y="26" fill={fill[0]} data-count="0" data-date="2018-06-26"></rect>
          <rect className="day" width="10" height="10" x="14" y="39" fill={fill[0]} data-count="0" data-date="2018-06-27"></rect>
          <rect className="day" width="10" height="10" x="14" y="52" fill={fill[1]} data-count="2" data-date="2018-06-28"></rect>
          <rect className="day" width="10" height="10" x="14" y="65" fill={fill[2]} data-count="11" data-date="2018-06-29"></rect>
          <rect className="day" width="10" height="10" x="14" y="78" fill={fill[0]} data-count="0" data-date="2018-06-30"></rect>
        </g>
        <g transform="translate(14, 0)">
          <rect className="day" width="10" height="10" x="13" y="0" fill={fill[0]} data-count="0" data-date="2018-07-01"></rect>
          <rect className="day" width="10" height="10" x="13" y="13" fill={fill[0]} data-count="0" data-date="2018-07-02"></rect>
          <rect className="day" width="10" height="10" x="13" y="26" fill={fill[0]} data-count="0" data-date="2018-07-03"></rect>
          <rect className="day" width="10" height="10" x="13" y="39" fill={fill[0]} data-count="0" data-date="2018-07-04"></rect>
          <rect className="day" width="10" height="10" x="13" y="52" fill={fill[0]} data-count="0" data-date="2018-07-05"></rect>
          <rect className="day" width="10" height="10" x="13" y="65" fill={fill[0]} data-count="0" data-date="2018-07-06"></rect>
          <rect className="day" width="10" height="10" x="13" y="78" fill={fill[1]} data-count="2" data-date="2018-07-07"></rect>
        </g>
        <g transform="translate(28, 0)">
          <rect className="day" width="10" height="10" x="12" y="0" fill={fill[0]} data-count="0" data-date="2018-07-08"></rect>
          <rect className="day" width="10" height="10" x="12" y="13" fill={fill[0]} data-count="0" data-date="2018-07-09"></rect>
          <rect className="day" width="10" height="10" x="12" y="26" fill={fill[0]} data-count="0" data-date="2018-07-10"></rect>
          <rect className="day" width="10" height="10" x="12" y="39" fill={fill[0]} data-count="0" data-date="2018-07-11"></rect>
          <rect className="day" width="10" height="10" x="12" y="52" fill={fill[1]} data-count="3" data-date="2018-07-12"></rect>
          <rect className="day" width="10" height="10" x="12" y="65" fill={fill[4]} data-count="24" data-date="2018-07-13"></rect>
          <rect className="day" width="10" height="10" x="12" y="78" fill={fill[1]} data-count="4" data-date="2018-07-14"></rect>
        </g>
        <g transform="translate(42, 0)">
          <rect className="day" width="10" height="10" x="11" y="0" fill={fill[0]} data-count="0" data-date="2018-07-15"></rect>
          <rect className="day" width="10" height="10" x="11" y="13" fill={fill[2]} data-count="13" data-date="2018-07-16"></rect>
          <rect className="day" width="10" height="10" x="11" y="26" fill={fill[2]} data-count="8" data-date="2018-07-17"></rect>
          <rect className="day" width="10" height="10" x="11" y="39" fill={fill[1]} data-count="6" data-date="2018-07-18"></rect>
          <rect className="day" width="10" height="10" x="11" y="52" fill={fill[2]} data-count="8" data-date="2018-07-19"></rect>
          <rect className="day" width="10" height="10" x="11" y="65" fill={fill[3]} data-count="17" data-date="2018-07-20"></rect>
          <rect className="day" width="10" height="10" x="11" y="78" fill={fill[3]} data-count="20" data-date="2018-07-21"></rect>
        </g>
        <g transform="translate(56, 0)">
          <rect className="day" width="10" height="10" x="10" y="0" fill={fill[2]} data-count="11" data-date="2018-07-22"></rect>
          <rect className="day" width="10" height="10" x="10" y="13" fill={fill[0]} data-count="0" data-date="2018-07-23"></rect>
          <rect className="day" width="10" height="10" x="10" y="26" fill={fill[0]} data-count="0" data-date="2018-07-24"></rect>
          <rect className="day" width="10" height="10" x="10" y="39" fill={fill[3]} data-count="15" data-date="2018-07-25"></rect>
          <rect className="day" width="10" height="10" x="10" y="52" fill={fill[1]} data-count="2" data-date="2018-07-26"></rect>
          <rect className="day" width="10" height="10" x="10" y="65" fill={fill[1]} data-count="6" data-date="2018-07-27"></rect>
          <rect className="day" width="10" height="10" x="10" y="78" fill={fill[1]} data-count="2" data-date="2018-07-28"></rect>
        </g>
        <g transform="translate(70, 0)">
          <rect className="day" width="10" height="10" x="9" y="0" fill={fill[1]} data-count="2" data-date="2018-07-29"></rect>
          <rect className="day" width="10" height="10" x="9" y="13" fill={fill[1]} data-count="1" data-date="2018-07-30"></rect>
          <rect className="day" width="10" height="10" x="9" y="26" fill={fill[1]} data-count="5" data-date="2018-07-31"></rect>
          <rect className="day" width="10" height="10" x="9" y="39" fill={fill[2]} data-count="10" data-date="2018-08-01"></rect>
          <rect className="day" width="10" height="10" x="9" y="52" fill={fill[1]} data-count="3" data-date="2018-08-02"></rect>
          <rect className="day" width="10" height="10" x="9" y="65" fill={fill[0]} data-count="0" data-date="2018-08-03"></rect>
          <rect className="day" width="10" height="10" x="9" y="78" fill={fill[1]} data-count="4" data-date="2018-08-04"></rect>
        </g>
        <g transform="translate(84, 0)">
          <rect className="day" width="10" height="10" x="8" y="0" fill={fill[0]} data-count="0" data-date="2018-08-05"></rect>
          <rect className="day" width="10" height="10" x="8" y="13" fill={fill[2]} data-count="14" data-date="2018-08-06"></rect>
          <rect className="day" width="10" height="10" x="8" y="26" fill={fill[1]} data-count="2" data-date="2018-08-07"></rect>
          <rect className="day" width="10" height="10" x="8" y="39" fill={fill[0]} data-count="0" data-date="2018-08-08"></rect>
          <rect className="day" width="10" height="10" x="8" y="52" fill={fill[0]} data-count="0" data-date="2018-08-09"></rect>
          <rect className="day" width="10" height="10" x="8" y="65" fill={fill[1]} data-count="5" data-date="2018-08-10"></rect>
          <rect className="day" width="10" height="10" x="8" y="78" fill={fill[2]} data-count="8" data-date="2018-08-11"></rect>
        </g>
        <g transform="translate(98, 0)">
          <rect className="day" width="10" height="10" x="7" y="0" fill={fill[1]} data-count="4" data-date="2018-08-12"></rect>
          <rect className="day" width="10" height="10" x="7" y="13" fill={fill[1]} data-count="2" data-date="2018-08-13"></rect>
          <rect className="day" width="10" height="10" x="7" y="26" fill={fill[0]} data-count="0" data-date="2018-08-14"></rect>
          <rect className="day" width="10" height="10" x="7" y="39" fill={fill[0]} data-count="0" data-date="2018-08-15"></rect>
          <rect className="day" width="10" height="10" x="7" y="52" fill={fill[1]} data-count="3" data-date="2018-08-16"></rect>
          <rect className="day" width="10" height="10" x="7" y="65" fill={fill[0]} data-count="0" data-date="2018-08-17"></rect>
          <rect className="day" width="10" height="10" x="7" y="78" fill={fill[1]} data-count="5" data-date="2018-08-18"></rect>
        </g>
        <g transform="translate(112, 0)">
          <rect className="day" width="10" height="10" x="6" y="0" fill={fill[1]} data-count="7" data-date="2018-08-19"></rect>
          <rect className="day" width="10" height="10" x="6" y="13" fill={fill[0]} data-count="0" data-date="2018-08-20"></rect>
          <rect className="day" width="10" height="10" x="6" y="26" fill={fill[1]} data-count="4" data-date="2018-08-21"></rect>
          <rect className="day" width="10" height="10" x="6" y="39" fill={fill[4]} data-count="24" data-date="2018-08-22"></rect>
          <rect className="day" width="10" height="10" x="6" y="52" fill={fill[2]} data-count="11" data-date="2018-08-23"></rect>
          <rect className="day" width="10" height="10" x="6" y="65" fill={fill[3]} data-count="20" data-date="2018-08-24"></rect>
          <rect className="day" width="10" height="10" x="6" y="78" fill={fill[0]} data-count="0" data-date="2018-08-25"></rect>
        </g>
        <g transform="translate(126, 0)">
          <rect className="day" width="10" height="10" x="5" y="0" fill={fill[0]} data-count="0" data-date="2018-08-26"></rect>
          <rect className="day" width="10" height="10" x="5" y="13" fill={fill[1]} data-count="3" data-date="2018-08-27"></rect>
          <rect className="day" width="10" height="10" x="5" y="26" fill={fill[1]} data-count="2" data-date="2018-08-28"></rect>
          <rect className="day" width="10" height="10" x="5" y="39" fill={fill[1]} data-count="1" data-date="2018-08-29"></rect>
          <rect className="day" width="10" height="10" x="5" y="52" fill={fill[1]} data-count="5" data-date="2018-08-30"></rect>
          <rect className="day" width="10" height="10" x="5" y="65" fill={fill[1]} data-count="1" data-date="2018-08-31"></rect>
          <rect className="day" width="10" height="10" x="5" y="78" fill={fill[1]} data-count="2" data-date="2018-09-01"></rect>
        </g>
        <g transform="translate(140, 0)">
          <rect className="day" width="10" height="10" x="4" y="0" fill={fill[0]} data-count="0" data-date="2018-09-02"></rect>
          <rect className="day" width="10" height="10" x="4" y="13" fill={fill[0]} data-count="0" data-date="2018-09-03"></rect>
          <rect className="day" width="10" height="10" x="4" y="26" fill={fill[4]} data-count="41" data-date="2018-09-04"></rect>
          <rect className="day" width="10" height="10" x="4" y="39" fill={fill[1]} data-count="7" data-date="2018-09-05"></rect>
          <rect className="day" width="10" height="10" x="4" y="52" fill={fill[2]} data-count="14" data-date="2018-09-06"></rect>
          <rect className="day" width="10" height="10" x="4" y="65" fill={fill[1]} data-count="6" data-date="2018-09-07"></rect>
          <rect className="day" width="10" height="10" x="4" y="78" fill={fill[2]} data-count="9" data-date="2018-09-08"></rect>
        </g>
        <g transform="translate(154, 0)">
          <rect className="day" width="10" height="10" x="3" y="0" fill={fill[0]} data-count="0" data-date="2018-09-09"></rect>
          <rect className="day" width="10" height="10" x="3" y="13" fill={fill[4]} data-count="25" data-date="2018-09-10"></rect>
          <rect className="day" width="10" height="10" x="3" y="26" fill={fill[3]} data-count="17" data-date="2018-09-11"></rect>
          <rect className="day" width="10" height="10" x="3" y="39" fill={fill[1]} data-count="2" data-date="2018-09-12"></rect>
          <rect className="day" width="10" height="10" x="3" y="52" fill={fill[1]} data-count="4" data-date="2018-09-13"></rect>
          <rect className="day" width="10" height="10" x="3" y="65" fill={fill[0]} data-count="0" data-date="2018-09-14"></rect>
          <rect className="day" width="10" height="10" x="3" y="78" fill={fill[0]} data-count="0" data-date="2018-09-15"></rect>
        </g>
        <g transform="translate(168, 0)">
          <rect className="day" width="10" height="10" x="2" y="0" fill={fill[0]} data-count="0" data-date="2018-09-16"></rect>
          <rect className="day" width="10" height="10" x="2" y="13" fill={fill[1]} data-count="1" data-date="2018-09-17"></rect>
          <rect className="day" width="10" height="10" x="2" y="26" fill={fill[1]} data-count="2" data-date="2018-09-18"></rect>
          <rect className="day" width="10" height="10" x="2" y="39" fill={fill[3]} data-count="15" data-date="2018-09-19"></rect>
          <rect className="day" width="10" height="10" x="2" y="52" fill={fill[2]} data-count="10" data-date="2018-09-20"></rect>
          <rect className="day" width="10" height="10" x="2" y="65" fill={fill[4]} data-count="28" data-date="2018-09-21"></rect>
          <rect className="day" width="10" height="10" x="2" y="78" fill={fill[0]} data-count="0" data-date="2018-09-22"></rect>
        </g>
        <g transform="translate(182, 0)">
          <rect className="day" width="10" height="10" x="1" y="0" fill={fill[2]} data-count="13" data-date="2018-09-23"></rect>
          <rect className="day" width="10" height="10" x="1" y="13" fill={fill[1]} data-count="2" data-date="2018-09-24"></rect>
          <rect className="day" width="10" height="10" x="1" y="26" fill={fill[1]} data-count="5" data-date="2018-09-25"></rect>
          <rect className="day" width="10" height="10" x="1" y="39" fill={fill[0]} data-count="0" data-date="2018-09-26"></rect>
          <rect className="day" width="10" height="10" x="1" y="52" fill={fill[0]} data-count="0" data-date="2018-09-27"></rect>
          <rect className="day" width="10" height="10" x="1" y="65" fill={fill[1]} data-count="6" data-date="2018-09-28"></rect>
          <rect className="day" width="10" height="10" x="1" y="78" fill={fill[0]} data-count="0" data-date="2018-09-29"></rect>
        </g>
        <g transform="translate(196, 0)">
          <rect className="day" width="10" height="10" x="0" y="0" fill={fill[1]} data-count="1" data-date="2018-09-30"></rect>
          <rect className="day" width="10" height="10" x="0" y="13" fill={fill[0]} data-count="0" data-date="2018-10-01"></rect>
          <rect className="day" width="10" height="10" x="0" y="26" fill={fill[1]} data-count="1" data-date="2018-10-02"></rect>
          <rect className="day" width="10" height="10" x="0" y="39" fill={fill[1]} data-count="1" data-date="2018-10-03"></rect>
          <rect className="day" width="10" height="10" x="0" y="52" fill={fill[2]} data-count="11" data-date="2018-10-04"></rect>
          <rect className="day" width="10" height="10" x="0" y="65" fill={fill[0]} data-count="0" data-date="2018-10-05"></rect>
          <rect className="day" width="10" height="10" x="0" y="78" fill={fill[0]} data-count="0" data-date="2018-10-06"></rect>
        </g>
        <g transform="translate(210, 0)">
          <rect className="day" width="10" height="10" x="-1" y="0" fill={fill[0]} data-count="0" data-date="2018-10-07"></rect>
          <rect className="day" width="10" height="10" x="-1" y="13" fill={fill[4]} data-count="26" data-date="2018-10-08"></rect>
          <rect className="day" width="10" height="10" x="-1" y="26" fill={fill[3]} data-count="15" data-date="2018-10-09"></rect>
          <rect className="day" width="10" height="10" x="-1" y="39" fill={fill[3]} data-count="19" data-date="2018-10-10"></rect>
          <rect className="day" width="10" height="10" x="-1" y="52" fill={fill[1]} data-count="1" data-date="2018-10-11"></rect>
          <rect className="day" width="10" height="10" x="-1" y="65" fill={fill[0]} data-count="0" data-date="2018-10-12"></rect>
          <rect className="day" width="10" height="10" x="-1" y="78" fill={fill[1]} data-count="4" data-date="2018-10-13"></rect>
        </g>
        <g transform="translate(224, 0)">
          <rect className="day" width="10" height="10" x="-2" y="0" fill={fill[0]} data-count="0" data-date="2018-10-14"></rect>
          <rect className="day" width="10" height="10" x="-2" y="13" fill={fill[1]} data-count="1" data-date="2018-10-15"></rect>
          <rect className="day" width="10" height="10" x="-2" y="26" fill={fill[0]} data-count="0" data-date="2018-10-16"></rect>
          <rect className="day" width="10" height="10" x="-2" y="39" fill={fill[1]} data-count="1" data-date="2018-10-17"></rect>
          <rect className="day" width="10" height="10" x="-2" y="52" fill={fill[0]} data-count="0" data-date="2018-10-18"></rect>
          <rect className="day" width="10" height="10" x="-2" y="65" fill={fill[0]} data-count="0" data-date="2018-10-19"></rect>
          <rect className="day" width="10" height="10" x="-2" y="78" fill={fill[0]} data-count="0" data-date="2018-10-20"></rect>
        </g>
        <g transform="translate(238, 0)">
          <rect className="day" width="10" height="10" x="-3" y="0" fill={fill[1]} data-count="1" data-date="2018-10-21"></rect>
          <rect className="day" width="10" height="10" x="-3" y="13" fill={fill[2]} data-count="13" data-date="2018-10-22"></rect>
          <rect className="day" width="10" height="10" x="-3" y="26" fill={fill[0]} data-count="0" data-date="2018-10-23"></rect>
          <rect className="day" width="10" height="10" x="-3" y="39" fill={fill[1]} data-count="2" data-date="2018-10-24"></rect>
          <rect className="day" width="10" height="10" x="-3" y="52" fill={fill[0]} data-count="0" data-date="2018-10-25"></rect>
          <rect className="day" width="10" height="10" x="-3" y="65" fill={fill[0]} data-count="0" data-date="2018-10-26"></rect>
          <rect className="day" width="10" height="10" x="-3" y="78" fill={fill[0]} data-count="0" data-date="2018-10-27"></rect>
        </g>
        <g transform="translate(252, 0)">
          <rect className="day" width="10" height="10" x="-4" y="0" fill={fill[1]} data-count="6" data-date="2018-10-28"></rect>
          <rect className="day" width="10" height="10" x="-4" y="13" fill={fill[1]} data-count="3" data-date="2018-10-29"></rect>
          <rect className="day" width="10" height="10" x="-4" y="26" fill={fill[0]} data-count="0" data-date="2018-10-30"></rect>
          <rect className="day" width="10" height="10" x="-4" y="39" fill={fill[1]} data-count="1" data-date="2018-10-31"></rect>
          <rect className="day" width="10" height="10" x="-4" y="52" fill={fill[1]} data-count="2" data-date="2018-11-01"></rect>
          <rect className="day" width="10" height="10" x="-4" y="65" fill={fill[0]} data-count="0" data-date="2018-11-02"></rect>
          <rect className="day" width="10" height="10" x="-4" y="78" fill={fill[0]} data-count="0" data-date="2018-11-03"></rect>
        </g>
        <g transform="translate(266, 0)">
          <rect className="day" width="10" height="10" x="-5" y="0" fill={fill[0]} data-count="0" data-date="2018-11-04"></rect>
          <rect className="day" width="10" height="10" x="-5" y="13" fill={fill[1]} data-count="1" data-date="2018-11-05"></rect>
          <rect className="day" width="10" height="10" x="-5" y="26" fill={fill[0]} data-count="0" data-date="2018-11-06"></rect>
          <rect className="day" width="10" height="10" x="-5" y="39" fill={fill[0]} data-count="0" data-date="2018-11-07"></rect>
          <rect className="day" width="10" height="10" x="-5" y="52" fill={fill[0]} data-count="0" data-date="2018-11-08"></rect>
          <rect className="day" width="10" height="10" x="-5" y="65" fill={fill[0]} data-count="0" data-date="2018-11-09"></rect>
          <rect className="day" width="10" height="10" x="-5" y="78" fill={fill[0]} data-count="0" data-date="2018-11-10"></rect>
        </g>
        <g transform="translate(280, 0)">
          <rect className="day" width="10" height="10" x="-6" y="0" fill={fill[0]} data-count="0" data-date="2018-11-11"></rect>
          <rect className="day" width="10" height="10" x="-6" y="13" fill={fill[0]} data-count="0" data-date="2018-11-12"></rect>
          <rect className="day" width="10" height="10" x="-6" y="26" fill={fill[0]} data-count="0" data-date="2018-11-13"></rect>
          <rect className="day" width="10" height="10" x="-6" y="39" fill={fill[0]} data-count="0" data-date="2018-11-14"></rect>
          <rect className="day" width="10" height="10" x="-6" y="52" fill={fill[0]} data-count="0" data-date="2018-11-15"></rect>
          <rect className="day" width="10" height="10" x="-6" y="65" fill={fill[0]} data-count="0" data-date="2018-11-16"></rect>
          <rect className="day" width="10" height="10" x="-6" y="78" fill={fill[0]} data-count="0" data-date="2018-11-17"></rect>
        </g>
        <g transform="translate(294, 0)">
          <rect className="day" width="10" height="10" x="-7" y="0" fill={fill[1]} data-count="1" data-date="2018-11-18"></rect>
          <rect className="day" width="10" height="10" x="-7" y="13" fill={fill[0]} data-count="0" data-date="2018-11-19"></rect>
          <rect className="day" width="10" height="10" x="-7" y="26" fill={fill[1]} data-count="1" data-date="2018-11-20"></rect>
          <rect className="day" width="10" height="10" x="-7" y="39" fill={fill[1]} data-count="3" data-date="2018-11-21"></rect>
          <rect className="day" width="10" height="10" x="-7" y="52" fill={fill[0]} data-count="0" data-date="2018-11-22"></rect>
          <rect className="day" width="10" height="10" x="-7" y="65" fill={fill[0]} data-count="0" data-date="2018-11-23"></rect>
          <rect className="day" width="10" height="10" x="-7" y="78" fill={fill[0]} data-count="0" data-date="2018-11-24"></rect>
        </g>
        <g transform="translate(308, 0)">
          <rect className="day" width="10" height="10" x="-8" y="0" fill={fill[0]} data-count="0" data-date="2018-11-25"></rect>
          <rect className="day" width="10" height="10" x="-8" y="13" fill={fill[1]} data-count="3" data-date="2018-11-26"></rect>
          <rect className="day" width="10" height="10" x="-8" y="26" fill={fill[0]} data-count="0" data-date="2018-11-27"></rect>
          <rect className="day" width="10" height="10" x="-8" y="39" fill={fill[0]} data-count="0" data-date="2018-11-28"></rect>
          <rect className="day" width="10" height="10" x="-8" y="52" fill={fill[1]} data-count="3" data-date="2018-11-29"></rect>
          <rect className="day" width="10" height="10" x="-8" y="65" fill={fill[1]} data-count="2" data-date="2018-11-30"></rect>
          <rect className="day" width="10" height="10" x="-8" y="78" fill={fill[0]} data-count="0" data-date="2018-12-01"></rect>
        </g>
        <g transform="translate(322, 0)">
          <rect className="day" width="10" height="10" x="-9" y="0" fill={fill[0]} data-count="0" data-date="2018-12-02"></rect>
          <rect className="day" width="10" height="10" x="-9" y="13" fill={fill[1]} data-count="1" data-date="2018-12-03"></rect>
          <rect className="day" width="10" height="10" x="-9" y="26" fill={fill[1]} data-count="2" data-date="2018-12-04"></rect>
          <rect className="day" width="10" height="10" x="-9" y="39" fill={fill[0]} data-count="0" data-date="2018-12-05"></rect>
          <rect className="day" width="10" height="10" x="-9" y="52" fill={fill[1]} data-count="2" data-date="2018-12-06"></rect>
          <rect className="day" width="10" height="10" x="-9" y="65" fill={fill[1]} data-count="6" data-date="2018-12-07"></rect>
          <rect className="day" width="10" height="10" x="-9" y="78" fill={fill[0]} data-count="0" data-date="2018-12-08"></rect>
        </g>
        <g transform="translate(336, 0)">
          <rect className="day" width="10" height="10" x="-10" y="0" fill={fill[0]} data-count="0" data-date="2018-12-09"></rect>
          <rect className="day" width="10" height="10" x="-10" y="13" fill={fill[1]} data-count="1" data-date="2018-12-10"></rect>
          <rect className="day" width="10" height="10" x="-10" y="26" fill={fill[0]} data-count="0" data-date="2018-12-11"></rect>
          <rect className="day" width="10" height="10" x="-10" y="39" fill={fill[1]} data-count="2" data-date="2018-12-12"></rect>
          <rect className="day" width="10" height="10" x="-10" y="52" fill={fill[0]} data-count="0" data-date="2018-12-13"></rect>
          <rect className="day" width="10" height="10" x="-10" y="65" fill={fill[0]} data-count="0" data-date="2018-12-14"></rect>
          <rect className="day" width="10" height="10" x="-10" y="78" fill={fill[0]} data-count="0" data-date="2018-12-15"></rect>
        </g>
        <g transform="translate(350, 0)">
          <rect className="day" width="10" height="10" x="-11" y="0" fill={fill[0]} data-count="0" data-date="2018-12-16"></rect>
          <rect className="day" width="10" height="10" x="-11" y="13" fill={fill[0]} data-count="0" data-date="2018-12-17"></rect>
          <rect className="day" width="10" height="10" x="-11" y="26" fill={fill[0]} data-count="0" data-date="2018-12-18"></rect>
          <rect className="day" width="10" height="10" x="-11" y="39" fill={fill[1]} data-count="1" data-date="2018-12-19"></rect>
          <rect className="day" width="10" height="10" x="-11" y="52" fill={fill[1]} data-count="1" data-date="2018-12-20"></rect>
          <rect className="day" width="10" height="10" x="-11" y="65" fill={fill[1]} data-count="1" data-date="2018-12-21"></rect>
          <rect className="day" width="10" height="10" x="-11" y="78" fill={fill[0]} data-count="0" data-date="2018-12-22"></rect>
        </g>
        <g transform="translate(364, 0)">
          <rect className="day" width="10" height="10" x="-12" y="0" fill={fill[0]} data-count="0" data-date="2018-12-23"></rect>
          <rect className="day" width="10" height="10" x="-12" y="13" fill={fill[0]} data-count="0" data-date="2018-12-24"></rect>
          <rect className="day" width="10" height="10" x="-12" y="26" fill={fill[0]} data-count="0" data-date="2018-12-25"></rect>
          <rect className="day" width="10" height="10" x="-12" y="39" fill={fill[0]} data-count="0" data-date="2018-12-26"></rect>
          <rect className="day" width="10" height="10" x="-12" y="52" fill={fill[0]} data-count="0" data-date="2018-12-27"></rect>
          <rect className="day" width="10" height="10" x="-12" y="65" fill={fill[2]} data-count="13" data-date="2018-12-28"></rect>
          <rect className="day" width="10" height="10" x="-12" y="78" fill={fill[0]} data-count="0" data-date="2018-12-29"></rect>
        </g>
        <g transform="translate(378, 0)">
          <rect className="day" width="10" height="10" x="-13" y="0" fill={fill[0]} data-count="0" data-date="2018-12-30"></rect>
          <rect className="day" width="10" height="10" x="-13" y="13" fill={fill[0]} data-count="0" data-date="2018-12-31"></rect>
          <rect className="day" width="10" height="10" x="-13" y="26" fill={fill[1]} data-count="2" data-date="2019-01-01"></rect>
          <rect className="day" width="10" height="10" x="-13" y="39" fill={fill[1]} data-count="7" data-date="2019-01-02"></rect>
          <rect className="day" width="10" height="10" x="-13" y="52" fill={fill[0]} data-count="0" data-date="2019-01-03"></rect>
          <rect className="day" width="10" height="10" x="-13" y="65" fill={fill[0]} data-count="0" data-date="2019-01-04"></rect>
          <rect className="day" width="10" height="10" x="-13" y="78" fill={fill[0]} data-count="0" data-date="2019-01-05"></rect>
        </g>
        <g transform="translate(392, 0)">
          <rect className="day" width="10" height="10" x="-14" y="0" fill={fill[0]} data-count="0" data-date="2019-01-06"></rect>
          <rect className="day" width="10" height="10" x="-14" y="13" fill={fill[1]} data-count="1" data-date="2019-01-07"></rect>
          <rect className="day" width="10" height="10" x="-14" y="26" fill={fill[0]} data-count="0" data-date="2019-01-08"></rect>
          <rect className="day" width="10" height="10" x="-14" y="39" fill={fill[0]} data-count="0" data-date="2019-01-09"></rect>
          <rect className="day" width="10" height="10" x="-14" y="52" fill={fill[0]} data-count="0" data-date="2019-01-10"></rect>
          <rect className="day" width="10" height="10" x="-14" y="65" fill={fill[1]} data-count="3" data-date="2019-01-11"></rect>
          <rect className="day" width="10" height="10" x="-14" y="78" fill={fill[1]} data-count="2" data-date="2019-01-12"></rect>
        </g>
        <g transform="translate(406, 0)">
          <rect className="day" width="10" height="10" x="-15" y="0" fill={fill[0]} data-count="0" data-date="2019-01-13"></rect>
          <rect className="day" width="10" height="10" x="-15" y="13" fill={fill[0]} data-count="0" data-date="2019-01-14"></rect>
          <rect className="day" width="10" height="10" x="-15" y="26" fill={fill[0]} data-count="0" data-date="2019-01-15"></rect>
          <rect className="day" width="10" height="10" x="-15" y="39" fill={fill[0]} data-count="0" data-date="2019-01-16"></rect>
          <rect className="day" width="10" height="10" x="-15" y="52" fill={fill[1]} data-count="3" data-date="2019-01-17"></rect>
          <rect className="day" width="10" height="10" x="-15" y="65" fill={fill[0]} data-count="0" data-date="2019-01-18"></rect>
          <rect className="day" width="10" height="10" x="-15" y="78" fill={fill[0]} data-count="0" data-date="2019-01-19"></rect>
        </g>
        <g transform="translate(420, 0)">
          <rect className="day" width="10" height="10" x="-16" y="0" fill={fill[0]} data-count="0" data-date="2019-01-20"></rect>
          <rect className="day" width="10" height="10" x="-16" y="13" fill={fill[0]} data-count="0" data-date="2019-01-21"></rect>
          <rect className="day" width="10" height="10" x="-16" y="26" fill={fill[1]} data-count="1" data-date="2019-01-22"></rect>
          <rect className="day" width="10" height="10" x="-16" y="39" fill={fill[0]} data-count="0" data-date="2019-01-23"></rect>
          <rect className="day" width="10" height="10" x="-16" y="52" fill={fill[0]} data-count="0" data-date="2019-01-24"></rect>
          <rect className="day" width="10" height="10" x="-16" y="65" fill={fill[1]} data-count="1" data-date="2019-01-25"></rect>
          <rect className="day" width="10" height="10" x="-16" y="78" fill={fill[0]} data-count="0" data-date="2019-01-26"></rect>
        </g>
        <g transform="translate(434, 0)">
          <rect className="day" width="10" height="10" x="-17" y="0" fill={fill[0]} data-count="0" data-date="2019-01-27"></rect>
          <rect className="day" width="10" height="10" x="-17" y="13" fill={fill[0]} data-count="0" data-date="2019-01-28"></rect>
          <rect className="day" width="10" height="10" x="-17" y="26" fill={fill[0]} data-count="0" data-date="2019-01-29"></rect>
          <rect className="day" width="10" height="10" x="-17" y="39" fill={fill[0]} data-count="0" data-date="2019-01-30"></rect>
          <rect className="day" width="10" height="10" x="-17" y="52" fill={fill[0]} data-count="0" data-date="2019-01-31"></rect>
          <rect className="day" width="10" height="10" x="-17" y="65" fill={fill[0]} data-count="0" data-date="2019-02-01"></rect>
          <rect className="day" width="10" height="10" x="-17" y="78" fill={fill[0]} data-count="0" data-date="2019-02-02"></rect>
        </g>
        <g transform="translate(448, 0)">
          <rect className="day" width="10" height="10" x="-18" y="0" fill={fill[0]} data-count="0" data-date="2019-02-03"></rect>
          <rect className="day" width="10" height="10" x="-18" y="13" fill={fill[0]} data-count="0" data-date="2019-02-04"></rect>
          <rect className="day" width="10" height="10" x="-18" y="26" fill={fill[0]} data-count="0" data-date="2019-02-05"></rect>
          <rect className="day" width="10" height="10" x="-18" y="39" fill={fill[0]} data-count="0" data-date="2019-02-06"></rect>
          <rect className="day" width="10" height="10" x="-18" y="52" fill={fill[0]} data-count="0" data-date="2019-02-07"></rect>
          <rect className="day" width="10" height="10" x="-18" y="65" fill={fill[0]} data-count="0" data-date="2019-02-08"></rect>
          <rect className="day" width="10" height="10" x="-18" y="78" fill={fill[0]} data-count="0" data-date="2019-02-09"></rect>
        </g>
        <g transform="translate(462, 0)">
          <rect className="day" width="10" height="10" x="-19" y="0" fill={fill[1]} data-count="3" data-date="2019-02-10"></rect>
          <rect className="day" width="10" height="10" x="-19" y="13" fill={fill[1]} data-count="3" data-date="2019-02-11"></rect>
          <rect className="day" width="10" height="10" x="-19" y="26" fill={fill[0]} data-count="0" data-date="2019-02-12"></rect>
          <rect className="day" width="10" height="10" x="-19" y="39" fill={fill[1]} data-count="1" data-date="2019-02-13"></rect>
          <rect className="day" width="10" height="10" x="-19" y="52" fill={fill[0]} data-count="0" data-date="2019-02-14"></rect>
          <rect className="day" width="10" height="10" x="-19" y="65" fill={fill[1]} data-count="1" data-date="2019-02-15"></rect>
          <rect className="day" width="10" height="10" x="-19" y="78" fill={fill[1]} data-count="6" data-date="2019-02-16"></rect>
        </g>
        <g transform="translate(476, 0)">
          <rect className="day" width="10" height="10" x="-20" y="0" fill={fill[0]} data-count="0" data-date="2019-02-17"></rect>
          <rect className="day" width="10" height="10" x="-20" y="13" fill={fill[0]} data-count="0" data-date="2019-02-18"></rect>
          <rect className="day" width="10" height="10" x="-20" y="26" fill={fill[1]} data-count="2" data-date="2019-02-19"></rect>
          <rect className="day" width="10" height="10" x="-20" y="39" fill={fill[1]} data-count="1" data-date="2019-02-20"></rect>
          <rect className="day" width="10" height="10" x="-20" y="52" fill={fill[1]} data-count="4" data-date="2019-02-21"></rect>
          <rect className="day" width="10" height="10" x="-20" y="65" fill={fill[4]} data-count="22" data-date="2019-02-22"></rect>
          <rect className="day" width="10" height="10" x="-20" y="78" fill={fill[3]} data-count="16" data-date="2019-02-23"></rect>
        </g>
        <g transform="translate(490, 0)">
          <rect className="day" width="10" height="10" x="-21" y="0" fill={fill[0]} data-count="0" data-date="2019-02-24"></rect>
          <rect className="day" width="10" height="10" x="-21" y="13" fill={fill[1]} data-count="4" data-date="2019-02-25"></rect>
          <rect className="day" width="10" height="10" x="-21" y="26" fill={fill[0]} data-count="0" data-date="2019-02-26"></rect>
          <rect className="day" width="10" height="10" x="-21" y="39" fill={fill[1]} data-count="2" data-date="2019-02-27"></rect>
          <rect className="day" width="10" height="10" x="-21" y="52" fill={fill[1]} data-count="1" data-date="2019-02-28"></rect>
          <rect className="day" width="10" height="10" x="-21" y="65" fill={fill[1]} data-count="2" data-date="2019-03-01"></rect>
          <rect className="day" width="10" height="10" x="-21" y="78" fill={fill[1]} data-count="2" data-date="2019-03-02"></rect>
        </g>
        <g transform="translate(504, 0)">
          <rect className="day" width="10" height="10" x="-22" y="0" fill={fill[1]} data-count="1" data-date="2019-03-03"></rect>
          <rect className="day" width="10" height="10" x="-22" y="13" fill={fill[1]} data-count="2" data-date="2019-03-04"></rect>
          <rect className="day" width="10" height="10" x="-22" y="26" fill={fill[2]} data-count="11" data-date="2019-03-05"></rect>
          <rect className="day" width="10" height="10" x="-22" y="39" fill={fill[1]} data-count="6" data-date="2019-03-06"></rect>
          <rect className="day" width="10" height="10" x="-22" y="52" fill={fill[1]} data-count="4" data-date="2019-03-07"></rect>
          <rect className="day" width="10" height="10" x="-22" y="65" fill={fill[2]} data-count="8" data-date="2019-03-08"></rect>
          <rect className="day" width="10" height="10" x="-22" y="78" fill={fill[2]} data-count="9" data-date="2019-03-09"></rect>
        </g>
        <g transform="translate(518, 0)">
          <rect className="day" width="10" height="10" x="-23" y="0" fill={fill[0]} data-count="0" data-date="2019-03-10"></rect>
          <rect className="day" width="10" height="10" x="-23" y="13" fill={fill[1]} data-count="1" data-date="2019-03-11"></rect>
          <rect className="day" width="10" height="10" x="-23" y="26" fill={fill[4]} data-count="24" data-date="2019-03-12"></rect>
          <rect className="day" width="10" height="10" x="-23" y="39" fill={fill[2]} data-count="10" data-date="2019-03-13"></rect>
          <rect className="day" width="10" height="10" x="-23" y="52" fill={fill[2]} data-count="8" data-date="2019-03-14"></rect>
          <rect className="day" width="10" height="10" x="-23" y="65" fill={fill[1]} data-count="6" data-date="2019-03-15"></rect>
          <rect className="day" width="10" height="10" x="-23" y="78" fill={fill[1]} data-count="3" data-date="2019-03-16"></rect>
        </g>
        <g transform="translate(532, 0)">
          <rect className="day" width="10" height="10" x="-24" y="0" fill={fill[0]} data-count="0" data-date="2019-03-17"></rect>
          <rect className="day" width="10" height="10" x="-24" y="13" fill={fill[1]} data-count="1" data-date="2019-03-18"></rect>
          <rect className="day" width="10" height="10" x="-24" y="26" fill={fill[1]} data-count="4" data-date="2019-03-19"></rect>
          <rect className="day" width="10" height="10" x="-24" y="39" fill={fill[0]} data-count="0" data-date="2019-03-20"></rect>
          <rect className="day" width="10" height="10" x="-24" y="52" fill={fill[0]} data-count="0" data-date="2019-03-21"></rect>
          <rect className="day" width="10" height="10" x="-24" y="65" fill={fill[1]} data-count="7" data-date="2019-03-22"></rect>
          <rect className="day" width="10" height="10" x="-24" y="78" fill={fill[0]} data-count="0" data-date="2019-03-23"></rect>
        </g>
        <g transform="translate(546, 0)">
          <rect className="day" width="10" height="10" x="-25" y="0" fill={fill[1]} data-count="2" data-date="2019-03-24"></rect>
          <rect className="day" width="10" height="10" x="-25" y="13" fill={fill[1]} data-count="1" data-date="2019-03-25"></rect>
          <rect className="day" width="10" height="10" x="-25" y="26" fill={fill[0]} data-count="0" data-date="2019-03-26"></rect>
          <rect className="day" width="10" height="10" x="-25" y="39" fill={fill[1]} data-count="3" data-date="2019-03-27"></rect>
          <rect className="day" width="10" height="10" x="-25" y="52" fill={fill[1]} data-count="1" data-date="2019-03-28"></rect>
          <rect className="day" width="10" height="10" x="-25" y="65" fill={fill[1]} data-count="6" data-date="2019-03-29"></rect>
          <rect className="day" width="10" height="10" x="-25" y="78" fill={fill[0]} data-count="0" data-date="2019-03-30"></rect>
        </g>
        <g transform="translate(560, 0)">
          <rect className="day" width="10" height="10" x="-26" y="0" fill={fill[0]} data-count="0" data-date="2019-03-31"></rect>
          <rect className="day" width="10" height="10" x="-26" y="13" fill={fill[0]} data-count="0" data-date="2019-04-01"></rect>
          <rect className="day" width="10" height="10" x="-26" y="26" fill={fill[1]} data-count="1" data-date="2019-04-02"></rect>
          <rect className="day" width="10" height="10" x="-26" y="39" fill={fill[1]} data-count="7" data-date="2019-04-03"></rect>
          <rect className="day" width="10" height="10" x="-26" y="52" fill={fill[1]} data-count="2" data-date="2019-04-04"></rect>
          <rect className="day" width="10" height="10" x="-26" y="65" fill={fill[1]} data-count="2" data-date="2019-04-05"></rect>
          <rect className="day" width="10" height="10" x="-26" y="78" fill={fill[0]} data-count="0" data-date="2019-04-06"></rect>
        </g>
        <g transform="translate(574, 0)">
          <rect className="day" width="10" height="10" x="-27" y="0" fill={fill[1]} data-count="1" data-date="2019-04-07"></rect>
          <rect className="day" width="10" height="10" x="-27" y="13" fill={fill[1]} data-count="4" data-date="2019-04-08"></rect>
          <rect className="day" width="10" height="10" x="-27" y="26" fill={fill[1]} data-count="3" data-date="2019-04-09"></rect>
          <rect className="day" width="10" height="10" x="-27" y="39" fill={fill[0]} data-count="0" data-date="2019-04-10"></rect>
          <rect className="day" width="10" height="10" x="-27" y="52" fill={fill[1]} data-count="1" data-date="2019-04-11"></rect>
          <rect className="day" width="10" height="10" x="-27" y="65" fill={fill[1]} data-count="2" data-date="2019-04-12"></rect>
          <rect className="day" width="10" height="10" x="-27" y="78" fill={fill[1]} data-count="3" data-date="2019-04-13"></rect>
        </g>
        <g transform="translate(588, 0)">
          <rect className="day" width="10" height="10" x="-28" y="0" fill={fill[0]} data-count="0" data-date="2019-04-14"></rect>
          <rect className="day" width="10" height="10" x="-28" y="13" fill={fill[1]} data-count="2" data-date="2019-04-15"></rect>
          <rect className="day" width="10" height="10" x="-28" y="26" fill={fill[1]} data-count="1" data-date="2019-04-16"></rect>
          <rect className="day" width="10" height="10" x="-28" y="39" fill={fill[1]} data-count="1" data-date="2019-04-17"></rect>
          <rect className="day" width="10" height="10" x="-28" y="52" fill={fill[1]} data-count="5" data-date="2019-04-18"></rect>
          <rect className="day" width="10" height="10" x="-28" y="65" fill={fill[2]} data-count="14" data-date="2019-04-19"></rect>
          <rect className="day" width="10" height="10" x="-28" y="78" fill={fill[0]} data-count="0" data-date="2019-04-20"></rect>
        </g>
        <g transform="translate(602, 0)">
          <rect className="day" width="10" height="10" x="-29" y="0" fill={fill[0]} data-count="0" data-date="2019-04-21"></rect>
          <rect className="day" width="10" height="10" x="-29" y="13" fill={fill[1]} data-count="5" data-date="2019-04-22"></rect>
          <rect className="day" width="10" height="10" x="-29" y="26" fill={fill[0]} data-count="0" data-date="2019-04-23"></rect>
          <rect className="day" width="10" height="10" x="-29" y="39" fill={fill[1]} data-count="1" data-date="2019-04-24"></rect>
          <rect className="day" width="10" height="10" x="-29" y="52" fill={fill[1]} data-count="3" data-date="2019-04-25"></rect>
          <rect className="day" width="10" height="10" x="-29" y="65" fill={fill[0]} data-count="0" data-date="2019-04-26"></rect>
          <rect className="day" width="10" height="10" x="-29" y="78" fill={fill[0]} data-count="0" data-date="2019-04-27"></rect>
        </g>
        <g transform="translate(616, 0)">
          <rect className="day" width="10" height="10" x="-30" y="0" fill={fill[0]} data-count="0" data-date="2019-04-28"></rect>
          <rect className="day" width="10" height="10" x="-30" y="13" fill={fill[0]} data-count="0" data-date="2019-04-29"></rect>
          <rect className="day" width="10" height="10" x="-30" y="26" fill={fill[1]} data-count="1" data-date="2019-04-30"></rect>
          <rect className="day" width="10" height="10" x="-30" y="39" fill={fill[0]} data-count="0" data-date="2019-05-01"></rect>
          <rect className="day" width="10" height="10" x="-30" y="52" fill={fill[0]} data-count="0" data-date="2019-05-02"></rect>
          <rect className="day" width="10" height="10" x="-30" y="65" fill={fill[2]} data-count="8" data-date="2019-05-03"></rect>
          <rect className="day" width="10" height="10" x="-30" y="78" fill={fill[0]} data-count="0" data-date="2019-05-04"></rect>
        </g>
        <g transform="translate(630, 0)">
          <rect className="day" width="10" height="10" x="-31" y="0" fill={fill[0]} data-count="0" data-date="2019-05-05"></rect>
          <rect className="day" width="10" height="10" x="-31" y="13" fill={fill[2]} data-count="9" data-date="2019-05-06"></rect>
          <rect className="day" width="10" height="10" x="-31" y="26" fill={fill[1]} data-count="3" data-date="2019-05-07"></rect>
          <rect className="day" width="10" height="10" x="-31" y="39" fill={fill[2]} data-count="10" data-date="2019-05-08"></rect>
          <rect className="day" width="10" height="10" x="-31" y="52" fill={fill[1]} data-count="2" data-date="2019-05-09"></rect>
          <rect className="day" width="10" height="10" x="-31" y="65" fill={fill[0]} data-count="0" data-date="2019-05-10"></rect>
          <rect className="day" width="10" height="10" x="-31" y="78" fill={fill[0]} data-count="0" data-date="2019-05-11"></rect>
        </g>
        <g transform="translate(644, 0)">
          <rect className="day" width="10" height="10" x="-32" y="0" fill={fill[1]} data-count="3" data-date="2019-05-12"></rect>
          <rect className="day" width="10" height="10" x="-32" y="13" fill={fill[0]} data-count="0" data-date="2019-05-13"></rect>
          <rect className="day" width="10" height="10" x="-32" y="26" fill={fill[1]} data-count="3" data-date="2019-05-14"></rect>
          <rect className="day" width="10" height="10" x="-32" y="39" fill={fill[0]} data-count="0" data-date="2019-05-15"></rect>
          <rect className="day" width="10" height="10" x="-32" y="52" fill={fill[1]} data-count="2" data-date="2019-05-16"></rect>
          <rect className="day" width="10" height="10" x="-32" y="65" fill={fill[1]} data-count="2" data-date="2019-05-17"></rect>
          <rect className="day" width="10" height="10" x="-32" y="78" fill={fill[0]} data-count="0" data-date="2019-05-18"></rect>
        </g>
        <g transform="translate(658, 0)">
          <rect className="day" width="10" height="10" x="-33" y="0" fill={fill[1]} data-count="4" data-date="2019-05-19"></rect>
          <rect className="day" width="10" height="10" x="-33" y="13" fill={fill[1]} data-count="2" data-date="2019-05-20"></rect>
          <rect className="day" width="10" height="10" x="-33" y="26" fill={fill[1]} data-count="4" data-date="2019-05-21"></rect>
          <rect className="day" width="10" height="10" x="-33" y="39" fill={fill[1]} data-count="3" data-date="2019-05-22"></rect>
          <rect className="day" width="10" height="10" x="-33" y="52" fill={fill[1]} data-count="4" data-date="2019-05-23"></rect>
          <rect className="day" width="10" height="10" x="-33" y="65" fill={fill[1]} data-count="1" data-date="2019-05-24"></rect>
          <rect className="day" width="10" height="10" x="-33" y="78" fill={fill[0]} data-count="0" data-date="2019-05-25"></rect>
        </g>
        <g transform="translate(672, 0)">
          <rect className="day" width="10" height="10" x="-34" y="0" fill={fill[0]} data-count="0" data-date="2019-05-26"></rect>
          <rect className="day" width="10" height="10" x="-34" y="13" fill={fill[0]} data-count="0" data-date="2019-05-27"></rect>
          <rect className="day" width="10" height="10" x="-34" y="26" fill={fill[1]} data-count="2" data-date="2019-05-28"></rect>
          <rect className="day" width="10" height="10" x="-34" y="39" fill={fill[0]} data-count="0" data-date="2019-05-29"></rect>
          <rect className="day" width="10" height="10" x="-34" y="52" fill={fill[0]} data-count="0" data-date="2019-05-30"></rect>
          <rect className="day" width="10" height="10" x="-34" y="65" fill={fill[0]} data-count="0" data-date="2019-05-31"></rect>
          <rect className="day" width="10" height="10" x="-34" y="78" fill={fill[0]} data-count="0" data-date="2019-06-01"></rect>
        </g>
        <g transform="translate(686, 0)">
          <rect className="day" width="10" height="10" x="-35" y="0" fill={fill[1]} data-count="3" data-date="2019-06-02"></rect>
          <rect className="day" width="10" height="10" x="-35" y="13" fill={fill[1]} data-count="3" data-date="2019-06-03"></rect>
          <rect className="day" width="10" height="10" x="-35" y="26" fill={fill[2]} data-count="12" data-date="2019-06-04"></rect>
          <rect className="day" width="10" height="10" x="-35" y="39" fill={fill[1]} data-count="1" data-date="2019-06-05"></rect>
          <rect className="day" width="10" height="10" x="-35" y="52" fill={fill[0]} data-count="0" data-date="2019-06-06"></rect>
          <rect className="day" width="10" height="10" x="-35" y="65" fill={fill[0]} data-count="0" data-date="2019-06-07"></rect>
          <rect className="day" width="10" height="10" x="-35" y="78" fill={fill[0]} data-count="0" data-date="2019-06-08"></rect>
        </g>
        <g transform="translate(700, 0)">
          <rect className="day" width="10" height="10" x="-36" y="0" fill={fill[0]} data-count="0" data-date="2019-06-09"></rect>
          <rect className="day" width="10" height="10" x="-36" y="13" fill={fill[1]} data-count="1" data-date="2019-06-10"></rect>
          <rect className="day" width="10" height="10" x="-36" y="26" fill={fill[0]} data-count="0" data-date="2019-06-11"></rect>
          <rect className="day" width="10" height="10" x="-36" y="39" fill={fill[0]} data-count="0" data-date="2019-06-12"></rect>
          <rect className="day" width="10" height="10" x="-36" y="52" fill={fill[0]} data-count="0" data-date="2019-06-13"></rect>
          <rect className="day" width="10" height="10" x="-36" y="65" fill={fill[1]} data-count="1" data-date="2019-06-14"></rect>
          <rect className="day" width="10" height="10" x="-36" y="78" fill={fill[0]} data-count="0" data-date="2019-06-15"></rect>
        </g>
        <g transform="translate(714, 0)">
          <rect className="day" width="10" height="10" x="-37" y="0" fill={fill[1]} data-count="1" data-date="2019-06-16"></rect>
          <rect className="day" width="10" height="10" x="-37" y="13" fill={fill[0]} data-count="0" data-date="2019-06-17"></rect>
          <rect className="day" width="10" height="10" x="-37" y="26" fill={fill[1]} data-count="1" data-date="2019-06-18"></rect>
          <rect className="day" width="10" height="10" x="-37" y="39" fill={fill[0]} data-count="0" data-date="2019-06-19"></rect>
          <rect className="day" width="10" height="10" x="-37" y="52" fill={fill[0]} data-count="0" data-date="2019-06-20"></rect>
          <rect className="day" width="10" height="10" x="-37" y="65" fill={fill[1]} data-count="2" data-date="2019-06-21"></rect>
          <rect className="day" width="10" height="10" x="-37" y="78" fill={fill[1]} data-count="4" data-date="2019-06-22"></rect>
        </g>
        <g transform="translate(728, 0)">
          <rect className="day" width="10" height="10" x="-38" y="0" fill={fill[0]} data-count="0" data-date="2019-06-23"></rect>
        </g>
        <text style={{ fontSize:"10px", fill: text.fill }} x="27" y="-7" >Jul</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="92" y="-7" >Aug</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="144" y="-7" >Sep</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="209" y="-7" >Oct</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="261" y="-7" >Nov</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="313" y="-7" >Dec</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="378" y="-7" >Jan</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="430" y="-7" >Feb</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="482" y="-7" >Mar</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="547" y="-7" >Apr</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="599" y="-7" >May</text>
        <text style={{ fontSize:"10px", fill: text.fill }} x="651" y="-7" >Jun</text>
        <text style={{ fontSize:"10px", display:"none" }} textAnchor="start" dx="-10" dy="8">Sun</text>
        <text style={{ fontSize:"10px", fill: text.fill }}
          textAnchor="start" dx="-10" dy="22">Mon</text>
        <text style={{ fontSize:"10px", display:"none" }} textAnchor="start" dx="-10" dy="32">Tue</text>
        <text style={{ fontSize:"10px", fill: text.fill }} textAnchor="start" dx="-10" dy="48">Wed</text>
        <text style={{ fontSize:"10px", display:"none" }} textAnchor="start" dx="-10" dy="57">Thu</text>
        <text style={{ fontSize:"10px", fill: text.fill }} textAnchor="start" dx="-10" dy="73">Fri</text>
        <text style={{ fontSize:"10px", display:"none" }} textAnchor="start" dx="-10" dy="81">Sat</text>
      </g>
    </svg>
  )
}
