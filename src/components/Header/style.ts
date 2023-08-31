'use client'
import styled from '@emotion/styled'
import { Box, Container } from '@mui/material'

export const HeaderComponent = styled.header`
  background: rgb(240, 8, 235);
  background: -moz-linear-gradient(
    163deg,
    rgba(240, 8, 235, 1) 8%,
    rgba(192, 26, 242, 1) 20%,
    rgba(29, 83, 253, 1) 55%,
    rgba(11, 22, 102, 1) 79%
  );
  background: -webkit-linear-gradient(
    163deg,
    rgba(240, 8, 235, 1) 8%,
    rgba(192, 26, 242, 1) 20%,
    rgba(29, 83, 253, 1) 55%,
    rgba(11, 22, 102, 1) 79%
  );
  background: linear-gradient(163deg, rgba(240, 8, 235, 1) 0%, rgba(29, 83, 253, 1) 35%, rgba(11, 22, 102, 1) 79%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f008eb",endColorstr="#0b1666",GradientType=1);
  padding: 1rem 0;
`
export const CustomContainer = styled(Container)`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`

export const CustomBox = styled(Box)`
  display: flex;
  gap: 2rem;
`
