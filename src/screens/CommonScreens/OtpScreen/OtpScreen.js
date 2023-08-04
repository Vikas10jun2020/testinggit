import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../../components';
import RNModal from '../../../components/Modal/RNModal';
import Pin from '../../../components/Pin/Pin';
import {COLORS} from '../../../constants/colors';
import {resendOtp, sendOtp, verifyOtp} from '../../../services/common/common';
import {styles} from './styles';
import {AuthContext} from '../../../context/AuthContext';
export default function OtpScreen({route}) {
  const {purpose, UserID} = route?.params?.DATA;
  const [pin, setPin] = useState('');

  const callBackHandler = async () => {
    await route?.params?.callBack(pin);
  };

  const sendOtpHandler = async () => {
    await sendOtp({UserID: UserID, Purpose: purpose});
  };

  const resendOtpHandler = async () => {
    await resendOtp({UserID: UserID, Purpose: purpose});
  };
  useEffect(() => {
    sendOtpHandler();
  }, []);

  const verifyOTPHandler = async () => {
    const isVerify = await verifyOtp({
      UserID: UserID,
      Purpose: purpose,
      OTP: pin,
    });
    if (isVerify) {
      await callBackHandler();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <RNModal />
        <View
          style={{
            alignSelf: 'flex-start',
            marginLeft: 20,
            paddingRight: 20,
          }}>
          <Text style={styles.title}>Verify it's you</Text>
          <Text style={{fontSize: 15, marginTop: 10}}>
            OTP sent on your registered mobile number
          </Text>
        </View>
      </View>

      <View style={{marginHorizontal: 20}}>
        <Pin setPin={setPin} />
      </View>

      <Text
        onPress={resendOtpHandler}
        style={{
          color: COLORS.primary,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 20,
          marginBottom: 20,
        }}>
        Resend Code
      </Text>
      <Button
        title={'Confirm'}
        color={COLORS.primary}
        onPress={verifyOTPHandler}
      />

      <View style={styles.keyboardContainer}></View>
    </View>
  );
}
