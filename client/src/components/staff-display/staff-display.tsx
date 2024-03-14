import React from 'react';
import styled from 'styled-components';
import CloseButton from '../elements/close-button/close-button';
import RowComp from '../elements/row-comp/row-comp';
import Employee  from '../../types/employee';

const InfoTable = styled.div`
    display:table;
`;

const PopupContainer = styled.div`
    width:500px;
    filter:drop-shadow(0px 0px 20px rgba(0,0,0,0.1));
    border-radius:16px;
    padding:24px;
    display:flex;
    flex-direction:column;
    gap:40px;
    z-index:2000;
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
    color:var(--dark-text-color);
    font-size:24px;
    font-weight:bold;
    `;

const AddsContainer = styled.div`
    gap: 12px;
    display:flex;
    flex-direction:column;
    `;

const AddsField = styled.div`
    color:var(--pale-text-color);
    vertical-align:text-top;
    font-size:16px;
    `;

const AddsName = styled.div`
    color:var(--dark-text-color);
    vertical-align:text-top;
    font-size:18px;
    
`;

interface PopupProps {
    data: Employee;
    onButtonClick?: () => void;
}

const StaffDisplay: React.FC<PopupProps> = ({
    data: {
        name, 
        phone, 
        email, 
        address, 
        position_name, 
        department, 
        hire_date},
        onButtonClick
}) => {
    const tableData = [
        {val: phone,
        field: 'Телефон'}, 
        {val: email,
        field: 'Почта'}, 
        {val: position_name,
        field: 'Должность'}, 
        {val: hire_date,
        field: 'Дата приема'},
        {val: department,
        field: 'Подразеделение'}
    ]

    return (
        <PopupContainer>

            <HeaderContainer>
                <NameField>
                {name}
                </NameField>
                <CloseButton onClick ={onButtonClick}/>
            </HeaderContainer>

            <InfoTable>
                {tableData.map((item, index) => {
                    return (
                        <RowComp key={index} field = {item.field} val = {item.val}/>
                    );
                })}
            </InfoTable>

            <AddsContainer>
                <AddsName>Дополнительная информация:</AddsName>
                <AddsField>{address} </AddsField>
            </AddsContainer>

        </PopupContainer>
    );
    };

export default StaffDisplay;