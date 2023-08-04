import {View, Text, Image, FlatList, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {kyc} from '../../../constants/imagePath';
import {fetchProfileDetails} from '../../../services/callApi';
import {AuthContext} from '../../../context/AuthContext';
import {COLORS} from '../../../constants/colors';

const Kyc = () => {
  const [images, setImages] = useState([]);
  const {userInfo} = useContext(AuthContext);
  const getKycInfoHandler = async () => {
    const postObject = {
      UserID: userInfo.UserID,
    };

    const data = await fetchProfileDetails(postObject);
    setImages(data.Images);
  };
  useEffect(() => {
    getKycInfoHandler();
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          margin: 10,
          alignItems: 'center',
          borderRadius: 5,
          backgroundColor: 'white',
          elevation: 10,
          borderWidth: 0.5,
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', padding: 10}}>
          {item.DocType}
        </Text>
        <Image
          source={{uri: item.ImagePath}}
          style={{width: '90%', height: 200}}
        />
      </View>
    );
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
        <View
          style={{height: 120, width: 120, borderRadius: 60, elevation: 10}}>
          <Image source={kyc} style={{height: 120, width: 120}} />
        </View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginVertical: 15,
            color: COLORS.primary,
          }}>
          Your KYC Details
        </Text>
      </View>
      <View>
        {images.length != 0 &&
          images.map(item => {
            return (
              <View
                style={{
                  margin: 10,
                  alignItems: 'center',
                  borderRadius: 5,
                  backgroundColor: 'white',
                  elevation: 10,
                  borderWidth: 0.5,
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    padding: 10,
                    backgroundColor: '#dfdfdf',
                    width: '100%',
                    color: 'black',
                  }}>
                  {item.DocType}
                </Text>
                <Image
                  source={{uri: item.ImagePath}}
                  style={{width: '90%', height: 200}}
                />
              </View>
            );
          })}
      </View>
      <View style={{padding: 50}}></View>
    </ScrollView>
  );
};

export default Kyc;
