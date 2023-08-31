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
