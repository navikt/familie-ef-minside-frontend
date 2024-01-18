import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import { desktop } from '../utils';
import { BodyShort, Heading, HStack, VStack } from '@navikt/ds-react';
import { useApp } from '../context/AppContext';
import { Device } from '../hooks/useResponsive';
import React from 'react';

const IkonContainer = styled.div`
  display: none;

  @media (min-width: ${desktop}px) {
    display: block;
  }
`;

const SideTittel: React.FC = () => {
  const { currentDevice } = useApp();

  const tittelSize = currentDevice === Device.MOBILE ? 'medium' : 'xlarge';
  const underTittelSize = currentDevice === Device.MOBILE ? 'small' : 'medium';

  return (
    <HStack gap="4">
      <IkonContainer aria-hidden={true}>
        <AleneMedBarn />
      </IkonContainer>
      <VStack>
        <Heading size={tittelSize} level="1">
          Dine stønader til enslig mor eller far
        </Heading>
        <BodyShort size={underTittelSize}>
          Overgangsstønad, stønad til barnetilsyn og stønad til skolepenger
        </BodyShort>
      </VStack>
    </HStack>
  );
};

export default SideTittel;
