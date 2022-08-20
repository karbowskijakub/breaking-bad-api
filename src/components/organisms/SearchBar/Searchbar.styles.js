import styled from "styled-components";
import {BiSearch} from 'react-icons/bi'



export const Search = styled(BiSearch)`
color: ${({ theme }) => theme.colors.grey};
margin-top:3px;
@media screen and (max-width: 1200px ){
    font-size: ${({ theme }) => theme.fontSize.l};
}
`;


export const Container = styled.div`

`

export const FormField = styled.form`
border: 2px solid ${({theme}) => theme.colors.white};
background-color:${({ theme }) => theme.colors.black};
border-radius:20px;
position: relative;

@media screen and (max-width: 768px ){
    display: none;
}
`

export const Button = styled.button`

position: absolute;
top:0;
right:0;
height:100%;
border:none;
background-color:${({theme}) => theme.colors.black};
font-size: ${({ theme }) => theme.fontSize.xl};
margin-right:0.5em;
border-radius:50%;

`