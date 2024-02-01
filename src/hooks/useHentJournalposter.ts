import { useCallback, useState } from 'react';
import { axiosConfig, prefferedAxios } from '../api/axios';
import { Journalpost } from '../interfaces/journalpost';

export interface HentDokumentResponse {
  journalposter: Journalpost[];
  hentJournalposter: () => void;
  lasterJournalposter: boolean;
}

export const useHentJournalposter = (): HentDokumentResponse => {
  const [lasterJournalposter, settLasterJournalposter] = useState<boolean>(true);
  const [journalposter, settJournalposter] = useState<Journalpost[]>([]);

  const hentJournalposter = useCallback(() => {
    prefferedAxios
      .get(
        `familie/alene-med-barn/minside/api/journalpost`,
        axiosConfig
      )
      .then((response: { data: Journalpost[] }) => {
        response && settJournalposter(response.data);
        settLasterJournalposter(false);
      });
  }, [prefferedAxios]);

  return {
    journalposter,
    hentJournalposter,
    lasterJournalposter,
  };
};
