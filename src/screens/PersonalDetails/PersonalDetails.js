import React, {useContext, useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import {COMPANY_GROUP_ID} from '../../constants/constants';
import {AuthContext} from '../../context/AuthContext';
import {fetchProfileDetails} from '../../services/callApi';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../constants/colors';
import Dropdown from '../../components/Dropdown/Dropdown';
import {TextInput} from '../../components';
//--------
const PersonalDetails = () => {
  const {userInfo} = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [data, setData] = useState('');
  const SIZE = 100;

  const fetchProfileDataHandler = async () => {
    const postObject = {
      UserID: userInfo.UserID,
      CompanyGroupID: COMPANY_GROUP_ID,
    };

    const data = await fetchProfileDetails(postObject);
    setProfile(data);
  };
  useEffect(() => {
    fetchProfileDataHandler();
  }, []);
  return (
    <ScrollView>
      <View>
        <View
          style={{
            height: 600,
            width: 600,
            backgroundColor: COLORS.primary,
            borderRadius: 300,
            alignSelf: 'center',
            position: 'absolute',
            marginTop: -460,
          }}></View>
        <View
          style={{
            height: 120,
            width: 120,
            backgroundColor: 'red',
            alignSelf: 'center',
            borderRadius: 60,
            marginTop: 60,
            elevation: 10,
          }}>
          {profile && (
            <Image
              source={{uri: profile?.ProfileImage}}
              style={{height: 120, width: 120, borderRadius: 60}}
            />
          )}
        </View>
      </View>
      <View style={{padding: 10}}></View>
      <List name={profile?.Name} icon="person" />
      <List name={profile?.Mobile} icon="call" />
      <List name={profile?.CompanyName} icon="business-outline" />
      <List name={profile?.Email} icon="mail-outline" />

      {/* EDIT BIUTTON */}

      {/* <Text
        style={{
          backgroundColor: COLORS.primary,
          alignSelf: 'center',
          color: 'white',
          paddingVertical: 10,
          paddingHorizontal: 25,
          borderRadius: 5,
          fontWeight: '500',
          fontSize: 16,
          marginTop: 25,
        }}>
        Edit Profile
      </Text> */}
      <Text>{data}</Text>
      <TextInput />
    </ScrollView>
  );
};

const List = ({name = 'XYZ', icon = 'person'}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        margin: 5,
        borderBottomWidth: 0.5,
        borderColor: 'gray',
        paddingBottom: 15,
      }}>
      <View style={{flex: 1}}>
        <Ionicons name={icon} size={24} color={COLORS.primary} />
      </View>
      <View style={{flex: 4, alignItems: 'flex-start'}}>
        <Text style={{color: 'gray'}}>{name}</Text>
      </View>
    </View>
  );
};
export default PersonalDetails;
