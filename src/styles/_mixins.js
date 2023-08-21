import { css } from '@emotion/react'
import {
  $lgMobileBreakpoint,
  $tabletBreakpoint,
  $desktopBreakpoint,
  $lgDesktopBreakpoint,
} from './_variables'

export const transition = ($args) => css`
  -webkit-transition: ${$args};
  -moz-transition: ${$args};
  -ms-transition: ${$args};
  -o-transition: ${$args};
  transition: ${$args};
`

export const tablet = (content) => css`
  @media (min-width: ${$tabletBreakpoint}) {
    ${content}
  }
`

export const desktop = (content) => css`
  @media (min-width: ${$desktopBreakpoint}) {
    ${content}
  }
`

export const largeDesktop = (content) => css`
  @media (min-width: ${$lgDesktopBreakpoint}) {
    ${content}
  }
`

export const mobile = (content) => css`
  @media (max-width: ${$lgMobileBreakpoint}) {
    ${content}
  }
`
