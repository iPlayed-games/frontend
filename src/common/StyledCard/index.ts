'use client'
import styled from '@emotion/styled'
import { $borderGradient } from '../../styles/_variables'

export const StyledCard = styled.div`
  position: relative;
  margin: 25px;
  padding: 40px 24px 60px 24px;
  width: 300px;
  height: 150px;
  border: 5px solid;
  ${$borderGradient}

  &::after {
    content: '';
    position: absolute;
    top: -7px;
    left: -7px;
    width: 305px;
    height: 155px;
    border: 4px solid;
    ${$borderGradient}
    filter: blur(4px);
    background-color: transparent;
  }
`
