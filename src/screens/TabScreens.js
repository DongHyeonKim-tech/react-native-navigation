import React from 'react';
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #54B7F9;
`;

const StyledText = styled.Text`
    font-size: 30px;
    color: #FFFFFF;
`;

export const Mail = () => {
    return (
        <Container>
            <StyledText>Mail~~~</StyledText>
        </Container>
    )
};

export const Meet = () => {
    return (
        <Container>
            <StyledText>Meet</StyledText>
        </Container>
    )
};

export const Settings = () => {
    return (
        <Container>
            <StyledText>Setting</StyledText>
        </Container>
    )
};
