import React from "react";
import styled from "styled-components";
import searchIcon from "../../../assets/search-icon.png";

interface SearchButtonProps {
    onClick: () => void;
}

const SearchButtonContainer = styled.div`
    height:48px;
    min-width:48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    cursor: pointer;
`;

const SearchIcon = styled.img`
    max-width: 19.61px;
    max-height: 19.61px;
`;

const SearchButton: React.FC<SearchButtonProps> = ({onClick}) => {
    return (
        <SearchButtonContainer onClick = {onClick}>
            <SearchIcon src = {searchIcon} alt = 'Search Icon'/>
        </SearchButtonContainer>
    )
}

export default SearchButton;