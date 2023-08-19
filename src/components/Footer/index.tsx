import { Logo } from '@/src/assets'
import S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <Logo />
        <S.Copyright>Copyright 2023 iPlayed Inc. All rights reserved</S.Copyright>
      </S.Container>
    </S.Footer>
  )
}

export default Footer
