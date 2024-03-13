import React from 'react';
import styled from 'styled-components';
import phoneIcon from '../../assets/phone.png';
import emailIcon from '../../assets/email.png';

interface CardProps {
  name: string;
  phone: string;
  email: string;
}

const CardContainer = styled.div`
    background-color:#ffffff;
    height:290px;
    width:333px;
    filter:drop-shadow(0px 0px 20px rgba(0,0,0,0.1));
    border-radius:16px;
    padding:24px;
    display:flex;
    flex-direction:column;
`;

const NameField = styled.div`
    font-weight:700;
    margin-bottom:24px;
    color:#262c40;
    vertical-align:text-top;
    font-size:24px;
    line-height:30px;
    border-style:hidden;
    width:211px;    
`;

const AddressContainer = styled.div`
    background-color:#ffffff;
    height:60px;
    width:162px;
    padding:0px;
    display:flex;
    flex-direction:column;
    gap:12px;;
`

const AdressField = styled.div`
    display:flex;
    justify-content: left;
    align-content: center;
`;

const AdressText = styled.div`
    color:#8189a2;
    text-align:center;
    vertical-align: middle;
    font-size:14px;
    line-height:24px;
    border-style:hidden;
    outline:none;
    width:max-content;
    display:inline-block;
    margin-left:12px;
`;

const IconHolder = styled.div`
    display:flex;
    align-content: center;
    justify-content: center;    
    width:24px;
    height:24px;
    border-style:hidden;
    outline:none;
`

const IconPhone = styled.img`
    margin:auto;
    max-height: 24px;
`

const IconEmail = styled.img`
    margin:auto;
    max-height: 14px;
`

const StaffCard: React.FC<CardProps> = ({ name, phone, email }) => {
  return (
    <CardContainer>
        <NameField>{name}</NameField>
        <AddressContainer>
            <AdressField>
                <IconHolder><IconPhone src = {phoneIcon} alt = 'Phone Icon'/></IconHolder>
                <AdressText>{phone}</AdressText>
            </AdressField>
            <AdressField>
            <IconHolder><IconEmail src = {emailIcon} alt = 'Email Icon'/></IconHolder>
                <AdressText>{email}</AdressText>
            </AdressField>
        </AddressContainer>
    </CardContainer>
  );
};

export default StaffCard;