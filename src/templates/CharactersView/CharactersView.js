import React from 'react';
import { Wrapper } from './CharactersView.styles';
import Characters from 'components/organisms/Characters/Characters';
const CharactersView = ({isLoading,items}) => {
    return(
<Wrapper>
<Characters items={items} />
</Wrapper>
)};

export default CharactersView ;
