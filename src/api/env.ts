import { prefferedAxios } from './axios';

export interface AppEnv {
  aInntekt: string;
  gosys: string;
}

export const hentEnv = (): Promise<AppEnv> => {
  console.log('prefferedAxios', prefferedAxios.defaults?.baseURL);
  return prefferedAxios
    .get(`/familie/alene-med-barn/minside/env`)
    .then((response) => {
      return response.data;
    });
};
