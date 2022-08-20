import React from 'react';
import { Cards } from './Character.styles';
import { Wrapper } from './Character.styles';
import CharacterItem from 'components/molecules/CharacterItem';

const Characters = ({items}) =>{ 

    return (
        <Wrapper>
            
    <Cards>
    
{items.map((item) => (
<CharacterItem key={item.char_id} item={item}></CharacterItem>

))}
    </Cards>
    </Wrapper>
    )
};


export default Characters;
