import { prefferedAxios } from '../api/axios';
import { useCallback, useState } from 'react';
import {
  formatertPersonData,
  initiellPersonData,
  PersonData,
} from '../interfaces/personData';

const axiosConfig = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
};

interface Props {
  hentPersonData: () => void;
  personData: PersonData;
}

export const useHentPersonData = (): Props => {
  const [personData, settPersonData] = useState<PersonData>(initiellPersonData);

  const hentPersonData = useCallback(() => {
    prefferedAxios
      .get(
        `familie/alene-med-barn/minside/api/oppslag/sokerminimum`,
        axiosConfig
      )
      .then((response: { data: PersonData }) => {
        response && settPersonData(formatertPersonData(response.data));
      });
  }, [prefferedAxios]);

  return {
    hentPersonData,
    personData,
  };
};
