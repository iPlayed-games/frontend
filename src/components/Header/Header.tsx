'use client'
import { FC } from 'react'
import Logo from '../Logo/Logo'
import { CustomContainer, HeaderComponent, CustomBox } from './style'
// import { Button } from '@mui/material'
import { ButtonGradientFilled, ButtonGradientOutlined, ButtonWhite } from '../styled/Button'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
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
