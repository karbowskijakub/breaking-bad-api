import styled from "styled-components";


export const Wrapper = styled.header`
position:relative;
  width: 100%;
  height: 900px;
  display: flex;
  flex-direction: row;
 background-color: ${({ theme }) => theme.colors.black};
  justify-content: space-between;

`;

export const Background = styled.div`
img {
    
  position:absolute;
    width:100%;
    height:100%;
    object-fit:cover;
    z-index:0;
    @media screen and (max-width:768px) {
      object-position: bottom 10px right -260px;
    }
  }
  }
`;


export const Shadow = styled.div`
width:100%;
height:100%;
postion:absolute;
box-shadow: 600px 60px 50px 0px ${({ theme }) => theme.colors.black} inset;
background: linear-gradient(transparent, #040404);
z-index:1000;
@media screen and (max-width:1200px) {
  box-shadow: 400px 60px 50px 0px ${({ theme }) => theme.colors.black} inset;
}
@media screen and (max-width:768px) {
  box-shadow: 150px 60px 50px 0px ${({ theme }) => theme.colors.black} inset;
}
`;

export const Informations  =styled.div`
width:300px;
height:700px;
position:absolute;
background-color:transparent;
top:0;left:0;
z-index:2000;
margin-top:2em;
margin-left:4em;


h1{
  margin-left:0.8em;
  margin-top:8em;
  color:${({ theme }) => theme.colors.white};
  font-size:${({ theme }) => theme.fontSize.xxl};
  border-left: 2px solid ${({theme}) => theme.colors.white};
  border-bottom: 2px solid ${({theme}) => theme.colors.white};
}

p{ 
  margin-left:1em;
  margin-top:2em;
  color:${({ theme }) => theme.colors.white};
  font-size:${({ theme }) => theme.fontSize.xl};
}

@media screen and (max-width:1200px) {
  h1{
    margin-left:0;
    margin-top:8;
  }
  p{ 
    margin-left:0;
    margin-top:8;
    
  }
}


@media screen and (max-width:1200px) {
  margin-top:12em;
  h1{
    
    font-size:${({ theme }) => theme.fontSize.xl};
    width:200px;
  }
  p{ 
   
    font-size:${({ theme }) => theme.fontSize.l};
  }
}

`;