import styled from "styled-components";
const breakPoint = 640

export const LinkContainer = styled.div  <{isClicked:boolean}>`
width: 120%;
height: 100%;
margin-top:10vh;
position:absolute;
display:flex;
align-items:flex-end;
justify-content:center;
gap:10px;
visibility:${({isClicked}) => isClicked?
"visible":"hidden"};
`

export const TextContainer = styled.div`
display:flex;
flex-direction:column;
position:relative;
text-align:center;
align-items:center;
justify-content:center;
padding-left:20px;
padding-right:20px;
position:relative;
`



export const ProjectText = styled.h3 <{darkMode: boolean, width:number}>`
font-size:${({width}) => width<breakPoint?
"10px":"23px"};
text-transform:uppercase;
color: ${({darkMode}) => darkMode?
"black":"white"};
letter-spacing:10px;
cursor: pointer;
z-index:3;
:hover{
    color: ${({darkMode}) => darkMode?
"#f2e6a2":"#b3110c"};
}
:active{
    filter:brightness(50%);
}
 `

export const Links = styled.a <{darkMode: boolean, width:number}>`
font-size:${({width}) => width<breakPoint?
"10px":"23px"};
text-transform:capitalize;
color: ${({darkMode}) => darkMode?
"black":"white"};
cursor: pointer;
letter-spacing: 3px;
text-decoration:none;
:hover{
    color: ${({darkMode}) => darkMode?
"#f2e6a2":"#b3110c"};}
:active{
    filter:brightness(50%)
};
`

export const InterLinks = styled.p <{darkMode: boolean, width:number}>`
font-size:${({width}) => width<breakPoint?
"10px":"23px"};
color: ${({darkMode}) => darkMode?
"black":"white"};
`