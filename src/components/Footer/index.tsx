import { Logo } from '@svg'
import { FooterContainer, Container, Copyright } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Logo />
        <Copyright>Copyright 2023 iPlayed Inc. All rights reserved</Copyright>
      </Container>
    </FooterContainer>
  )
}
