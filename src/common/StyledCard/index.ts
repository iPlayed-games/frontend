'use client'
import styled from '@emotion/styled'
import { $whiteColor, $blueColor, $pinkColor } from '../../styles/_variables'

export const StyledCard = styled.div`
  position: relative;
  padding: 1rem;
  box-shadow:
    ${$pinkColor} 0px 0px 10px 2px inset,
    ${$blueColor} 0px 0px 10px 2px;
  border-radius: 20px;
  inset: -1px;

  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(135deg, ${$blueColor}, ${$pinkColor});
    -webkit-mask:
      linear-gradient(${$whiteColor} 0 0) content-box,
      linear-gradient(${$whiteColor} 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`
