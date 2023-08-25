export const // Media Query Breakpoints
  $mobileBreakpoint = '578px',
  $tabletBreakpoint = '768px',
  $lgDesktopBreakpoint = '1440px'


export const  //colors
  $darkColor = '#1E0A6A',
  $pinkColor = '#DE00FF',
  $blueColor = '#047CFF',
  $whiteColor = '#fafafa'


export const
  $linearGradientToRight = `linear-gradient(to right, ${$pinkColor}, ${$blueColor})`,
  $linearGradientToTop = `linear-gradient(to top, ${$blueColor}, ${$pinkColor})`

export const
  $borderImage = `
    border-image-slice: 1;
    border-image-source: ${$linearGradientToRight};
`