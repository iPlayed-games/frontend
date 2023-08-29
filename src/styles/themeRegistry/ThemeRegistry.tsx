'use client'

import CssBaseline from '@mui/material/CssBaseline'
import EmotionCacheProvider from './EmotionCache'

type ThemeRegistryProps = {
  children: React.ReactNode
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  return (
    <EmotionCacheProvider options={{ key: 'mui' }}>
      <CssBaseline />
      {children}
    </EmotionCacheProvider>
  )
}
