import React from 'react';
import Header from 'components/organisms/Header/Header';
import Characters from 'components/organisms/Characters/Characters';
const MainView = ({items}) =>{
    return(
        <>
<Header/>
      <Characters items={items} ></Characters>
      </>
)};


export default MainView ;
