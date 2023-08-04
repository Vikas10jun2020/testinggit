import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationString} from '../constants/navigationStrings';
import {Login} from '../screens';
import OtpScreen from '../screens/CommonScreens/OtpScreen/OtpScreen';
import RNWebView from '../screens/CommonScreens/WebView/RNWebView';
import OnBoardScreen from '../screens/OnboardScreens/OnBoardScreen';

const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationString.LOGIN} component={Login} />
      <Stack.Screen name={navigationString.OTP} component={OtpScreen} />
      <Stack.Screen name={navigationString.WEB_VIEW} component={RNWebView} />
    </Stack.Navigator>
  );
};
