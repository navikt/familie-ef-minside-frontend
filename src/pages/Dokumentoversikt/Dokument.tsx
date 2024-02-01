import React from 'react';
import { FilePdfIcon } from '@navikt/aksel-icons';
import styled from 'styled-components';
import { ABorderDivider, AIconAction } from '@navikt/ds-tokens/dist/tokens';
import { Detail, Link, VStack } from '@navikt/ds-react';
import { Journalpost } from '../../interfaces/journalpost';
import { utledDetailTekst } from './utils';
import { åpneFilIEgenTab } from '../../utils/fil';

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

const Lenke = styled(Link)`
  cursor: pointer;
`;

const LenkeBold = styled(Lenke)`
  font-weight: bold;
`;

const Dokument: React.FC<Props> = ({ dokument }) => {
  const detailTekst = utledDetailTekst(dokument);
  const harVedlegg = dokument.vedlegg.length > 0;
  const urlHovedDokument = `/familie/alene-med-barn/minside/dokument/journalpost/${dokument.journalpostId}/dokument-pdf/${dokument.hovedDokument.dokumentId}/variantformat/${dokument.hovedDokument.variantformat}`;

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
          <LenkeBold
            href={urlHovedDokument}
            variant="neutral"
            className="bold"
            target="_blank"
          >
            {`${dokument.hovedDokument.tittel}.pdf`}
          </LenkeBold>
          <Detail textColor="subtle">{detailTekst}</Detail>
        </div>
        {harVedlegg && (
          <div>
            <Detail weight="semibold" spacing={true}>
              Vedlegg:
            </Detail>
            {dokument.vedlegg.map((vedlegg) => {
              const vedleggHref = `/familie/alene-med-barn/minside/dokument/journalpost/${dokument.journalpostId}/dokument-pdf/${vedlegg.dokumentId}/variantformat/${vedlegg.variantformat}`; // TODO
              return (
                <Lenke
                  key={vedlegg.dokumentId}
                  spacing
                  variant="neutral"
                  href={vedleggHref}
                  target="_blank"
                  // onClick={(e: React.SyntheticEvent) => {
                  //   // Ønsker å vise url som lenken navigerer til ved hover og samtidig åpne pdfen i ny fane
                  //   e.preventDefault();
                  //   åpneFilIEgenTab(
                  //     dokument.journalpostId,
                  //     vedlegg.dokumentId,
                  //     vedlegg.variantformat,
                  //     vedlegg.tittel
                  //   );
                  // }}
                >
                  {`${vedlegg.tittel}.pdf`}
                </Lenke>
              );
            })}
          </div>
        )}
      </VStack>
    </Container>
  );
};

export default Dokument;
