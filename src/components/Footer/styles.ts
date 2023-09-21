'use client'

import styled from '@emotion/styled'

const linearGradient = `
165deg, 
var(--color-pink) 0%, 
var(--color-blue) 35%, 
var(--color-dark) 100%
`

export const FooterContainer = styled.footer`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
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
  padding: 1rem;
`

export const ScreenContainer = styled.div`
  flex-grow: 1;
  max-width: var(--breakpoint-large-desktop);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const Copyright = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
`
