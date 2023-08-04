import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';

const Loader = ({title, visible = false}) => {
  const {colors: themeColor} = useTheme();
  //const [visible, setVisible] = useState(false);
  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, .95)',
        display: visible ? 'flex' : 'none',
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: '100%',
        zIndex: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 150,
          width: 250,
          backgroundColor: 'white',
          borderRadius: 10,
          elevation: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color={'grey'} size={40} />

        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            margin: 10,
            color: themeColor.text,
          }}>
          {title ? title : 'Loading....'}
        </Text>
      </View>
    </View>
  );
};

export default Loader;
