import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import { desktop } from '../utils/constants';
import { HStack, VStack } from '@navikt/ds-react';
import React from 'react';
import { HeadingLevel1, UnderTittel } from './ResponsiveHeadinger';

interface Props {
  tittel: string;
  underTittel?: string;
  ikon?: boolean;
}

const IkonContainer = styled.div`
  display: none;

  @media (min-width: ${desktop}px) {
    display: block;
  }
`;

const SideTittel: React.FC<Props> = ({ tittel, underTittel, ikon }) => (
  <HStack gap="4">
    {ikon && (
      <IkonContainer aria-hidden={true}>
        <AleneMedBarn />
      </IkonContainer>
    )}
    <VStack>
      <HeadingLevel1 size="medium" level="1">
        {tittel}
      </HeadingLevel1>
      {underTittel && (
        <UnderTittel>Overgangsstønad, stønad til barnetilsyn og stønad til skolepenger</UnderTittel>
      )}
    </VStack>
  </HStack>
);

export default SideTittel;
