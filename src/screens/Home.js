import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
    align-items: center;
    background-color: #FFFFFF;
    flex: 1;
`;

// const Container = styled.SafeAreaView`
//   background-color: #FFFFFF;
//   align-items: center;
// `

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

// 첫 화면
const Home = ({navigation}) => {
    return (
        <Container>
            <StyledText>Home!!!</StyledText>
            <Button
                title={"go to the list screen"}
                onPress={() => navigation.navigate('List')}
            />
        </Container>
    )
};

export default Home;
