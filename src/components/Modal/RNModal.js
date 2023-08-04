import {View, Text, Modal, Image} from 'react-native';
import React from 'react';
import {error as errorImg, success} from '../../constants/imagePath';

const RNModal = ({visible = false, error, dataObj}) => {
  return (
    <View>
      <Modal visible={visible} transparent>
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.95)',
            padding: 20,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <View
            style={{
              padding: 20,
              backgroundColor: 'white',
              elevation: 10,
              borderRadius: 10,
              width: '90%',
              alignItems: 'center',
            }}>
            <Image
              source={error ? errorImg : success}
              style={{height: 80, width: 80}}
            />

            <Text
              style={{
                color: error ? 'red' : 'green',
                fontWeight: 'bold',
                fontSize: 18,
                marginVertical: 10,
              }}>
              {dataObj?.heading ? dataObj?.heading : 'Payment Done.'}
            </Text>
            <Text style={{textAlign: 'center', fontWeight: '400'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RNModal;
