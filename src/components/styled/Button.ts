import styled from '@emotion/styled'
import MuiButton from "@mui/material/Button";
import { $whiteColor, $linearGradientToRight, $linearGradientToTop, $borderImage } from '../../styles/_variables'

const commonStyles = `
border-radius: 0;
text-transform: capitalize;
padding: .25rem 1.5rem;
font-size: 1.25rem;
font-weight: bold;
color: ${$whiteColor};
&:focus {
    scale: .9;
    opacity: .9;
}
&:active{
    scale: .9; 
    opacity: .9;

}
`
export const ButtonGradientOutlined = styled(MuiButton)`
${commonStyles}
border: 1px solid;
${$borderImage}
background-color:transparent;
position: relative;

&:hover{
    border-image-source: ${$linearGradientToTop};
}

&::after {
    content: '';
    position: absolute;
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    border: 4px solid;
    ${$borderImage}
    filter: blur(4px);
    background-color: transparent;
}

&:hover::after {
    border-image-source: ${$linearGradientToTop};
}
`;

export const ButtonGradientFilled = styled(MuiButton)`
${commonStyles}
background: ${$linearGradientToRight};
position: relative;

&:hover {
    background: ${$linearGradientToTop};
}

&::after {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(2px);
    border: 8px solid;
    ${$borderImage}
}

&:hover::after {
    border-image-source: ${$linearGradientToTop};
}
`


// border: 6px solid;
// border-image-slice: 1;
// border-image-source: ${linearGradientToRight};