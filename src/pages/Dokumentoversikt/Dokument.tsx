import React from 'react';
import { FilePdfIcon } from '@navikt/aksel-icons';
import styled from 'styled-components';
import { ABorderDivider, AIconAction } from '@navikt/ds-tokens/dist/tokens';
import { Detail, Link, VStack } from '@navikt/ds-react';
import { Journalpost } from '../../interfaces/journalpost';
import { utledDetailTekst } from './utils';
import { utledFilUrl } from '../../utils/fil';
import VedleggListe from './VedleggListe';

const ListElement = styled.li`
  display: grid;
  grid-template-columns: 2rem 1fr;
  column-gap: 1.25rem;
  border-bottom: 1px solid ${ABorderDivider};
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  &:last-child {
    border-bottom: none;
  }
`;

const Lenke = styled(Link)`
  cursor: pointer;
`;

const LenkeBold = styled(Lenke)`
  font-weight: bold;
`;

interface Props {
  journalpost: Journalpost;
}

const Dokument: React.FC<Props> = ({ journalpost }) => {
  const detailTekst = utledDetailTekst(journalpost);
  const harVedlegg = journalpost.vedlegg.length > 0;
  const urlHovedDokument = utledFilUrl(
    journalpost.journalpostId,
    journalpost.hovedDokument.dokumentId,
    journalpost.hovedDokument.variantformat
  );

  return (
    <ListElement>
      <FilePdfIcon
        color={AIconAction}
        title="pdf-dokument"
        aria-hidden={true}
        width="2.25rem"
        height="2.25rem"
      />
      <VStack gap="5">
        <div>
          <LenkeBold
            href={urlHovedDokument}
            variant="neutral"
            className="bold"
            target="_blank"
          >
            {`${journalpost.hovedDokument.tittel}.pdf`}
          </LenkeBold>
          <Detail textColor="subtle">{detailTekst}</Detail>
        </div>
        {harVedlegg && (
          <VedleggListe
            journalpostId={journalpost.journalpostId}
            vedleggListe={journalpost.vedlegg}
          />
        )}
      </VStack>
    </ListElement>
  );
};

export default Dokument;
