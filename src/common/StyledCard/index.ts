'use client'
import styled from '@emotion/styled'
import { $DiagonalGradient, $whiteColor, $blueColor, $pinkColor } from '../../styles/_variables'

export const StyledCard = styled.div`
  position: relative;
  padding: 25px 16px 16px 16px;
  width: 375;
  height: 405px;
  margin: 25px;
  box-shadow: 0 0 10px 2px ${$blueColor};
  border-radius: 20px;
  inset: -1px;

  &::before {
    content: '';
    position: absolute;
    inset: 0px;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, ${$blueColor}, ${$pinkColor});
    -webkit-mask:
      linear-gradient(${$whiteColor} 0 0) content-box,
      linear-gradient(${$whiteColor} 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`
