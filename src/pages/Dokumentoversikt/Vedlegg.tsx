import React from 'react';
import styled from 'styled-components';
import { Link } from '@navikt/ds-react';
import { DokumentInfo } from '../../interfaces/journalpost';
import { utledFilUrl } from '../../utils/fil';

const Lenke = styled(Link)`
  cursor: pointer;
`;

interface Props {
  journalpostId: string;
  vedlegg: DokumentInfo;
}

const Vedlegg: React.FC<Props> = ({ journalpostId, vedlegg }) => {
  const urlVedlegg = utledFilUrl(journalpostId, vedlegg.dokumentId, vedlegg.variantformat);

  return (
    <li>
      <Lenke key={vedlegg.dokumentId} spacing variant="neutral" href={urlVedlegg} target="_blank">
        {`${vedlegg.tittel}.pdf`}
      </Lenke>
    </li>
  );
};
export default Vedlegg;
