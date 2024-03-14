import React from 'react';
import styled from 'styled-components';
import SearchField from '../components/search-field/search-field';
import StaffDisplay from '../components/staff-display/staff-display';
import StaffCard from '../components/staff-card/staff-card';
import Employee from '../types/employee';
import useDisplayStore from '../utils/displayStore';
import useEmployeeStore from '../utils/employeeStore';
import useSearchStore from '../utils/searchStore';
import { useEffect } from 'react';

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(188, 195, 208, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BackdropDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: transparent;
`;

const FoundationDiv = styled.div`
    padding-top: 64px;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100%;
    width:100%;
`;

const StickyDiv = styled.div`
    position:sticky;
    top:24px;
    z-index:500;
    background: transparent;
    width:100%;
`;

const StaffPageContainer = styled.div`
    display:flex;
    width: 87.5vw;
    flex-direction:column;
    align-content:center;
    background: transparent;
`;

const CardGrid = styled.div`
    margin-top: 32px;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(357px, 1fr));
    gap: 24px;
    width: 100%;
`;


const StaffPage: React.FC = () => {
    const {employee, isPopupOpen, openPopup, closePopup} = useDisplayStore();
    const {search, setSearch} = useSearchStore();
    const {employees, loading, error, fetchEmployees} = useEmployeeStore();

    useEffect(() => {
        fetchEmployees(search)
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    const handleSearchButtonClick = () => {
        fetchEmployees(search);
        setSearch(null);
    };
    const handleBackdropClick = () => {
        closePopup();
    };
    const handleCardClick = (employee: Employee) => {
        openPopup(employee);
    };

    return (
    <FoundationDiv>
        <StaffPageContainer>
            {isPopupOpen && employee && (

            <Backdrop >
                <BackdropDiv onClick = {handleBackdropClick} />
                <StaffDisplay data = {employee} onButtonClick = {handleBackdropClick} />
            </Backdrop>
            )}
            <StickyDiv>
                <SearchField onChange = {handleSearchChange} onButtonClick = {handleSearchButtonClick}/>
            </StickyDiv>
            <CardGrid>
                {employees.map((staff, index) => {
                    return <StaffCard key = {index} staffData = {staff} onClick = {() => handleCardClick(staff)} />
                })}
            </CardGrid>
        </StaffPageContainer>
    </FoundationDiv>
    )
}


export default StaffPage;