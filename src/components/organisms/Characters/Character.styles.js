import styled from "styled-components";

export const Cards = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;
width:100%;
background-color:${({ theme }) => theme.colors.black};
@media screen and (max-width:1600px){
    grid-template-columns: repeat(2, 1fr);
}

@media screen and (max-width:900px){
    grid-template-columns: 1fr;
}
`;
export const Wrapper =styled.div`
display:flex;
justify-content:center;
items-align:center;
max-width:100%;

`;