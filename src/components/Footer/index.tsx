import { Logo } from '@svg'
import { FooterContainer, Container, Copyright, ScreenContainer } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <ScreenContainer>
        <Container>
          <Logo />
          <Copyright>Copyright 2023 iPlayed Inc. All rights reserved</Copyright>
        </Container>
      </ScreenContainer>
    </FooterContainer>
  )
}
