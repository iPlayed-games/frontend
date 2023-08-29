import type { Metadata } from 'next'
import ThemeRegistry from '../styles/themeRegistry/ThemeRegistry'
import { Roboto } from 'next/font/google'
import { Footer, Header } from '../components'
import './global.css'

//TODO for create fonts configuration variable.
//TODO: use Roboto font-family from global styles
const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'iPlayed.games',
  //TODO: Change Meta
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  )
}
