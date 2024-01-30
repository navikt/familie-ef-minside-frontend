import React from 'react';
import { FilePdfIcon } from '@navikt/aksel-icons';
import styled from 'styled-components';
import { ABorderDivider, AIconAction } from '@navikt/ds-tokens/dist/tokens';
import { BodyShort, Detail, Label, VStack } from '@navikt/ds-react';
import { Journalpost } from '../../interfaces/journalpost';
import { utledDetailTekst } from './utils';

interface Props {
  dokument: Journalpost;
}

const Container = styled.div`
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

const HovedDokument = styled(Label)`
  text-decoration-line: underline;
`;

const Vedlegg = styled(BodyShort)`
  text-decoration-line: underline;
`;

const Dokument: React.FC<Props> = ({ dokument }) => {
  const detailTekst = utledDetailTekst(dokument);
  const harVedlegg = dokument.vedlegg.length > 0;

  return (
    <Container>
      <FilePdfIcon
        color={AIconAction}
        title="a11y-title"
        width="2.25rem"
        height="2.25rem"
      />
      <VStack gap="5">
        <div>
          <HovedDokument>{dokument.hovedDokument.tittel}</HovedDokument>
          <Detail textColor="subtle">{detailTekst}</Detail>
        </div>
        {harVedlegg && (
          <div>
            <Detail weight="semibold" spacing={true}>
              Vedlegg:
            </Detail>
            {dokument.vedlegg.map((vedlegg) => (
              <Vedlegg key={vedlegg.dokumentId} spacing>
                {vedlegg.tittel}
              </Vedlegg>
            ))}
          </div>
        )}
      </VStack>
    </Container>
  );
};

export default Dokument;
