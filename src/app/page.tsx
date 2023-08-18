'use client';
import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/styles'
import Hero from '../components/Hero';




export default function Home() {
  return (
    // <ThemeProvider theme={theme}>

    <main id="MainElement">
      <Hero />

      
    
      </main>
    // </ThemeProvider>
  )
}
