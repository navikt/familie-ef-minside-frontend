import styled from 'styled-components';
import { Heading } from '@navikt/ds-react';
import { fullSkjermBredde995 } from '../utils';

const ResponsiveHeading = styled(Heading)`
  @media (max-width: ${fullSkjermBredde995}px) {
    text-align: center;
  }
`;

export default ResponsiveHeading;
