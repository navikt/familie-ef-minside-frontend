import { useCallback, useState } from 'react';
import { axiosConfig, prefferedAxios } from '../api/axios';
import { Journalpost } from '../interfaces/journalpost';

export interface HentDokumentResponse {
  journalposter: Journalpost[];
  hentJournalposter: () => void;
  journalpostStatus: JournalpostStatus;
}

export enum JournalpostStatus {
  HENTER = 'HENTER',
  HENTET = 'HENTET',
  FEILET = 'FEILET'
}

export const useHentJournalposter = (): HentDokumentResponse => {
  const [journalpostStatus, settJournalpostStatus] = useState<JournalpostStatus>(JournalpostStatus.HENTER);
  const [journalposter, settJournalposter] = useState<Journalpost[]>([]);

  const hentJournalposter = useCallback(() => {
    prefferedAxios
      .get(
        `familie/alene-med-barn/minside/api/journalpost`,
        axiosConfig
      )
      .then((response: { data: Journalpost[] }) => {
        response && settJournalposter(response.data);
        settJournalpostStatus(JournalpostStatus.HENTET);
      }).catch(() => {
        settJournalpostStatus(JournalpostStatus.FEILET)
    });
  }, [prefferedAxios]);

  return {
    journalposter,
    hentJournalposter,
    journalpostStatus,
  };
};
