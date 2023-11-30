import styled from 'styled-components';
import { Heading } from '@navikt/ds-react';
import { smallSkjerm } from '../utils';

const ResponsiveHeading = styled(Heading)`
  @media (max-width: ${smallSkjerm}px) {
    text-align: center;
  }
`;

export default ResponsiveHeading;
