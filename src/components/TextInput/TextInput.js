import {View, TextInput as RNTextInput} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const TextInput = ({
  style,
  placeholder = 'Enter here...',
  keyboardType = 'default',
  value,
  setData,
  ...rest
}) => {
  const {colors: themeColor} = useTheme();
  const defaultStyle = {
    color: themeColor.text,
    paddingLeft: 15,
    borderWidth: 0.5,
    borderRadius: 8,
    margin: 5,
    fontWeight: 'bold',
    color: '#2c2c2c',
  };

  const onChangeText = text => {
    setData(text);
  };

  return (
    <RNTextInput
      placeholder={placeholder}
      placeholderTextColor={'gray'}
      {...rest}
      keyboardType={keyboardType}
      style={[{...style}, defaultStyle]}
      onChangeText={onChangeText}
    />
  );
};

export default TextInput;
