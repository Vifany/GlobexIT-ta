import React from 'react';
import styled from 'styled-components';
import crossIcon from '../../../assets/cross.png'

interface CloseButtonProps {
	onClick?: () => void;

}

const IconButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
`;

const Icon = styled.img`
	width: 20px;
	height: 20px; 
`;

const CloseButton: React.FC<CloseButtonProps> = ({onClick = () => console.log('Clicked')}) => {
    
    return (
        <IconButton>
            <Icon src={crossIcon} alt="Close" onClick = {onClick}/>
        </IconButton>
    );
};

export default CloseButton;