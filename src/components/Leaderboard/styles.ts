'use client'
import styled from '@emotion/styled'
import {
  $lgDesktopBreakpoint,
  $whiteColorSemi,
  $darkColor,
  $whiteColor,
  $blueColor,
  $pinkColor,
} from '../../styles/_variables'

export const Container = styled.div`
  overflow: hidden;
  align-items: center;
  width: 100%;
  max-width: 340px;
  position: relative;
  padding: 1rem;
  box-shadow:
    ${$whiteColor} 0px 0px 10px 2px inset,
    ${$whiteColor} 0px 0px 10px 2px;
  border-radius: 20px;
  inset: -1px;
  background: ${$whiteColorSemi};

  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: 20px;
    padding: 1%.5;
    background: ${$whiteColor};
    -webkit-mask:
      linear-gradient(${$whiteColor} 0 0) content-box,
      linear-gradient(${$whiteColor} 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const Title = styled.h2`
  margin: 0;
  padding: 1rem;
  color: ${$whiteColor};
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
  text-align: center;
`

export const Username = styled.p`
  margin: 0;
  padding: 1rem;
  color: ${$whiteColor};
  font-size: 16px;
  font-weight: 300;
  line-height: normal;
  text-align: center;
`
export const BadgeContainer = styled.p`
  color: ${$whiteColor};
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: normal;
`

export const UserContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${$whiteColor};
  box-shadow: ${$whiteColor} 0px 0px 5px 1px;
`

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TableText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
