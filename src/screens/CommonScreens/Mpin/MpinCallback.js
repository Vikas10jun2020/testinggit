import React, {useContext, useEffect, useState} from 'react';
import {Image, KeyboardAvoidingView, View} from 'react-native';
import Pin from '../../../components/Pin/Pin';
import {Text} from '../../../components';
import {appLogo} from '../../../constants/imagePath';
import {COLORS} from '../../../constants/colors';
import {AuthContext} from '../../../context/AuthContext';
import {ASYNC, COMPANY_GROUP_ID} from '../../../constants/constants';
import {verifyMpin} from '../../../services/common/common';
import {navigationString} from '../../../constants/navigationStrings';
import {getAsyncValue} from '../../../utils/myUtility';
const MpinCallback = ({navigation, callBack = null}) => {
  const {userInfo, setIsLoading} = useContext(AuthContext);
  const [pin, setPin] = useState(null);

  const load = async () => {
    console.log(
      'HEADER in mpin' + JSON.stringify(await getAsyncValue(ASYNC.HEADERS)),
    );
  };
  useEffect(() => {
    load();
  }, []);
  const callBackHandler = async val => {
    console.log(
      'MPIN---->SCREEN' + JSON.stringify(await getAsyncValue(ASYNC.HEADERS)),
    );
    setIsLoading(true);
    const postObject = {
      UserID: userInfo.UserID,
      Mpin: val,
      CompanyGroupID: COMPANY_GROUP_ID,
    };

    if (await verifyMpin(postObject)) {
      if (callBack) {
        setIsLoading(false);
        //alert('Call Back exiest');
      } else {
        setIsLoading(false);
        navigation.replace(navigationString.DASHBOARD);
      }
    } else {
      setIsLoading(false);
    }
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 2,
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            height: 120,
            width: 120,
            borderRadius: 60,
            alignSelf: 'center',
            elevation: 10,
            backgroundColor: 'white',
          }}>
          <Image
            style={{
              height: 110,
              width: 110,
              borderRadius: 55,
              alignSelf: 'center',
            }}
            source={appLogo}
          />
        </View>

        <View style={{marginHorizontal: 10}}>
          <View style={{marginBottom: 50}}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.primary,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Enter Mpin
            </Text>
          </View>
          <Pin setPin={setPin} mpinCallBack={callBackHandler} />
        </View>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default MpinCallback;
