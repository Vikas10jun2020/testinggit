import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {ASYNC, COMPANY_GROUP_ID} from '../constants/constants';

//-------------CREATING FINALOBJECT-----------------
const object = {
  CompanyGroupID: COMPANY_GROUP_ID,
};
const finalObject = obj => {
  return {
    ...object,
    ...obj,
  };
};

const BASE_URL = 'https://api.techmahi.in/api/';
const callAxios = async (endPoint, object) => {
  const headers = JSON.parse(await AsyncStorage.getItem(ASYNC.HEADERS));
  console.log('HEADER----->' + endPoint + '  ' + JSON.stringify(headers));
  let response = null;
  const finalUrl = BASE_URL + endPoint;
  await axios
    .post(finalUrl, finalObject(object), {headers: headers, timeout: 10000})
    .then(res => {
      response = res.data;
    })
    .catch(error => {
      console.log('AXIOS_ERROR_JSON' + ' ' + endPoint + +JSON.stringify(error));
    });
  return response;
};

export default callAxios;
