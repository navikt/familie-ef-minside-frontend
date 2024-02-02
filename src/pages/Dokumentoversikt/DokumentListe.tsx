import React from 'react';
import { Journalpost } from '../../interfaces/journalpost';
import Dokument from './Dokument';
import UnorderedList from '../../components/UnorderedList';

interface Props {
  journalposter: Journalpost[];
}

const DokumentListe: React.FC<Props> = ({ journalposter }) => (
  <UnorderedList>
    {journalposter.map((journalpost) => (
      <Dokument journalpost={journalpost} />
    ))}
  </UnorderedList>
);

export default DokumentListe;
