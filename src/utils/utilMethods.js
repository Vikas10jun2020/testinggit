import DeviceInfo from 'react-native-device-info';
import {API_VERSION} from '../constants/constants';
import {hmacCreate} from './appMethods';

export const getDeviceId = async () => {
  try {
    return await DeviceInfo.getUniqueId();
  } catch (error) {
    console.log('Error while fetching deviceUniqueID');
  }
};

export const createApiHeader = async () => {
  return {
    'device-id': await getDeviceId(),
    payload: await hmacCreate(),
    version: API_VERSION,
    auth: '',
  };
};
