import {showToast} from '../../../App';
import {ASYNC} from '../../constants/constants';
import {getAsyncValue, setAsyncData} from '../../utils/myUtility';
import callAxios from '../callAxios';
import {END_POINTS} from '../endPoints/urls';

export const login = async object => {
  console.log('LOGIN_OBJECT====>', JSON.stringify(object));
  let response = null;
  const data = await callAxios(END_POINTS.USER_LOGIN, object);
  if (data.res_code === '100') {
    response = data.data;
    const headers = JSON.parse(await getAsyncValue(ASYNC.HEADERS));
    console.log('userinfo after login', JSON.stringify(headers));
  } else {
    showToast(data.msg, 'error');
  }
  return response;
};
