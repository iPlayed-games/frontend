import { css } from '@emotion/react'
import styled from '@emotion/styled'
import * as m from '../../styles/_mixins'
import { $lgDesktopBreakpoint } from '../../styles/_variables'

export const FooterContainer = styled.footer`
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
  min-height: 22rem;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  padding-bottom: 64px;
`
/* TODO: Create bug ticket after release to fix padding-right and padding-left. {Raphael Comments} */

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${$lgDesktopBreakpoint};
  padding-left: 24px;
  padding-right: 24px;
  text-align: center;

  ${m.tablet(css`
    display: flex;
    text-align: left;
    align-items: flex-end;
    justify-content: space-between;
  `)}
`

export const Copyright = styled.p`
  text-align: center;
  margin: 0;
  font-size: 0.75rem;
  font-weight: 300;

  //media query mixins
  ${m.tablet(css`
    text-align: end;
  `)}
`
