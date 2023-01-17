import styled from "styled-components";


export const LevelBox1 = styled.div <{darkMode: boolean}>`
width: 15px;
height:15px;
background-color:${({darkMode}) => darkMode?
"black":"white"};
position:relative;
border-radius:50%;
transition:0.8s !important;
`
export const LevelBox2 = styled.div <{darkMode: boolean}>`
width: 15px;
height:15px;
background-color:${({darkMode}) => darkMode?
"black":"white"};
position:relative;
border-radius:50%;
transition:1.6s !important;
`
export const LevelBox3 = styled.div <{darkMode: boolean}>`
width: 15px;
height:15px;
background-color:${({darkMode}) => darkMode?
"black":"white"};
position:relative;
border-radius:50%;
transition:2.4s !important;
`
export const LevelBox4 = styled.div <{darkMode: boolean}>`
width: 15px;
height:15px;
background-color:${({darkMode}) => darkMode?
"black":"white"};
position:relative;
border-radius:50%;
transition:3.6s !important;
`
export const LevelBox5 = styled.div <{darkMode: boolean}>`
width: 15px;
height:15px;
background-color:${({darkMode}) => darkMode?
"black":"white"};
position:relative;
border-radius:50%;
transition:4.2s !important;
`

export const SkillCardContainer = styled.div <{darkMode: boolean,  colored:string, level:number}>`
width:180px;
height:70px;
background-color:${({darkMode}) => darkMode?
"white":"black"};
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
box-shadow: ${({darkMode}) => darkMode?
"4px 4px black":"4px 4px gray"};
filter:grayscale(90%);
opacity:0.5;
:hover {opacity:1;
    filter:grayscale(0%);
    ${LevelBox1}{background-color:${({colored,level}) => level >= 1?`${colored}`:""}};
    ${LevelBox2}{background-color:${({colored,level}) => level >=2?`${colored}`:""}};
    ${LevelBox3}{background-color:${({colored,level}) => level >=3?`${colored}`:""}};
    ${LevelBox4}{background-color:${({colored,level}) => level >=4?`${colored}`:""}};
    ${LevelBox5}{background-color:${({colored,level}) => level ===5?`${colored}`:""}};
}   
`

export const IconImage = styled.img`
    width:90px;
    height:65px;
    margin-top:-50px;
`
export const CardTitle = styled.h3 <{darkMode: boolean,width:number}>`
font-size: 16px;
color:${({darkMode}) => darkMode?
"black":"white"}
`
export const SkillLevelContainer=styled.div`
width:80%;
height: 30px;
display:flex;
align-items:center;
justify-content:space-evenly;`


