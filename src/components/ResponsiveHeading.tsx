import styled, { css } from 'styled-components';
import { Heading } from '@navikt/ds-react';
import { skjermBreddeMax } from '../utils';

interface Props {
  $responsive?: boolean;
}

const ResponsiveHeading = styled(Heading)<Props>`
  ${(props) =>
    props.$responsive === true &&
    css`
      @media (max-width: ${skjermBreddeMax - 1}px) {
        text-align: center;
      }
    `}
`;

export default ResponsiveHeading;
