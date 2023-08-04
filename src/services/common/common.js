import {showToast} from '../../../App';
import callAxios from '../callAxios';
import {END_POINTS} from '../endPoints/urls';

export const sendOtp = async object => {
  const data = await callAxios(END_POINTS.SEND_OTP, object);
  if (data.res_code === '100') {
    showToast(data.data.message);
  } else {
    showToast(data.msg, 'error');
  }
};

export const resendOtp = async object => {
  let response = null;
  const data = await callAxios(END_POINTS.RESEND_OTP, object);
  if (data.res_code === '100') {
    response = data.data;
  } else {
    showToast(data.msg, 'error');
  }
  return response;
};

export const verifyOtp = async object => {
  let response = false;
  const data = await callAxios(END_POINTS.VERIFY_OTP, object);
  console.log('VERIFY-OTP' + JSON.stringify(data));
  if (data.res_code === '100') {
    if (data.data.Allow) {
      response = true;
    }
  } else {
    showToast(data.msg, 'error');
  }
  return response;
};

export const verifyMpin = async object => {
  let response = false;
  const data = await callAxios(END_POINTS.VERIFY_MPIN, object);
  console.log('VERIFY MPIN' + JSON.stringify(data));
  if (data.res_code === '100') {
    if (data.data.IsVerified == 1) {
      response = true;
    }
  } else {
    showToast(data.msg, 'error');
  }
  return response;
};
