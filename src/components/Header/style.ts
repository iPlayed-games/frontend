'use client'
import styled from '@emotion/styled'
import { Box, Container } from '@mui/material'

const linearGradient = `
165deg, 
var(--color-pink) 0%, 
var(--color-blue) 35%, 
var(--color-dark) 100%
`

export const HeaderComponent = styled.header`
  background: rgb(240, 8, 235);

  background-image: -webkit-gradient(
    linear,
    left,
    right,
    color-stop(0%, var(--color-pink)),
    color-stop(35%, var(--color-blue)),
    color-stop(100%, var(--color-dark))
  );
  background: -moz-linear-gradient(${linearGradient});
  background: -webkit-linear-gradient(${linearGradient});
  background-image: -o-linear-gradient(${linearGradient});
  background-image: -ms-linear-gradient(${linearGradient});

  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#F008EB",endColorstr="#0B1666",GradientType=1);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr='#F008EB', endColorstr='#0B1666')";

  background: linear-gradient(${linearGradient});

  padding: 1rem 0;
`
export const CustomContainer = styled(Container)`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  max-width: var(--breakpoint-large-desktop);
`

export const CustomBox = styled(Box)`
  display: flex;
  gap: 2rem;
`
