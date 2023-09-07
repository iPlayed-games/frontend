import MuiGlobalStyles, { GlobalStylesProps } from '@mui/material/GlobalStyles'
import { Roboto } from 'next/font/google'
import { $whiteColor } from './_variables'

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
    '--color-pink': 'rgb(240, 8, 235)',
    '--color-blue': 'rgb(4, 124, 255)',
    '--color-white': 'rgb(250, 250, 250)',
    '--color-dark': 'rgb(30, 10, 106)',
  },
  'html, body': {
    fontFamily: roboto.style.fontFamily,
    color: $whiteColor,
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
