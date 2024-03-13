import React from 'react';
import styled from 'styled-components';


const InfoRow = styled.div`
    display: table-row;
    line-height:24px;
`

const InfoField = styled.div`
    display: table-cell;
    color:var(--dark-text-color);
    vertical-align:middle;
    height: 38px;
    font-size:18px;
`;

const InfoValue = styled.div`
    display: table-cell;
    color:var(--pale-text-color);
    vertical-align: middle;
    font-size:16px;
    line-height:18px;
    padding-left: 40px;
`;

interface RowProps {
    field: string;
    val: string;
}

const RowComp: React.FC<RowProps> = ({field, val}) => {
    return (
        <InfoRow>
            <InfoField>{field}</InfoField>
            <InfoValue>{val}</InfoValue>
        </InfoRow>
    );
}

export default RowComp;