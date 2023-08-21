import { FC } from 'react'
import Logo from '../Logo/Logo'
import styles from './Header.module.css'
import Button from '@mui/material/Button'
import { HeaderComponent, CustomBox, CustomContainer } from './style'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <HeaderComponent>
      <CustomContainer maxWidth="lg">
        <Logo />
        <CustomBox>
          <Button className={styles.button_outlined} variant="outlined" size="large" component="a" href="/">
            Log in
          </Button>
          <Button className={styles.button_contained} variant="contained" size="large" component="a" href="/">
            Sign up
          </Button>
        </CustomBox>
      </CustomContainer>
    </HeaderComponent>
  )
}

export default Header
