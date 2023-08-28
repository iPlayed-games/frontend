'use client'
import { Logo } from '@/src/assets/svg'
import { FooterContainer, Container, Copyright } from './styles'

const Footer = () => {
  return (
    <FooterContainer>      <Container>        <Logo />        <Copyright>Copyright 2023 iPlayed Inc. All rights reserved</Copyright>
      </Container>
    </FooterContainer>
  )
}

export default Footer
