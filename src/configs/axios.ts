import axios from 'axios';
import {queryClient} from './mmkv';

export function configureAxios() {
  axios.interceptors.request.use(config => {
    // Do something before request is sent
    // config bearer token
    //@ts-ignore
    config.headers.Authorization = `Bearer ${queryClient.getQueryData([
      'token',
    ])}`;
    return config;
  });
}
