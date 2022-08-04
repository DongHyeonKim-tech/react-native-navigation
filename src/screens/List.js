import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

const items = [
    { _id: 1, name: 'React Native'},
    { _id: 2, name: 'React Navigation'},
    { _id: 3, name: 'YEYEYEYEYE'}
];

const List = ({ navigation }) => {
    const pressHandler = item => {
        navigation.navigate('Item', { id: item._id, name: item.name}) // 첫 parameter가 Stack.js의 Stack.Screen name과 일치해야
    };
    return (
        <Container>
            <StyledText>List</StyledText>
            {items.map((item) => (
                <Button
                    key={item._id}
                    title={item.name}
                    onPress={() => pressHandler(item)}
                />
                ))
            }
        </Container>
    )
}

export default List;
