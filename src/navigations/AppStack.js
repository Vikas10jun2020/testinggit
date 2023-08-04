import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationString} from '../constants/navigationStrings';
import Dashboard, {TopStacks} from '../screens/AppScreens/Dashboard/Dashboard';
import MpinScreen from '../screens/CommonScreens/Mpin/MpinCallback';
import PersonalDetailsStack from './stacks/PersonalDetailsStack';
import Kyc from '../screens/AppScreens/Kyc/Kyc';
import TestingScreen from '../screens/CommonScreens/TestingScreen/TestingScreen';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={navigationString.MPIN} component={MpinScreen} />
      <Stack.Screen name={navigationString.DASHBOARD} component={Dashboard} />

      {/* ALL TOP STACKS */}
      <Stack.Screen
        name={navigationString.PERSONAL_DETAILS_STACK}
        component={PersonalDetailsStack}
      />
      <Stack.Screen name={navigationString.KYC} component={Kyc} />
      <Stack.Screen name={navigationString.TEST} component={TestingScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
