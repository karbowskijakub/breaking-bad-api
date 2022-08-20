import React from 'react';
import { Wrapper } from './Header.styles';
import { Background } from './Header.styles';
import mainphoto from "../../../assets/icons/mainphoto.jpg"
import { Shadow } from './Header.styles';
import { Informations } from './Header.styles';
const Header  = () => {
    
    return(
<Wrapper>

<Background>
    <img src ={mainphoto}></img>
<Informations>
    <h1>Breaking Bad</h1>
    <p>A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future. When chemistry teacher Walter White is diagnosed with Stage III cancer and given only two years to live, he decides he has nothing to lose.</p>
    </Informations>
</Background>
<Shadow>
</Shadow>
</Wrapper>
)};


export default Header ;
