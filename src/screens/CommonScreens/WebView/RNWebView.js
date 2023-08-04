import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';
import {COLORS} from '../../../constants/colors';

const RNWebView = ({url = 'http://techmahi.in/'}) => {
  const Spinner = () => (
    <View style={styles.activityContainer}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <WebView
        startInLoadingState={true}
        style={styles.container}
        source={{uri: url}}
        renderLoading={Spinner}
        scalesPageToFit
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
});
export default RNWebView;
