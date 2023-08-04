import callAxios from '../callAxios';
import {END_POINTS} from '../endPoints/urls';

export const getMenyType = async object => {
  let response = null;
  const data = await callAxios(END_POINTS.MENY_TYPE, object);
  //console.log('DATA' + JSON.stringify(data));
  if (data.res_code === '100') {
    response = data.data;
  } else {
    showToast(data.msg, 'error');
  }
  return response;
};

export const getMenyList = async object => {
  let response = null;
  const data = await callAxios(END_POINTS.MENU_LIST, object);
  //console.log('DATA' + JSON.stringify(data));
  if (data.res_code === '100') {
    response = data.data;
  } else {
    showToast(data.msg, 'error');
  }
  return response;
};
