import React from 'react';
import { Input } from '../../atoms/Input';
import { Search } from './Searchbar.styles';
import { FormField } from './Searchbar.styles';
import { Button } from './Searchbar.styles';
import { useState } from 'react';
const SearchBar = ({getQuery}) => {
const [text, setText] = useState('');

const onChange =(q) =>{
  setText(q)
  getQuery(q)
}


  return (
    <FormField>
      <Input type="text" placeholder="Search for characters" value={text} 
      onChange= {(e) => onChange(e.target.value)}></Input>
      <Button disabled>
        <Search></Search>
      </Button>
    </FormField>
  );
};
export default SearchBar;
