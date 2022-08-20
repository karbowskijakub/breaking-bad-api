import React from 'react'
import { Card,CardInner,CardFront,CardBack } from './CharacterItem.styles'
import { useNavigate } from 'react-router-dom'

const CharacterItem = ({ item}) => {
  const navigate = useNavigate();
  const navigateToCharacter = () => {

    navigate(`${item.char_id}`);
  };

  return (
    <CardInner>
    <Card onClick={navigateToCharacter}>

        <CardFront>
          <img src={item.img} alt='' />
        </CardFront>
        <CardBack>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </CardBack>
    </Card>
    </CardInner>
  )
}

export default CharacterItem;
