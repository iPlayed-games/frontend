'use client'
import styled from '@emotion/styled'

export const TitleBackground = styled.div`
  max-width: 30rem;
  background-color: var(--color-pink);

  background-image: -webkit-gradient(
    linear,
    left,
    right,
    color-stop(0%, var(--color-blue)),
    color-stop(50%, var(--color-pink)),
    color-stop(100%, var(--color-dark))
  );
  background-image: -webkit-linear-gradient(90deg, var(--color-blue) 0%, var(--color-pink) 50%, var(--color-dark) 100%);
  background-image: -moz-linear-gradient(90deg, var(--color-blue) 0%, var(--color-pink) 50%, var(--color-dark) 100%);
  background-image: -o-linear-gradient(90deg, var(--color-blue) 0%, var(--color-pink) 50%, var(--color-dark) 100%);
  background-image: -ms-linear-gradient(90deg, var(--color-blue) 0%, var(--color-pink) 50%, var(--color-dark) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#1D53FD', endColorstr='#F008EB', GradientType=1);
  -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr='#1D53FD', endColorstr='#F008EB')";

  background-image: linear-gradient(90deg, var(--color-blue) 0%, var(--color-pink) 50%, var(--color-dark) 100%);
`

export const Title = styled.h2`
  color: var(--color-white);
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 600;
  padding: 0.25rem 1.5rem;
`
