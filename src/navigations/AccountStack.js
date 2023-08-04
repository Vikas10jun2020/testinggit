import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Profile from '../screens/AppScreens/Profile/Profile';

const Stack = createNativeStackNavigator();
const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Profile} name="Profile" />
    </Stack.Navigator>
  );
};

export default AccountStack;
