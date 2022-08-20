import styled from "styled-components";
import { NavLink } from "react-router-dom";
import{FaBars} from 'react-icons/fa';
import {  VscChromeClose } from "react-icons/vsc";


export const Wrapper = styled.nav`
position:relative;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
 background-color: ${({ theme }) => theme.colors.black};
  justify-content: space-between;

`;

export const Logo = styled.div`
margin-top:4px;
  display:flex;
  justify-content:center;
  align-items: center;
  z-index:10;

  @media screen and (max-width:768px) {

    lef
  }
`;

export const StyledLink = styled(NavLink)`
position:relative;
display:flex;
align-items: center;
text-decoration: none;
padding: 0 1em;
height:100%;
cursor:pointer;
color: ${({ theme }) => theme.colors.white};
font-size: ${({ theme }) => theme.fontSize.xl};
margin-right:1.3em;
&::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 20px;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

&:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
} 

@media screen and (max-width:1200px){
  margin-right:0em;
  font-size: ${({ theme }) => theme.fontSize.l};
}
`;

export const Bars = styled(FaBars)`
display:none;
color: ${({ theme }) => theme.colors.white};

@media screen and (max-width: 768px ){
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 100%);
    font-size:1.8rem;
    cursor:pointer;
}
`;

export const NavMenu = styled.div`

display:flex;
align-items:center;
margin-right: 24px;
@media screen and (max-width:768px){
    display:none;
}
`;

export const List = styled.ul`

  list-style: none;
  
  @media screen and (max-width:768px) {
    display: block;
  }
`;

export const Li = styled(NavLink)`
position:relative;
text-decoration:none;
display:block;
padding:1.5em 2em;
font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.2s ease;
  &:hover {

   color: ${({ theme }) => theme.colors.white};
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 20px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  } 
`;
export const Open = styled(FaBars)`
z-index:2000;
  font-size: 2rem;
  display: none;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width:768px) {
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 100%);
    font-size:1.8rem;
    cursor:pointer;
    
  }
`;

export const Close = styled(VscChromeClose)`
z-index:2000;
  display: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  @media screen and (max-width:768px) {
    display: block;
    position: absolute;
    top:0;
    right:0;
    transform: translate(-100%, 100%);
    font-size:1.8rem;
    cursor:pointer;
  }
`;

export const NavMenuSecond = styled.div`

z-index:3000;
height:376px;
width:100%;
position:absolute;
top:85%;
display: flex;
justify-content:center;
flex-direction:column;
align-items:center;
text-align:center;
background-color: ${({ theme }) => theme.colors.black};
`

export const StyledLogo = styled(NavLink)`
position:relative;
display:flex;
align-items: center;
text-decoration: none;
padding: 0 1em;
height:100%;
cursor:pointer;
color: ${({ theme }) => theme.colors.white};
font-size: ${({ theme }) => theme.fontSize.xl};
margin-right:1.3em;
`;