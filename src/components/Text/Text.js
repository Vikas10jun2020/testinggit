import {Text as RnText} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const Text = ({children, style, ...rest}) => {
  const {colors: themeColor} = useTheme();
  return (
    <RnText style={[{...style}, {color: themeColor.text}]} {...rest}>
      {children}
    </RnText>
  );
};

export default Text;

const Test=()=>{
  return <RnText style={{textTransform:'capitalize'}}/>
}
