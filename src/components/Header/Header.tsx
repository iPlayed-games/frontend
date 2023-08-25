'use client'
import { FC } from 'react'
import Logo from '../Logo/Logo'
import { CustomContainer, HeaderComponent, CustomBox } from './style'
// import { Button } from '@mui/material'
import { ButtonGradientFilled, ButtonGradientOutlined } from '../styled/Button'

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
          {/* <Button variant="outlined" size="large" component="a" href="/login">
            Log in
          </Button>
          <Button variant="contained" size="large" component="a" href="/signup">
            Sign up
          </Button> */}
        </CustomBox>
      </CustomContainer>
    </HeaderComponent>
  )
}

export default Header
