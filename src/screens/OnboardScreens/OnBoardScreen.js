import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {COLORS} from '../../constants/colors';
import {AuthContext} from '../../context/AuthContext';
import {ONBOARD} from '../../data/onBoard';
import {setAsyncData} from '../../utils/myUtility';

const renderItem = ({item}) => {
  return (
    <View style={styles.slide}>
      <Text style={styles.text}>{item.title}</Text>
      <Image style={{height: 350, width: 350}} source={item.image} />
      <Text
        style={[
          {...styles.text},
          {
            fontSize: 20,
            width: 300,
            color: 'gray',
            textAlign: 'center',
            fontWeight: '400',
          },
        ]}>
        {item.text}
      </Text>
    </View>
  );
};

const renderNextButton = () => {
  return (
    <View style={styles.nextBtn}>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
    </View>
  );
};

const renderPrevButton = () => {
  return (
    <View style={styles.prevBtn}>
      <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
    </View>
  );
};

const OnBoardScreen = () => {
  const {setIsFirstLaunch} = useContext(AuthContext);
  const onDone = async () => {
    await setAsyncData('firstLaunch', 'true');
    setIsFirstLaunch(false);
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={onDone} style={styles.btnDone}>
        <MaterialIcons name="done" size={24} color="white" />
      </TouchableOpacity>
    );
  };

  const renderSkipButton = () => {
    return (
      <TouchableOpacity onPress={onDone} style={styles.skipBtn}>
        <Text style={{color: 'black'}}>Skip</Text>
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      activeDotStyle={{backgroundColor: 'rgba(0, 0, 0, .9)'}}
      renderItem={renderItem}
      data={ONBOARD}
      showPrevButton
      renderDoneButton={renderDoneButton}
      renderNextButton={renderNextButton}
      renderPrevButton={renderPrevButton}
      showSkipButton={true}
      renderSkipButton={renderSkipButton}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: COLORS.primary,
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 50,
  },
  buttonText: {
    position: 'absolute',
    backgroundColor: '#dfdfdf',
    top: -200,
    right: 20,
    padding: 10,
    borderRadius: 5,
  },
  skipBtn: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 30,
    left: 10,
    borderWidth: 0.5,
  },
  btnDone: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 30,
    right: 10,
  },
  nextBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 30,
    right: 10,
  },
  prevBtn: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 30,
    left: 10,
  },
});
export default OnBoardScreen;
