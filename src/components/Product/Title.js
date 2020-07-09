import React from 'react';
import styled from 'styled-components';
import { Row } from '../MainStyles/StyledComponents';

export const TitleDiv = styled.div`
    margin-left:auto!important;
    margin-right:auto!important;
    margin-bottom:.5rem!important;
    margin-top:.5rem!important;
    flex:0 0 83.33%;
    max-width:83.33%;
`;
export const StyledH1 = styled.h1`
font-weight: 700!important;
text-transform: capitalize!important
`;
export const Title = ({ name, title }) => {
    return (
        <Row>
            <TitleDiv className="text-title">
                <StyledH1>
                    {name} <strong className="text-blue">{title}</strong>
                </StyledH1>
            </TitleDiv>
        </Row>
    );
};
