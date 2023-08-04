import React, {useContext, useEffect} from 'react';
import Loader from '../components/Loader/Loader';
import {AuthContext} from '../context/AuthContext';
import OnBoardScreen from '../screens/OnboardScreens/OnBoardScreen';
import AppStack from './AppStack';
import {AuthStack} from './AuthStack';

const Routes = () => {
  const {isLogin, userInfo, loadingInitialData, loading, isFirstLaunch} =
    useContext(AuthContext);
  useEffect(() => {
    console.log(JSON.stringify(isFirstLaunch));
  }, []);
  if (isFirstLaunch) {
    return <OnBoardScreen />;
  } else {
    return !loadingInitialData ? (
      <>
        {userInfo && isLogin ? (
          <>
            <AppStack />
            <Loader visible={loading} />
          </>
        ) : (
          <>
            <AuthStack />
            <Loader visible={loading} />
          </>
        )}
      </>
    ) : null;
  }
};

export default Routes;
