import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../constants/colors';
import {bell, menu, qr} from '../../constants/imagePath';
import TextInput from '../TextInput/TextInput';
import {styles} from './styles';
import {AuthContext} from '../../context/AuthContext';
const Header = ({searchBox}) => {
  const {userInfo} = useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
      <View style={styles.headerContainer}>
        <View style={styles.leftContainer}>
          <Pressable
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Image source={menu} style={styles.icon} />
          </Pressable>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            {searchBox && (
              <View style={{flex: 1}}>
                <TextInput
                  placeholder={'Hi ,' + userInfo.Name}
                  style={styles.searchBox}
                />
                <TouchableOpacity style={styles.searchIconContainer}>
                  <MaterialIcons
                    onPress={() => {
                      alert('searching.....');
                    }}
                    name="search"
                    size={25}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Image source={qr} style={styles.icon} />
          <Image source={bell} style={styles.icon} />
        </View>
      </View>
    </View>
  );
};

const HeaderBackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={{width: '100%', marginVertical: 10}}>
      <View
        style={{
          height: 50,
          width: 50,
          borderWidth: 0.5,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 20,
        }}>
        <MaterialIcons
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            backgroundColor: 'white',
          }}
          name="arrow-back"
          size={25}
        />
      </View>
    </View>
  );
};
export default Header;
export {HeaderBackButton};
