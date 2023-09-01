'use client'
import styled from '@emotion/styled'
import { $whiteColor, $whiteColorSemi } from '../../styles/_variables'

export const LabelContainer = styled.span`
  display: inline-block;
  background-color: ${$whiteColorSemi};
  padding: 0.25rem 1rem;
`

export const Label = styled.p`
  color: ${$whiteColor};
  font-size: 1rem;
  text-transform: uppercase;
  line-height: 1rem;
  font-weight: 700;
  margin: 0;
`
