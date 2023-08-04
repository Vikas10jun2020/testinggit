import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Button from 'vs-rn-button';
const UploadImage = ({setImagePath = () => {}}) => {
  const imagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) return null;

      //setImageUri(response.assets[0].uri)
      setImagePath(response?.assets[0]?.uri);
      console.log('response', JSON.stringify(response));
    });
  };
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      onPress={() => {
        imagePicker();
      }}
      style={styles.circleStyle}>
      <Text style={styles.buttonStyleText}>UploadImage</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    height: 100,
    width: 100,
    backgroundColor: '#dfdfdf',
    borderWidth: 0.5,
    borderRadius: 50,
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: '#dfdfdf',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonStyleText: {
    fontWeight: 'bold',
  },
});
export default UploadImage;
