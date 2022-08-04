import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import List from '../screens/List';
import Item from '../screens/Item';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from "react-native";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                cardStyle: { backgroundColor: '#FFFFFF' },
                headerStyle: {
                    height: 110,
                    backgroundColor: '#95A5A6',
                    borderBottomWidth: 5,
                    borderBottomColor: '#34495E',
                },
                headerTitleStyle: {
                    color: '#FFFFFF',
                    fontSize: 24,
                },
                headerTitleAlign: 'center',
                headerTitle: ({ style }) => (  // headerTitleStyle에 지정한 스타일과 동일한 스타일 적용
                    <MaterialCommunityIcons name={'react'} style={style} />
                ),
                headerBackImage: ({ tintColor }) => {
                    const style = {
                        marginRight: 5,
                        marginLeft: Platform.OS === 'ios' ? 11 : 0,
                    };
                    return (
                        <MaterialCommunityIcons
                            name={'keyboard-backspace'}
                            size={30}
                            color={tintColor}
                            style={style}
                        />
                    )
                }
            }}
        >
            <Stack.Screen
                name={"Home"}
                component={Home}
                // options={{ headerShown: false }}
            />
            <Stack.Screen
                name={"List"}
                component={List}
                options={{
                    headerTitle: 'List Screen',
                    headerBackTitleVisible: true,
                    // headerBackTitle: 'prev',
                    headerTitleStyle: { fontSize: 24 },
                    headerTintColor: '#E74C3C'
                }}
            />
            <Stack.Screen
                name={"Item"}
                component={Item}
                options={{
                    headerBackTitleVisible: true
                }}
            />
        </Stack.Navigator>
    )
};

export default StackNavigation;
