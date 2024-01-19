import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import { desktop, mobile } from '../utils';
import { BodyShort, Heading, HStack, VStack } from '@navikt/ds-react';
import React from 'react';
import {
  AFontLineHeightHeading2xlarge,
  AFontLineHeightLarge,
  AFontLineHeightMedium,
  AFontSizeHeading2xlarge,
  AFontSizeHeadingMedium,
  AFontSizeLarge,
  AFontSizeMedium,
  AFontWeightRegular,
} from '@navikt/ds-tokens/dist/tokens';

const IkonContainer = styled.div`
  display: none;

  @media (min-width: ${desktop}px) {
    display: block;
  }
`;

const Tittel = styled(Heading)`
  font-size: ${AFontSizeHeadingMedium};
  line-height: ${AFontLineHeightMedium};
  letter-spacing: -0.01em;

  @media (min-width: ${mobile}px) {
    font-size: ${AFontSizeHeading2xlarge};
    line-height: ${AFontLineHeightHeading2xlarge};
    letter-spacing: -0.002em;
  }
`;

const UnderTittel = styled(BodyShort)`
  font-size: ${AFontSizeMedium};
  line-height: ${AFontLineHeightMedium};
  letter-spacing: 0.002em;

  @media (min-width: ${mobile}px) {
    font-size: ${AFontSizeLarge};
    font-width: ${AFontWeightRegular};
    line-height: ${AFontLineHeightLarge};
    letter-spacing: 0;
  }
`;

const SideTittel: React.FC = () => (
  <HStack gap="4">
    <IkonContainer aria-hidden={true}>
      <AleneMedBarn />
    </IkonContainer>
    <VStack>
      <Tittel level="1">Dine stønader til enslig mor eller far</Tittel>
      <UnderTittel>
        Overgangsstønad, stønad til barnetilsyn og stønad til skolepenger
      </UnderTittel>
    </VStack>
  </HStack>
);

export default SideTittel;
