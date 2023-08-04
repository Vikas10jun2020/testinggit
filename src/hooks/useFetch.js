import axios from 'axios';
import {useEffect, useReducer} from 'react';

const ACTIONS = {
  API_REQUEST: 'api-request',
  FETCH_DATA: 'fetch-data',
  ERROR: 'error',
};
const initialState = {
  data: [],
  error: false,
  loading: false,
};

const reducer = (state, {type, payload}) => {
  console.log('VIKAS+' + JSON.stringify(payload));
  switch (type) {
    case ACTIONS.API_REQUEST:
      return {...state, loading: true, data: []};
    case ACTIONS.FETCH_DATA:
      return {...state, loading: false, data: payload, error: null};
    case ACTIONS.ERROR:
      return {...state, error: payload, data: []};

    default:
      return state;
  }
};
const useFetch = url => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({type: ACTIONS.API_REQUEST});
    axios
      .get(url)
      .then(res => {
        dispatch({type: ACTIONS.FETCH_DATA, payload: res.data});
      })
      .catch(error => {
        console.log('error' + error);
        dispatch({type: ACTIONS.ERROR, payload: error.response.data});
      });
  }, [url]);
  return state;
};

export default useFetch;
