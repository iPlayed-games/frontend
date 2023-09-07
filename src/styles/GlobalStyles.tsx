import MuiGlobalStyles, { GlobalStylesProps } from '@mui/material/GlobalStyles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif', 'Helvetica', 'Arial'],
})

const STYLES: GlobalStylesProps['styles'] = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    shapeRendering: 'geometricPrecision',
    textRendering: 'geometricPrecision',
    fillRule: 'evenodd',
    clipRule: 'evenodd',
  },
  ':root': {
    '--color-pink': 'rgba(240, 8, 235)', //#F008EB
    '--color-blue': 'rgba(29, 83, 253)', //#1D53FD
    '--color-dark': 'rgb(11, 22, 102)', //#0B1666
    '--color-white': 'rgba(250, 250, 250)', //#FAFAFA
    '--color-semi-white': 'rgba(250, 250, 250, .2)',
    '--breakpoint-large-desktop': '80rem',
  },
  'html, body': {
    fontFamily: roboto.style.fontFamily,
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-dark)',
    height: '100%',
    scrollBehavior: 'smooth',
  },
  'ol, ul': {
    listStyle: 'none',
  },
}

const GlobalStyles = () => {
  return <MuiGlobalStyles styles={STYLES} />
}

export default GlobalStyles
