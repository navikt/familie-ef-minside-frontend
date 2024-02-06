import React from 'react';
import { Journalpost } from '../../interfaces/journalpost';
import Dokument from './Dokument';
import UnorderedList from '../../components/UnorderedList';

interface Props {
  antall?: number;
  className?: string;
  journalposter: Journalpost[];
}

const DokumentListe: React.FC<Props> = ({ antall, className, journalposter }) => (
  <UnorderedList className={className}>
    {journalposter.slice(0, antall).map((journalpost) => (
      <Dokument journalpost={journalpost} />
    ))}
  </UnorderedList>
);

export default DokumentListe;
