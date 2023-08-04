import RNSimpleCrypto from 'react-native-simple-crypto';
import DeviceInfo from 'react-native-device-info';
import {API_VERSION as VERSION} from '../constants/constants';

let HMAC_DATA = null;
let HMAC_KEY = null;
const API_VERSION = VERSION;
let DEVICE_ID = null;

export const hmacCreate = async () => {
  DEVICE_ID = await DeviceInfo.getUniqueId();
  HMAC_KEY = API_VERSION + 'Token' + DEVICE_ID;
  HMAC_DATA = API_VERSION + 'Signature' + DEVICE_ID + 'payload';
  const toHex = RNSimpleCrypto.utils.convertArrayBufferToHex;
  const keyHmac = RNSimpleCrypto.utils.convertUtf8ToArrayBuffer(HMAC_KEY);
  const message = RNSimpleCrypto.utils.convertUtf8ToArrayBuffer(HMAC_DATA);
  const HMAC_PAYLOAD = await RNSimpleCrypto.HMAC.hmac256(message, keyHmac);

  return toHex(HMAC_PAYLOAD);
};
