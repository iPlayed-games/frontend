'use client'
import styled from '@emotion/styled'

export const Wrapper = styled.section`
  display: flex;
  margin: 0;
  width: 100%;
  height: 550px;
  background-image: url('images/hero_background.svg');
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
`

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: var(----breakpoint-large-desktop);
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 75px;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 600;
  line-height: normal;
`

export const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  line-height: normal;
`
