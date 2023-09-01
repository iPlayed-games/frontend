'use client'

import CssBaseline from '@mui/material/CssBaseline'
import EmotionCacheProvider from './EmotionCache'
import GlobalStyles from 'styles/GlobalStyles'

type ThemeRegistryProps = {
  children: React.ReactNode
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  return (
    <EmotionCacheProvider options={{ key: 'mui' }}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </EmotionCacheProvider>
  )
}
