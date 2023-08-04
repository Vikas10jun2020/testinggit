import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../../constants/colors';
import {bg} from '../../../constants/imagePath';
import {AuthContext} from '../../../context/AuthContext';
import {styles} from './styles';
import {navigationString} from '../../../constants/navigationStrings';

const Profile = ({navigation}) => {
  const {userInfo, logout} = useContext(AuthContext);
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.upperContainer}>
          <ImageBackground source={bg} style={styles.image}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View
                style={{flex: 1, justifyContent: 'center', paddingLeft: 20}}>
                <View style={{flex: 1}}>
                  <Text style={styles.text1}>{userInfo?.Name}</Text>
                  <Text style={styles.text2}>Code - {userInfo?.Code}</Text>
                </View>
              </View>
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{uri: userInfo?.ProfilePicture}}
                    style={styles.profileImage}
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={{width: '100%'}}>
          <ListView
            name="Personal Info"
            onPress={() => {
              navigation.navigate(navigationString.PERSONAL_DETAILS_STACK);
            }}
          />

          <ListView
            name="KYC Details"
            onPress={() => {
              navigation.navigate(navigationString.KYC);
            }}
          />
          <ListView name="Contact Details" />
          <ListView name="Chnage Mpin" />
          <ListView name="Check Balance" />

          <TouchableOpacity
            onPress={logout}
            style={{
              height: 50,
              width: '50%',

              borderRadius: 5,
              margin: 10,
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              backgroundColor: 'white',
              elevation: 5,
            }}>
            <MaterialIcons size={24} name="logout" color={COLORS.primary} />
            <Text> </Text>
            <Text style={{fontWeight: 'bold'}}>Logout</Text>
          </TouchableOpacity>
          <View style={{padding: 45}}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const ListView = ({name = `List `, onPress}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        padding: 15,
        borderWidth: 0,
        borderColor: '#dfdfdf',
        marginVertical: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontWeight: 'bold'}}>{name}</Text>
        <MaterialIcons name="navigate-next" size={24} />
      </View>
    </TouchableOpacity>
  );
};
export default Profile;
