'use client'

import styled from '@emotion/styled'

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: -moz-linear-gradient(
    163deg,
    var(--color-pink) 8%,
    rgba(192, 26, 242, 1) 20%,
    rgba(29, 83, 253, 1) 55%,
    rgba(11, 22, 102, 1) 79%
  );
  background: -webkit-linear-gradient(
    163deg,
    var(--color-pink) 8%,
    rgba(192, 26, 242, 1) 20%,
    rgba(29, 83, 253, 1) 55%,
    rgba(11, 22, 102, 1) 79%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f008eb",endColorstr="#0b1666",GradientType=1);
  min-height: 22rem;
`

export const ScreenContainer = styled.div`
  padding-left: 83px;
  padding-right: 80px;
  padding-bottom: 64px;
`

export const Container = styled.div`
  display: flex;
  min-height: 20rem;
  justify-content: space-between;
  align-items: flex-end;
`

export const Copyright = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
`
