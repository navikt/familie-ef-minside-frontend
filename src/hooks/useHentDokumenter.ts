import { useCallback, useState } from 'react';
import { axiosConfig, prefferedAxios } from '../api/axios';
import { Journalpost } from '../interfaces/journalpost';

export interface HentDokumentResponse {
  hentDokumenter: () => void;
  dokumenter: Journalpost[];
}

export const useHentDokumenter = (
  søknadApiUrl: string
): HentDokumentResponse => {
  const [dokumenter, settDokumenter] = useState<Journalpost[]>([]);

  const hentDokumenter = useCallback(() => {
    console.log('hent');
    prefferedAxios
      .get(`${søknadApiUrl}/api/dokument/journalposter`, axiosConfig)
      .then((response: { data: Journalpost[] }) => {
        response && settDokumenter(response.data);
      });
  }, [prefferedAxios]);

  return {
    hentDokumenter,
    dokumenter,
  };
};
