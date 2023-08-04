import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {LogBox, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';
import {AuthProvider} from './src/context/AuthContext';
import Routes from './src/navigations/Routes';
import {Text, TextInput} from './src/components';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'ViewPropTypes will be removed from React Native',
]);
export const showToast = (msg, type = 'success') => {
  Toast.show({
    type: type,
    text1: msg,
  });
};
const App = () => {
  const [email, setEmail] = useState('');
  useEffect(() => {
    SplashScreen.hide();
    //hmacCreate();
    // showToast();,
  }, []);

  //************************************************ */

  //----NO_INTERNET_SCREEN
  //----TOAST-NOTIFICATION
  //----

  //************************************************ */
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Toast />
    </NavigationContainer>
  );

  // return (
  //   <View>
  //     <Text>Vikas</Text>
  //     <TextInput setData={setEmail} placeholder="Enter ...." />
  //   </View>
  // );
};

export default App;
