import styled from 'styled-components';
import { Heading } from '@navikt/ds-react';
import {
  AFontLineHeightHeadingMedium,
  AFontLineHeightHeadingSmall,
  AFontSizeHeadingXsmall,
  AFontSizeHeadingMedium,
  AFontSizeHeadingSmall,
} from '@navikt/ds-tokens/dist/tokens';
import { mobile } from '../utils';

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
