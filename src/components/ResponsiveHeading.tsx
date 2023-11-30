import styled from 'styled-components';
import { Heading } from '@navikt/ds-react';

const ResponsiveHeading = styled(Heading)`
  @media (max-width: 970px) {
    text-align: center;
  }
`;

export default ResponsiveHeading;
