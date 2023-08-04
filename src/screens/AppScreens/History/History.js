import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import Button from 'vs-rn-button';
import {COLORS} from '../../../constants/colors';
import {AuthContext} from '../../../context/AuthContext';

const History = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25}}>History</Text>
    </View>
  );
};

export default History;
