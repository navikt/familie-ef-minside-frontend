import styled from 'styled-components';
import { Heading } from '@navikt/ds-react';
import { smallSkjerm970 } from '../utils';

const ResponsiveHeading = styled(Heading)`
  @media (max-width: ${smallSkjerm970}px) {
    text-align: center;
  }
`;

export default ResponsiveHeading;
