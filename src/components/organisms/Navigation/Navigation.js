import React from 'react';
import { Wrapper } from './Navigation.styles';
import { Logo } from './Navigation.styles';
import { NavMenu } from './Navigation.styles';
import { StyledLink } from './Navigation.styles';
import SearchBar from '../../../components/organisms/SearchBar/Searchbar';
import { useState } from 'react';
import { Li ,List,Open,Close } from './Navigation.styles';
import { NavMenuSecond } from './Navigation.styles';
import { StyledLogo } from './Navigation.styles';


const Navigation = ({setQuery}) => {
  const [ showMenu, setShowMenu ] = useState(true);
 

  return (

      <Wrapper>
        <Logo>
          <StyledLogo to="/breaking-bad-api">
            <img src={require('../../../assets/icons/blackwhitelogo.png')} alt="logo" />
          </StyledLogo>
        </Logo>
       
        {showMenu ? (
      null
        ):(
          
          <NavMenuSecond>
        <List>
        <Li exact to="/breaking-bad-api">Home</Li>
        <Li to="/breaking-bad-api/characters">Characters</Li>
  
      </List>
      </NavMenuSecond>)};

        <NavMenu>
          <StyledLink to="/breaking-bad-api/characters">Characters</StyledLink>
          <StyledLink exact to="/breaking-bad-api">Home</StyledLink>

           <SearchBar getQuery={(q) => setQuery(q)} ></SearchBar>
        </NavMenu> 
        

        {showMenu ? (
          <Open onClick={() => setShowMenu(false)} />
        
      ) : (
        <Close onClick={() => setShowMenu(true)} />
      )}
       


      </Wrapper>
  
  );
};

export default Navigation;
