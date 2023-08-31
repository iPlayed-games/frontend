'use client'
import { Logo } from '@svg'
import { CustomContainer, HeaderComponent, CustomBox } from './style'
import { ButtonGradientFilled, ButtonGradientOutlined } from '../../common/Button'

const Header = () => {
  return (
    <HeaderComponent>
      <CustomContainer maxWidth="lg">
        <Logo />
        <CustomBox>
          <ButtonGradientOutlined disableRipple component="a" href="/login">
            Log In
          </ButtonGradientOutlined>
          <ButtonGradientFilled disableRipple component="a" href="/signup">
            Sign Up
          </ButtonGradientFilled>
        </CustomBox>
      </CustomContainer>
    </HeaderComponent>
  )
}

export default Header
