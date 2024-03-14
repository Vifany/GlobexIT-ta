import React from 'react';
import styled from 'styled-components';
import SearchButton from '../elements/search-button/search-button';

interface SearchFieldProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onButtonClick: () => void;
}

const SearchContainer = styled.div`
    height:48px;
    width:auto;
    border-radius:24px;
    border:1px solid black;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 24px;
    padding-right: 10px;
`;


const SearchInput = styled.input`
    height: 24px;
    width: 100%;
    font-size: 24px;
    background: transparent;
    border: none;
    outline: none;
`;

const SearchField: React.FC <SearchFieldProps> = ({onChange, onButtonClick}) => {
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onButtonClick();
        }
      };
    
    return (
        <SearchContainer>
            <SearchInput onKeyDown={handleKeyPress} placeholder = 'Поиск...' onChange ={onChange}/>
            <SearchButton onClick={onButtonClick}/>
        </SearchContainer>
    )
}

export default SearchField;