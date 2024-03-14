import React from 'react';
import styled from 'styled-components';
import phoneIcon from '../../assets/phone.png';
import emailIcon from '../../assets/email.png';
import Employee from '../../types/employee';
interface CardProps {
    staffData:Employee,
    onClick?: () => void;
}

const CardContainer = styled.div`
    height:290px;
    width:333px;
    filter:drop-shadow(0px 0px 20px rgba(0,0,0,0.1));
    border-radius:16px;
    padding:24px;
    display:flex;
    flex-direction:column;
    justify-self: center;
`;

const NameField = styled.div`
    font-weight:700;
    margin-bottom:24px;
    color:var(--dark-text-color);
    vertical-align:text-top;
    font-size:24px;
    line-height:30px;
    border-style:hidden;
    width:211px;    
`;

const AddressContainer = styled.div`
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
    color:var(--pale-text-color);
    text-align:center;
    font-size:14px;
    line-height:24px;
    width:max-content;
    display:inline-block;
`;

const IconHolder = styled.div`
    display:flex;
    min-width:30px;
    min-height:30px;
    margin-right:12px;
`

const IconPhone = styled.img`
    margin:auto;
    max-height: 24px;
`

const IconEmail = styled.img`
    margin:auto;
    max-height: 14px;
`

const StaffCard: React.FC<CardProps> = ({ staffData, onClick }) => {
    const {name, phone, email} = staffData;
  return (
    <CardContainer onClick={onClick}>

        <NameField>{name}</NameField>

        <AddressContainer>
            
            <AdressField>
                <IconHolder>
                    <IconPhone src = {phoneIcon} alt = 'Phone Icon'/>
                </IconHolder>
                <AdressText>{phone}</AdressText>
            </AdressField>

            <AdressField>
                <IconHolder>
                    <IconEmail src = {emailIcon} alt = 'Email Icon'/>
                </IconHolder>
                <AdressText>{email}</AdressText>
            </AdressField>

        </AddressContainer>

    </CardContainer>
  );
};

export default StaffCard;