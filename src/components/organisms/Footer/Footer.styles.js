import styled from "styled-components";

export const Wrapper = styled.footer`
position:relative;
  width: 100%;
  height: 30px;
 background-color: ${({ theme }) => theme.colors.black};
  bottom:0;
color:${({ theme }) => theme.colors.white};
text-align:center;
padding-top: 2em;
padding-bottom: 2em;
border-top: 2px solid ${({theme}) => theme.colors.white};
P{

    margin:0;
}
`;