import {View, TextInput, Text} from 'react-native';
import React from 'react';

const TextInputHandler = ({placeholder, label, style, ...rest}) => {
  const BASIC = {
    backgroundColor: 'red',
  };
  return (
    <View style={{marginBottom: 8, marginHorizontal: 5}}>
      {label ? (
        <Text
          style={[
            {
              fontSize: 12,
              paddingHorizontal: 5,
              position: 'relative',
              top: 8,
              zIndex: 100,
              backgroundColor: 'white',
              alignSelf: 'flex-start',
              marginLeft: 10,
              fontWeight: '500',
              color: 'gray',
            },
          ]}>
          {label}
        </Text>
      ) : null}
      <View style={{}}>
        <TextInput
          placeholder={placeholder ? placeholder : 'Enter here'}
          style={[
            {...style},
            {borderRadius: 50, paddingLeft: 25, backgroundColor: '#dfdfdf'},
          ]}
          {...rest}
        />
      </View>
    </View>
  );
};

export default TextInputHandler;
