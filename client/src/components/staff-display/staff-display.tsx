import React from 'react';
import styled from 'styled-components';
import CloseButton from '../elements/close-button/close-button';

interface PopupProps {
    name: string;
    phone: string;
    email: string;
    address: string;
    positionName: string;
    department: string;
    hireDate: string;
}




const PopupContainer = styled.div`
    width:500px;
    filter:drop-shadow(0px 0px 20px rgba(0,0,0,0.1));
    border-radius:16px;
    padding:24px;
    display:flex;
    flex-direction:column;
    gap:40px;
`;
const HeaderContainer = styled.div`
    height:30px;
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;


const NameField = styled.div`
    color:#262c40;
    text-align:left;
    font-size:24px;
    line-height:30px;
    width:392px;
    font-weight:900;
    `;

const InfoTable = styled.div`
    height:188px;
    width:452px;
    padding:0px;
    display:table;
    
`;

const AddsContainer = styled.div`
    gap: 12px;
    display:flex;
    flex-direction:column;
`;

const AddsField = styled.div`
    color:#8189a2;
    vertical-align:text-top;
    font-size:16px;

`;

const AddsName = styled.div`
    color:#262c40;
    vertical-align:text-top;
    font-size:18px;

`;

const InfoRow = styled.div`
    display: table-row;
    line-height:24px;
`

const InfoField = styled.div`
    display: table-cell;
    color:#262c40;
    vertical-align:text-top;
    font-size:18px;

`;

const InfoValue = styled.div`
    display: table-cell;
    color:#8189a2;
    vertical-align:text-top;
    font-size:16px;
    padding-left: 40px;
`;

const StaffDisplay: React.FC<PopupProps> = ({
    name,
    phone,
    email,
    address,
    positionName,
    department,
    hireDate,
}) => {
  return (
    <PopupContainer>
        <HeaderContainer>
            <NameField>
            {name}
            </NameField>
            <CloseButton/>
        </HeaderContainer>

        <InfoTable>
            <InfoRow><InfoField>Телефон:</InfoField> <InfoValue>{phone}</InfoValue></InfoRow>
            <InfoRow><InfoField>Почта: </InfoField> <InfoValue>{email}</InfoValue></InfoRow>
            <InfoRow><InfoField>Должность: </InfoField> <InfoValue>{positionName}</InfoValue></InfoRow>
            <InfoRow><InfoField>Подразеделение: </InfoField> <InfoValue>{department}</InfoValue></InfoRow>
            <InfoRow><InfoField>Дата приёма: </InfoField> <InfoValue>{hireDate}</InfoValue></InfoRow>
        </InfoTable>
        <AddsContainer>
        <AddsName>Дополнительная информация:</AddsName>
        <AddsField>{address} </AddsField>
        </AddsContainer>
    </PopupContainer>
  );
};

export default StaffDisplay;