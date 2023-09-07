'use client'
import styled from '@emotion/styled'
import { $lgDesktopBreakpoint } from '../../styles/_variables'

export const ScreenWrapper = styled.section`
  display: flex;
  margin: 0;
  width: 100%;
  height: 550px;
`

export const ImageWrapper = styled.div`
  width: 100vw;
  position: fixed;
  z-index: -1;
`

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;

  max-width: ${$lgDesktopBreakpoint};
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 75px;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  line-height: normal;
`

export const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
`
