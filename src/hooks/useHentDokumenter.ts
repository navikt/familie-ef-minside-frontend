import { useCallback, useState } from 'react';
import { axiosConfig, prefferedAxios } from '../api/axios';
import { Journalpost } from '../interfaces/journalpost';

export interface HentDokumentResponse {
  dokumenter: Journalpost[];
  hentDokumenter: () => void;
  lasterDokumenter: boolean;
}

export const useHentDokumenter = (): HentDokumentResponse => {
  const [lasterDokumenter, settLasterDokumenter] = useState<boolean>(true);
  const [dokumenter, settDokumenter] = useState<Journalpost[]>([]);

  const hentDokumenter = useCallback(() => {
    prefferedAxios
      .get(
        `familie/alene-med-barn/minside/api/dokument/journalposter`,
        axiosConfig
      )
      .then((response: { data: Journalpost[] }) => {
        response && settDokumenter(response.data);
        settLasterDokumenter(false);
      });
  }, [prefferedAxios]);

  return {
    dokumenter,
    hentDokumenter,
    lasterDokumenter,
  };
};
