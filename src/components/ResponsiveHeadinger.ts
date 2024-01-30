import styled from 'styled-components';
import { BodyShort, Heading } from '@navikt/ds-react';
import {
  AFontLineHeightHeading2xlarge,
  AFontLineHeightLarge,
  AFontLineHeightMedium,
  AFontSizeHeading2xlarge,
  AFontSizeHeadingMedium,
  AFontSizeHeadingSmall,
  AFontSizeLarge,
  AFontSizeMedium,
  AFontLineHeightHeadingMedium,
  AFontLineHeightHeadingSmall,
  AFontSizeHeadingXsmall,
  AFontWeightRegular,
} from '@navikt/ds-tokens/dist/tokens';
import { mobile } from '../utils/constants';

export const HeadingLevel1 = styled(Heading)`
  font-size: ${AFontSizeHeadingMedium};
  line-height: ${AFontLineHeightMedium};
  letter-spacing: -0.01em;

  @media (min-width: ${mobile}px) {
    font-size: ${AFontSizeHeading2xlarge};
    line-height: ${AFontLineHeightHeading2xlarge};
    letter-spacing: -0.002em;
  }
`;

export const HeadingLevel2 = styled(Heading)`
  font-size: ${AFontSizeHeadingSmall};
  line-height: ${AFontLineHeightHeadingSmall};
  letter-spacing: -0.001em;

  @media (min-width: ${mobile}px) {
    font-size: ${AFontSizeHeadingMedium};
    line-height: ${AFontLineHeightHeadingMedium};
    letter-spacing: -0.002em;
  }
`;

export const HeadingLevel3 = styled(Heading)`
  font-size: ${AFontSizeHeadingXsmall};
  line-height: ${AFontSizeHeadingXsmall};
  letter-spacing: -0.001em;

  @media (min-width: ${mobile}px) {
    font-size: ${AFontSizeHeadingSmall};
    line-height: ${AFontLineHeightHeadingSmall};
  }
`;

export const UnderTittel = styled(BodyShort)`
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
