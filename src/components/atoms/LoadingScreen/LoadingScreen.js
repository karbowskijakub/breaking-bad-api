import React from 'react';
import { Wrapper } from './LoadingScreen.styles';
import spinner from '../../../assets/icons/Spinner.gif'

const LoadingScreen = () => {
    return(
        <Wrapper>
    <img src ={spinner} style={{width:'200px',margin: 'auto', display:'block' }} alt='Loading'/>
    </Wrapper>
    )};



export default LoadingScreen;
