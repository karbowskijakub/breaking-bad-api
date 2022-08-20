import { Wrapper } from './Template.styles';
import Navigation from '../../components/organisms/Navigation/Navigation';
import Header from 'components/organisms/Header/Header';
import { useEffect, useState } from 'react';
import Characters from 'components/organisms/Characters/Characters';
import Footer from 'components/organisms/Footer/Footer';

const Template = ({setQuery,children}) => {

  return (
    <Wrapper>
      <Navigation setQuery={setQuery} />
    {children}
<Footer/>

    </Wrapper>
  );
};

export default Template;
