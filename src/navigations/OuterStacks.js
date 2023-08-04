import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AccountStack from './AccountStack';

const Stack = createNativeStackNavigator();
const OuterStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={AccountStack} name="account-stack" />
    </Stack.Navigator>
  );
};

export default OuterStacks;
