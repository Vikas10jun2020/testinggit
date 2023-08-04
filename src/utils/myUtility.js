import AsyncStorage from '@react-native-async-storage/async-storage';

export class UTILITY {
  static data = async myKey => {
    console.log('inside utrility class' + myKey);
  };
}

//const initializeData = () => {};
export const setAsyncData = async (key, data) => {
  if (typeof data == 'object' || typeof data == 'number') {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log(
        'Error while AsyncStorage[ OBJECT,NUMBER ] value ',
        JSON.stringify(e),
      );
    }
  } else {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (e) {
      console.log(
        'Error while AsyncStorage [ STRING ] value',
        JSON.stringify(e),
      );
    }
  }
};

export const getAsyncValue = async key => {
  //console.log(key);
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};
