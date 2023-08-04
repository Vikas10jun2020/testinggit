import {Text, Pressable} from 'react-native';
import React from 'react';

const Button = ({style, color, onPress = () => {}, title, ...rest}) => {
  return (
    <Pressable
      onPress={onPress}
      {...rest}
      style={[
        {...style},
        {
          height: 50,
          backgroundColor: color ? color : '#dfdfdf',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          borderRadius: 10,
        },
      ]}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          color: color ? 'white' : null,
        }}>
        {title ? title : 'Button'}
      </Text>
    </Pressable>
  );
};

export default Button;
