import React from 'react';
import { Wrapper } from './Root.styles';
import Template from 'templates/Template/Template';
import { theme } from '../assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharactersView from 'templates/CharactersView/CharactersView';
import MainView from 'templates/MainView';
import SingleCharacterView from 'templates/SingleCharacterView/SingleCharacterView';
import {GlobalStyle} from '../../src/assets/styles/globalStyles';
import LoadingScreen from 'components/atoms/LoadingScreen/LoadingScreen';

const Root = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);
  return isLoading ? (<LoadingScreen/>
  ) :(
    <Router>
      
      <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Wrapper>
          <Template setQuery={setQuery}>
          <Routes>
          <Route 
          end
          path="/breaking-bad-api" 
          element={<MainView items={items}/>} />
          <Route 
            end
            path="/breaking-bad-api/:id"
            element={<SingleCharacterView/>} />
            <Route
            end
              path="/breaking-bad-api/characters"
              element={<CharactersView items={items}/>}
            />
            <Route 
            end
            path="/breaking-bad-api/characters/:id"
            element={<SingleCharacterView/>} />
            
            </Routes>
          </Template>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
