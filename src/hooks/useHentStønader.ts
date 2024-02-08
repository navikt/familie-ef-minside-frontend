import { useCallback, useState } from 'react';
import { axiosConfig, prefferedAxios } from '../api/axios';
import { DataStatus } from '../interfaces/dataStatus';
import { initielleStønader, Stønader } from '../interfaces/stønader';

export interface StønadResponse {
  stønader: Stønader;
  hentStønader: () => void;
  stønadStatus: DataStatus;
}

export const useHentStønader = (): StønadResponse => {
  const [stønadStatus, settStønadStatus] = useState<DataStatus>(DataStatus.HENTER);
  const [stønader, settStønader] = useState<Stønader>(initielleStønader);

  const hentStønader = useCallback(() => {
    prefferedAxios
      .get(`familie/alene-med-barn/minside/api/saksbehandling/stonadsperioder`, axiosConfig)
      .then((response: { data: Stønader }) => {
        response && settStønader(response.data);
        settStønadStatus(DataStatus.HENTET);
      })
      .catch(() => {
        settStønadStatus(DataStatus.FEILET);
      });
  }, []);

  return {
    stønader,
    hentStønader,
    stønadStatus,
  };
};
