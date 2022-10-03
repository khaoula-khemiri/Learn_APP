import {css} from "styled-components"
export const mobile500=(props)=>{
return css`
@media only screen and (max-width:500px){
    ${props}
}
`;
}

export const mobile800=(props)=>{
    return css`
    @media only screen and (max-width:900px){
        ${props}
    }
    `;
    }