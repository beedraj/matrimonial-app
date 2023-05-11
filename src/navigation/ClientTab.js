import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base';

import FirstScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import ChatScreen from '../screens/ChatScreen';



const ClientTab =createBottomTabNavigator();

export  default function RootClientTab(){
    return(
        <ClientTab.Navigator
           screenOptions ={{
                activeTintColor :'red'
            }}
        >
            <ClientTab.Screen 
                name="First"
                component={FirstScreen}
                options={{
                    headerShown:false,
                    tabBarLabel: "Home",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="home"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            />
             {/* <ClientTab.Screen 
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    headerShown:false,
                    tabBarLabel: "Serach",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="search"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            /> */}
             {/* <ClientTab.Screen 
                name="ChatScreen"
                component={ChatScreen}
                options={{
                    headerShown:false,
                    tabBarLabel: "Chat",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="message"
                            type="material"
                            color={color}
                            size={size}
                        />
                    )
                }}
            /> */}
            <ClientTab.Screen 
                name="AccountScreen"
                component={AccountScreen}
                options={{
                    headerShown:false,
                    tabBarLabel: "Person",
                    tabBarIcon:({color,size})=>(
                        <Icon
                            name="person"
                            type="material"
                            color={color}
                            size={size}
                        />
                        
                    )
                }}
            />
            
           
        </ClientTab.Navigator>
    )
}