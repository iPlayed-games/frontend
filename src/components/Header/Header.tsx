'use client'
import { FC } from 'react'
import Logo from '../Logo/Logo'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import styles from './Header.module.css'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Stack from '@mui/material/Stack'
import top100Films from '../../tempData'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <Container
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}
        maxWidth="lg"
      >
        <Logo />

        <Box sx={{ display: 'flex', gap: '2rem' }}>
          <Button className={styles.button_outlined} variant="outlined" size="large" component="a" href="/">
            Log in
          </Button>
          <Button className={styles.button_contained} variant="contained" size="large" component="a" href="/">
            Sign up
          </Button>
        </Box>
      </Container>
    </header>
  )
}

export default Header
