import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  NativeModules,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Button from 'vs-rn-button';
import {COLORS} from '../../../constants/colors';
import {OTP_PURPOSE, TestData} from '../../../constants/constants';
import {appLogo} from '../../../constants/imagePath';
import {navigationString} from '../../../constants/navigationStrings';
import {AuthContext} from '../../../context/AuthContext';
import {login} from '../../../services/user/user';
import {styles} from './styles';
import {setAsyncData} from '../../../utils/myUtility';
const {MyModule} = NativeModules;
const Login = ({navigation}) => {
  let userDetails = null;
  const {setIsLogin, setUserInfo, setIsLoading, updateHeader, userInfo} =
    useContext(AuthContext);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [userId, setUserId] = useState(TestData ? 'A2ZB1001' : null);
  const [password, setPassword] = useState(TestData ? '98855124' : null);

  const callBack = async otp => {
    //alert('INSIDE LOGIN  ' + otp);
    await setAsyncData('userInfo', userDetails);
    setIsLogin(true);
    setUserInfo(userDetails);
    //await updateHeader(userInfo?.auth);
    console.log('OTP---' + otp);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleLogin = async () => {
    Keyboard.dismiss();
    const object = {
      UserName: userId,
      Password: password,
    };

    setIsLoading(true);
    const data = await login(object);
    userDetails = data;
    if (data != null) {
      //console.log(JSON.stringify(userDetails.data));
      setIsLoading(false);
      await updateHeader(userDetails.auth);
      navigation.navigate(navigationString.OTP, {
        DATA: {
          purpose: OTP_PURPOSE.LOGIN,
          UserID: userDetails?.UserID,
        },
        callBack: callBack,
      });
    } else {
      setIsLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        <View style={styles.innerContainer}>
          <View style={{flex: 2, marginHorizontal: 20}}>
            <View
              style={{
                display: 'flex',
                borderRadius: 110 / 2,
                height: 110,
                width: 110,
                alignSelf: 'center',
                alignItems: 'center',
                elevation: 5,
                backgroundColor: 'white',
                justifyContent: 'center',
                marginTop: 50,
              }}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  alignSelf: 'center',
                  borderRadius: 50,
                }}
                source={appLogo}
              />
            </View>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                marginVertical: 10,
                textTransform: 'capitalize',
              }}>
              fintech solutions for growing world
            </Text>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 35,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
                User Login
              </Text>
            </View>

            <View>
              <TextInput
                mode="outlined"
                label="User ID"
                style={{marginBottom: 10}}
                value={userId}
                onChangeText={text => {
                  setUserId(text);
                }}
              />
              <TextInput
                label="Password"
                mode="outlined"
                value={password}
                onChangeText={text => {
                  setPassword(text);
                }}
                secureTextEntry={secureTextEntry}
                right={
                  <TextInput.Icon
                    onPress={() => {
                      setSecureTextEntry(!secureTextEntry);
                    }}
                    icon="eye"
                  />
                }
              />
            </View>
            <Text
              style={{
                textAlign: 'right',
                color: 'red',
                marginRight: 20,
                fontWeight: '600',
                fontSize: 12,
                marginBottom: 10,
              }}>
              Forgot Password?
            </Text>
            <Button
              color={COLORS.primary}
              title={'Login'}
              onPress={handleLogin}
            />
          </View>

          <Button
            title={'Open SDK'}
            onPress={() => {
              MyModule.callNativeModule('Viaks', 'Soni', eventId => {
                alert(eventId);
              });
            }}
          />
          <Text
            onPress={() => {
              navigation.navigate(navigationString.WEB_VIEW);
            }}
            style={{textAlign: 'center', marginBottom: 10}}>
            Powerd By : Techmahi Solutions
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
