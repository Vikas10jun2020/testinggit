import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  LogBox,
  NativeModules,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {Button, Text} from '../../../components';
import Header from '../../../components/Header/Header';
import Slider from '../../../components/Slider/Slider';
import {COLORS} from '../../../constants/colors';
import {AuthContext} from '../../../context/AuthContext';
import {getMenyList, getMenyType} from '../../../services/home/dashboard';
import {styles} from './styles';
const {MyModule} = NativeModules;
import {navigationString} from '../../../constants/navigationStrings';
const Home = ({navigation}) => {
  let finaldata = [];
  const {userInfo} = useContext(AuthContext);
  const [menuType, setMenuType] = useState(null);

  //-------GET MENU TYPES----------
  const getMenuTypeHandler = async () => {
    const data = await getMenyType({UserId: userInfo.UserID});
    setMenuType(data);
    console.log('DATA--->', JSON.stringify(data));
    finaldata = data;
  };

  //------FINAL MENU LIST-----------
  const updateMenuList = async (id, data) => {
    const newdata = finaldata.map(type => {
      if (type.HeaderID === id) {
        return {...type, menu: data.menus};
      }
      return type;
    });

    finaldata = newdata;
    console.log(JSON.stringify(finaldata));
  };

  //------GET MENU BY ID-----------
  const getMenuListHandler = async id => {
    const data = await getMenyList({UserId: userInfo.UserID, HeaderID: id});
    await updateMenuList(id, data);
    setMenuType(finaldata);
  };

  useEffect(() => {
    if (menuType) {
      finaldata = menuType;
      finaldata.map(i => {
        getMenuListHandler(i.HeaderID);
      });
    }
  }, [menuType != null]);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    getMenuTypeHandler();
  }, []);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    });
  };
  const renderItem = ({item, index}) => {
    //console.log(item.ServiceName + '----->' + JSON.stringify(item?.Icon));
    return (
      <View key={index} style={[{...styles.iconContainer}]}>
        <Image style={styles.imageIcon} source={{uri: item?.Icon}} />
        <Text style={styles.iconLabel}>{item?.ServiceName}</Text>
      </View>
    );
  };
  const renderItem2 = ({item, index}) => {
    return (
      <View key={index} style={styles.iconContainer}>
        <Image style={styles.imageIcon} source={item.icon} />
        <Text style={styles.iconLabel}>{item.name}</Text>
      </View>
    );
  };

  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{flex: 1, backgroundColor: '#fff'}}>
      <View>
        <StatusBar
          backgroundColor={COLORS.primary}
          barStyle={'light-content'}
        />
        <Header searchBox />
      </View>
      <Slider />

      {menuType &&
        menuType.map((i, index) => {
          return (
            <View key={index}>
              <Text
                key={index}
                style={{
                  margin: 2,
                  fontSize: 16,
                  padding: 5,
                  marginLeft: 10,
                  fontWeight: 'bold',
                }}>
                {i.HeaderName}
              </Text>
              <View style={{padding: 10}}>
                <FlatList
                  numColumns={4}
                  horizontal={false}
                  data={i?.menu}
                  renderItem={renderItem}
                />
              </View>
            </View>
          );
        })}
      <Button
        title={'Open SDK'}
        onPress={() => {
          MyModule.callNativeModule('Viaks', 'Soni', eventId => {
            alert(eventId);
          });
        }}
      />
      <View style={{height: 100}}></View>
    </ScrollView>
  );
};

export default Home;
