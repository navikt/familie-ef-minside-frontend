import React from 'react';
import { Journalpost } from '../../interfaces/journalpost';
import Dokument from './Dokument';
import UnorderedList from '../../components/UnorderedList';

interface Props {
  antall?: number;
  journalposter: Journalpost[];
}

const DokumentListe: React.FC<Props> = ({ antall, journalposter }) => (
  <UnorderedList>
    {journalposter.slice(0, antall).map((journalpost) => (
      <Dokument journalpost={journalpost} />
    ))}
  </UnorderedList>
);

export default DokumentListe;
