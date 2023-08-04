import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import {getAsyncValue, setAsyncData} from '../utils/myUtility';
import {createApiHeader} from '../utils/utilMethods';
import {ASYNC} from '../constants/constants';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [apiHeaders, setApiHeader] = useState(null);
  const [loadingInitialData, setLoadingInitialData] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);
  const init = async () => {
    // console.log(
    //   'HEADER AVAILABLE........' +
    //     JSON.stringify(await getAsyncValue(ASYNC.HEADERS)),
    // );
    // await logout();
    // return;

    if (await getAsyncValue(ASYNC.HEADERS)) {
      const data = await getAsyncValue(ASYNC.HEADERS);
      console.log('HEADER AVAILABLE........' + JSON.stringify(data));
    }

    setIsLoading(false);
    console.log('initializing.........');
    setLoadingInitialData(true);
    if (await getAsyncValue('firstLaunch')) {
      console.log('if initializing.........');
      setIsFirstLaunch(false);
    } else {
      console.log('Not found');
    }

    if (await getAsyncValue('userInfo')) {
      setUserInfo(JSON.parse(await getAsyncValue('userInfo')));
      setIsLogin(true);
      setLoadingInitialData(false);
      setIsLoading(false);
    } else {
      setIsLogin(false);
      setLoadingInitialData(false);
      setIsLoading(false);
    }

    await getAllKeys();

    if (!(await getAsyncValue('HEADERS'))) {
      const headers = await createApiHeader();
      setApiHeader(headers);
      await setAsyncData('HEADERS', headers);
      //await userLogin();
    }

    if (await getAsyncValue('DEVICE_ID_OBJECT')) {
      const data = await getAsyncValue('DEVICE_ID_OBJECTY');
      console.log(JSON.stringify(data));
    } else {
      setAsyncData('DEVICE_ID_OBJECT', {name: 'VIIKAS'});
    }
  };

  const clearAll = async () => {
    //const keys = ['@MyApp_USER_1', '@MyApp_USER_2'];
    try {
      await AsyncStorage.removeItem('userInfo');
      setIsLogin(false);
      setUserInfo(null);
    } catch (e) {
      // clear error
    }

    console.log('Done.');
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await clearAll();
      setIsLoading(false);
    } catch (error) {
      console.log('Logout Error');
    }
    console.log('Logout done...');
  };

  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
    }

    console.log('All_Keys---->' + keys);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  };

  //------UPADTE HEADER WITH AUTH---------
  const updateHeader = async auth => {
    if (await getAsyncValue(ASYNC.HEADERS)) {
      const headerData = JSON.parse(await getAsyncValue(ASYNC.HEADERS));
      console.log('before updating....' + JSON.stringify(headerData));
      await setAsyncData(ASYNC.HEADERS, {...headerData, auth: auth});

      console.log('UPDATED-HEADER-VALUE', await getAsyncValue(ASYNC.HEADERS));
    }
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        apiHeaders,
        setUserInfo,
        userInfo,
        loading,
        setIsLoading,
        logout,
        loadingInitialData,
        isFirstLaunch,
        setIsFirstLaunch,
        updateHeader,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
