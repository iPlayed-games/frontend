import { Logo } from '@svg'
import { FooterContainer, Copyright, ScreenContainer } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <ScreenContainer>
        <Logo />
        <Copyright>Copyright 2023 iPlayed Inc. All rights reserved</Copyright>
      </ScreenContainer>
    </FooterContainer>
  )
}
