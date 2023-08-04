import axios from 'axios';
import {BASE_URL, COMPANY_GROUP_ID} from '../constants/constants';
import {getAsyncValue} from '../utils/myUtility';
import {hmacCreate} from '../utils/appMethods';
import {getDeviceId} from '../utils/utilMethods';
import {showToast} from '../../App';
import callAxios from './callAxios';

const myAxios = async (END_POINT, object) => {
  const data = await getAsyncValue('HEADERS');

  await axios
    .post(BASE_URL + END_POINT, object, data)
    .then(res => {
      alert('RESPONSE==>' + JSON.stringify(res.data));
    })
    .catch(err => {
      alert('ERROR===..' + JSON.stringify(err));
    });
};

export const userLogin = async object => {
  let response = null;
  const hmac = await hmacCreate();
  const deviceID = await getDeviceId();
  await axios
    .post(
      'https://api.techmahi.in/api/user_details/user_login',
      {
        UserName: object.userId,
        Password: object.password,
        CompanyGroupID: COMPANY_GROUP_ID,
      },
      {
        headers: {
          payload: hmac,
          version: '6.5',
          'device-id': deviceID,
        },
      },
    )
    .then(res => {
      if (res.data.res_code === '100') {
        response = res.data;
      } else {
        showToast();
        //alert(res.data.msg);
      }
    })
    .catch(err => {
      showToast();
      //alert(JSON.stringify(err));
    });

  return response;
};

export const fetchProfileDetails = async object => {
  let response = null;
  const data = await callAxios('user_details/profile_details', object);
  if (data != null) {
    response = data.data;
  }
  return response;
};
