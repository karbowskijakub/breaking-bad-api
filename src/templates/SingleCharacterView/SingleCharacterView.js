import React,{useEffect,useState} from 'react';
import { Wrapper } from './SingleCharacterView.styles';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from './SingleCharacterView.styles';
import { Informations,Img,StyledList,Li, Title} from './SingleCharacterView.styles';
import { ChemicalDropOne,ChemicalTankOne,ChemicalTankTwo,ChemicalDropTwo } from './SingleCharacterView.styles';
import LoadingScreen from 'components/atoms/LoadingScreen/LoadingScreen';

const SingleCharacterView = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
 
    let{id} =useParams();
    
    useEffect(() => {
        const fetchItems = async () => {
          const result = await axios(`https://www.breakingbadapi.com/api/characters/${id}`);
    
          setItems(result.data);
          setIsLoading(false);
        };
        fetchItems();
      }, []);

   return isLoading ? (<LoadingScreen/>
    ) :(
<Wrapper>
{items.map((item) => (
<Container key={item.id} >
<Title>{item.name}</Title>
<Img>
<img src={item.img} alt='' />
</Img>
<Informations>
<StyledList>
  <Li>
    <strong>Actor Name:</strong> {item.portrayed}
  </Li>
  <Li>
    <strong>Nickname:</strong> {item.nickname}
  </Li>
  <Li>
    <strong>Birthday:</strong> {item.birthday}
  </Li>
  <Li>
    <strong>Status:</strong> {item.status}
  </Li>
</StyledList>
</Informations>
</Container>
))}
<ChemicalDropOne/>
<ChemicalTankOne/>
<ChemicalDropTwo/>
<ChemicalTankTwo/>
</Wrapper>
)};


export default SingleCharacterView ;


