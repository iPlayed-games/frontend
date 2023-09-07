import { ButtonWhite } from '@common'
import { Leaderboard } from '@components'
import { Container, Title, ScreenWrapper, ImageWrapper, Description } from './styles'
import Image from 'next/image'
import hero from '../../../public/images/hero.jpg'

const HERO_TITLE: string = "Isn't it time you were rewarded for your epic skills?"
const HERO_DESCRIPTION: string =
  "Earn badges, show off your gaming prowess, and join a community where your achievements are celebrated like never before.  It's time to level up, unlock bragging rights, and embrace the glory at iPlayed!"
const RESPONSIVENESS_IMG = { width: '100%', height: 'auto' }

export default function Hero() {
  return (
    <ScreenWrapper>
      <ImageWrapper>
        <Image alt="hero" src={hero} placeholder="blur" quality={100} sizes="100vw" style={RESPONSIVENESS_IMG} />
      </ImageWrapper>
      <Container>
        <div>
          <Title>{HERO_TITLE}</Title>
          <Description>{HERO_DESCRIPTION}</Description>
          <ButtonWhite disableRipple component="a" href="/login">
            Log in
          </ButtonWhite>
        </div>
        <div>
          <Leaderboard />
        </div>
      </Container>
    </ScreenWrapper>
  )
}
