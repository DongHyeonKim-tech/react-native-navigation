import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Meet, Settings } from '../screens/TabScreens';
import Home from '../screens/Home';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, size, color }) => {
    return <MaterialCommunityIcons name={name} size={size} color={color}/>
};

const TabNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName={'Settings'}
            // options 하나로 관리
            // screenOptions={({ route }) => ({
            //     tabBarIcon: props => {
            //         let name = '';
            //         route.name === 'Mail' ? name = 'email' : route.name === 'Meet' ? name = 'video' : name = 'settings';
            //         return TabIcon({ ...props, name });
            //     }
            // })}

            tabBarOptions={{
                labelPosition: 'beside-icon',
                showLabel: false,
                style: {
                    backgroundColor: '#54B7F9',
                    borderTopColor: '#FFFFFF',
                    borderTopWidth: 2,
                },
                tabBarActiveTintColor: '#FFFFFF',
                tabBarInactiveTintColor: '#CFCFCF',
            }}

        >
            <Tab.Screen
                name={'Mail'}
                component={Mail}
                // options 각각 관리
                options={{
                    tabBarIcon: props => TabIcon({
                        ...props,
                        name: props.focused ? 'email' : 'email-outline',
                    })
                }}
            />
            <Tab.Screen
                name={'Meet'}
                component={Meet}
                options={{
                    tabBarIcon: props => TabIcon({
                        ...props,
                        name: props.focused ? 'video' : 'video-outline',
                    })
                }}
            />
            <Tab.Screen
                name={'Settings'}
                component={Settings}
                options={{
                    tabBarIcon: props => TabIcon({
                        ...props,
                        name: props.focused ? 'cog' : 'cog-outline',
                    })
                }}
            />
        </Tab.Navigator>
    )
};


export default TabNavigation;
