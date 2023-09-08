'use client'
import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import { ButtonBaseProps } from '@mui/material'

const linearGradientToRight = `linear-gradient(to right, var(--color-pink), var(--color-blue))`
const linearGradientToTop = `linear-gradient(to top, var(--color-pink), var(--color-blue))`

const borderImage = `
  border-image-slice: 1;
  border-image-source: ${linearGradientToRight};
  `
const commonStyles = `
border-radius: 0;
text-transform: capitalize;
padding: .25rem 1.5rem;
font-size: 1.25rem;
font-weight: bold;
color: var(--color-white);
&:focus {
    scale: .9;
    opacity: .9;
}
&:active{
    scale: .9; 
    opacity: .9;

}
`
//TODO: make the three buttons into one button
//TODO: override ripple to make it unnecessary to disable in the component

export const ButtonGradientOutlined = styled(Button)<ButtonBaseProps>`
  ${commonStyles}
  border: 1px solid;
  ${borderImage}
  background-color: transparent;
  position: relative;

  &:hover {
    border-image-source: ${linearGradientToTop};
  &::after {
    content: '';
    position: absolute;
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    border: 4px solid;
    ${borderImage}
    filter: blur(4px);
    background-color: transparent;
  }

  &:hover::after {
    border-image-source: ${linearGradientToTop};
  }
`

export const ButtonGradientFilled = styled(Button)<ButtonBaseProps>`
  ${commonStyles}
  background-image: ${linearGradientToRight};
  position: relative;

  &:hover {
    background-image: ${linearGradientToTop};
  }

  &::after {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(2px);
    border: 8px solid;
    ${borderImage}
  }

  &:hover::after {
    border-image-source: ${linearGradientToTop};
  }
`

export const ButtonWhite = styled(Button)<ButtonBaseProps>`
  ${commonStyles}
  border: 1px solid var(--color-white);
  background: var(--color-white-semi);
  position: relative;
  &:hover {
    background: var(--color-white);
    color: var(--color-dark);
  }

  &::after {
    content: '';
    position: absolute;
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    border: 4px solid var(--color-white);
    filter: blur(4px);
    background-color: transparent;
  }
`
