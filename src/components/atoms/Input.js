import styled from 'styled-components';


export const Input = styled.input`
padding: 5px 8px;
  border: none;
  box-sizing: border-box;
  border-radius: 20px;
  height:50px;
  width:400px;
  color: ${({theme}) => theme.colors.white};
  background-color:${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.fontSize.l};

&::placeholder {
    text-align: center; 

 }
 &:focus
 {
  outline:none;
 }

 @media screen and (max-width:1200px){
  width:200px;
  &::placeholder {
    font-size: ${({theme}) => theme.fontSize.s};

 }

}

`;
