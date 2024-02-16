import React from 'react';
import { Detail } from '@navikt/ds-react';
import { DokumentInfo } from '../../interfaces/journalpost';
import UnorderedList from '../../components/UnorderedList';
import Vedlegg from './Vedlegg';

interface Props {
  journalpostId: string;
  vedleggListe: DokumentInfo[];
}

const VedleggListe: React.FC<Props> = ({ vedleggListe, journalpostId }) => (
  <div>
    <Detail weight="semibold" spacing>
      Vedlegg:
    </Detail>
    <UnorderedList>
      {vedleggListe.map((vedlegg) => (
        <Vedlegg key={vedlegg.dokumentId} journalpostId={journalpostId} vedlegg={vedlegg} />
      ))}
    </UnorderedList>
  </div>
);

export default VedleggListe;
