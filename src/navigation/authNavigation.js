import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import OnboardingScreen from '../screens/HomeScreen';
import RootClientTab from './ClientTab';
import SigninScreen from '../screens/SigninScreen';
import auth from '@react-native-firebase/auth';
import DetailScreen from '../screens/DetailScreen';
import ItemScreen from '../screens/ItemScreen';

const Auth = createNativeStackNavigator();

export default function AuthStack() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  return (
    <Auth.Navigator>
      {user ? (
        <Auth.Screen
          name="RootClientTab"
          component={RootClientTab}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Auth.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Auth.Screen
            name="Signin"
            component={SigninScreen}
            options={{headerShown: false}}
          />
          <Auth.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Auth.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />

        </>

      )}
      <Auth.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={{headerShown: false}}
          />
          <Auth.Screen
            name="Item"
            component={ItemScreen}
            options={{headerShown: false}}
          />
    </Auth.Navigator>
  );
}
