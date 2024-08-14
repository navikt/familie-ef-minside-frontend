import React from 'react';
import { Detail } from '@navikt/ds-react';
import { DokumentInfo } from '../../interfaces/journalpost';
import UnorderedList from '../../components/UnorderedList';
import Vedlegg from './Vedlegg';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

interface Props {
  journalpostId: string;
  vedleggListe: DokumentInfo[];
}

const VedleggListe: React.FC<Props> = ({ vedleggListe, journalpostId }) => {
  const { tekst } = useLocaleIntlContext();
  return (
    <div>
      <Detail weight="semibold" spacing>
        {tekst('vedlegg.tittel')}:
      </Detail>
      <UnorderedList>
        {vedleggListe.map((vedlegg) => (
          <Vedlegg key={vedlegg.dokumentId} journalpostId={journalpostId} vedlegg={vedlegg} />
        ))}
      </UnorderedList>
    </div>
  );
};

export default VedleggListe;
