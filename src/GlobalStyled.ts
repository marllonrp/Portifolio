import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box; 
    transition:0.8s;
}
`;

export const getIn = keyframes`
0% {
    opacity:0;}
33% {
    opacity:0.8
}
100%{
    opacity:0.3
}
`;

export const titleAnimation = keyframes`
0%{
    transform: scale(0.95);
    opacity:0.5;
}
33%{   
    transform: scale(1);
    opacity:1;

}
100%{
    transform: scale(0.95);
    opacity:0.5;
}
`;
