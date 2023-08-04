import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PersonalDetails from '../../screens/PersonalDetails/PersonalDetails';
import EditDetails from '../../screens/PersonalDetails/EditDetails';
const Stack = createNativeStackNavigator();
const PersonalDetailsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={PersonalDetails} name="personal_details" />
      <Stack.Screen component={EditDetails} name="edit_details" />
    </Stack.Navigator>
  );
};

export default PersonalDetailsStack;
