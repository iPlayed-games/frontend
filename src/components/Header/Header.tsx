'use client'
import { FC } from 'react'
import Logo from '../Logo/Logo'
import { CustomContainer, HeaderComponent, CustomBox } from './style'
import { Button } from '@mui/material'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <HeaderComponent>
      <CustomContainer maxWidth="lg">
        <Logo />
        <CustomBox>
          <Button variant="outlined" size="large" component="a" href="/login">
            Log in
          </Button>
          <Button variant="contained" size="large" component="a" href="/signup">
            Sign up
          </Button>
        </CustomBox>
      </CustomContainer>
    </HeaderComponent>
  )
}

export default Header
