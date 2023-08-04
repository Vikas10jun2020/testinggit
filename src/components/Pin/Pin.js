import React, {useRef} from 'react';
import {Keyboard, View} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import {COLORS} from '../../constants/colors';

const Pin = ({numberOfInput = 6, setPin, mpinCallBack}) => {
  const handleTextChange = val => {
    if (val.length == numberOfInput) {
      Keyboard.dismiss();
      setPin(val);
      mpinCallBack ? mpinCallBack(val) : null;
    }
  };

  return (
    <View>
      <OTPTextView
        handleTextChange={handleTextChange}
        inputCount={numberOfInput}
        autoFocus
        tintColor={COLORS.primary}
      />
    </View>
  );
};

export default Pin;
