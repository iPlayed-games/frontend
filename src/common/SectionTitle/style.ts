'use client'
import styled from '@emotion/styled'
import { $titleBackgroundGradientColor, $whiteColor } from '../../styles/_variables'

export const TitleBackground = styled.div`
  max-width: 500px;
  background: -moz-linear-gradient(to right, ${$titleBackgroundGradientColor});
  background: -webkit-linear-gradient(to right, ${$titleBackgroundGradientColor});
  background: linear-gradient(to right, ${$titleBackgroundGradientColor});
`

export const Title = styled.h2`
  color: ${$whiteColor};
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 600;
  padding: 0.25rem 1.5rem;
`
