export const // Media Query Breakpoints
  $mobileBreakpoint = '578px',
  $tabletBreakpoint = '768px',
  $lgDesktopBreakpoint = '1280px'

export const //colors
  $darkColor = '#1E0A6A',
  $pinkColor = '#DE00FF',
  $blueColor = '#047CFF',
  $whiteColor = '#fff',
  $whiteColorSemi = 'rgba(250,250,250,.2)',
  $titleBackgroundGradientColor = '#047CFF 0%, #DE00FF 50%, #1E0A6A 100%'

export const $linearGradientToRight = `linear-gradient(to right, ${$pinkColor}, ${$blueColor})`,
  $linearGradientToTop = `linear-gradient(to top, ${$blueColor}, ${$pinkColor})`,
  $DiagonalGradient = `linear-gradient(135deg, ${$blueColor}, ${$pinkColor})`

export const $borderImage = `
  border-image-slice: 1;
  border-image-source: ${$linearGradientToRight};
  `
