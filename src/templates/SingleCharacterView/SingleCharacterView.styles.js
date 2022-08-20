import styled, {keyframes} from "styled-components";
import {GiChemicalDrop, GiChemicalTank} from "react-icons/gi"
export const Wrapper =styled.div`
position:relative;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
max-width:100%;
background-color:${({ theme }) => theme.colors.black};
color:${({ theme }) => theme.colors.white};

`;

export const Container = styled.div`
z-index:20;
margin-top:10em;
overflow:hidden;
border: 2px solid ${({theme}) => theme.colors.white};
border-radius:20px;
position:relative;
height:1100px;
width:600px;
background: linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);
margin-bottom:10em;
`;

export const Img = styled.div`
img{
    border-top: 2px solid ${({theme}) => theme.colors.white};
    position:absolute;
    width:100%;
    height:700px;
    object-fit:cover;
    }
`;
export const StyledList = styled.ul`
width:100%;
height:100%;
list-style:none;
margin-top:10.5em;

`;
export const Li = styled.li`
font-size:${({ theme }) => theme.fontSize.xl};
line-height:2.5em;

`;

export const Title = styled.h1`

width:100%;
height:50px;
text-align:center;

`;

export const Informations = styled.div`
border-top: 2px solid ${({theme}) => theme.colors.white};
position:absolute;
width:100%;
height:410px;
background: linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%);
bottom:0;
display:flex;
text-align:center;
align-items:center;

`;


const moveright = keyframes`
from{
    transform:rotate(0);
}
to{
    transform:rotate(360deg);
}
`;
const moveleft= keyframes`
from{
    transform:rotate(0);
}
to{
    transform:rotate(-360deg);
}
`;

export const ChemicalDropOne = styled(GiChemicalDrop)`
display:block;
z-index:5;
color:${({ theme }) => theme.colors.white};
position:absolute;
top:8em;
left:10em;
width:300px;
height:300px;
opacity:0.1;
animation:rotate-right 55s infinite linear;
animation-name: ${moveright};
@media screen and (max-width:1650px) {
    left:5em;
}
@media screen and (max-width:1200px) {
    display:none;
 }

`;

export const ChemicalTankOne= styled(GiChemicalTank)`
display:block;
color:${({ theme }) => theme.colors.white};
z-index:5;
position:absolute;
top:40em;
left:15em;
width:500px;
height:500px;
opacity:0.1;
animation:rotate-right 55s infinite linear;
animation-name: ${moveleft};
@media screen and (max-width:1650px) {
    left:5em;
  }
  @media screen and (max-width:1200px) {
    display:none;
 }

`;

export const ChemicalDropTwo = styled(GiChemicalDrop)`
display:block;
z-index:5;
color:${({ theme }) => theme.colors.white};
position:absolute;
top:50em;
right:10em;
width:300px;
height:300px;
opacity:0.1;
animation:rotate-right 55s infinite linear;
animation-name: ${moveleft};
@media screen and (max-width:1650px) {
    right:5em;
}
@media screen and (max-width:1200px) {
    display:none;
 }
`;

export const ChemicalTankTwo= styled(GiChemicalTank)`
display:block;
color:${({ theme }) => theme.colors.white};
z-index:5;
position:absolute;
top:8em;
right:10em;
width:500px;
height:500px;
opacity:0.1;
animation:rotate-right 55s infinite linear;
animation-name: ${moveright};
@media screen and (max-width:1650px) {
    right:5em;
}
@media screen and (max-width:1200px) {
   display:none;
}
`;