import { css } from '@emotion/react'
import { $mobileBreakpoint, $tabletBreakpoint, $lgDesktopBreakpoint } from './_variables'

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

export const largeDesktop = (content) => css`
  @media (min-width: ${$lgDesktopBreakpoint}) {
    ${content}
  }
`

export const mobile = (content) => css`
  @media (max-width: ${$mobileBreakpoint}) {
    ${content}
  }
`
