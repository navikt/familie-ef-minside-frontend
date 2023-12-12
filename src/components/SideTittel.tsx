import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import ResponsiveFlexbox from './ResponsiveFlexbox';
import ResponsiveHeading from './ResponsiveHeading';
import { fullSkjermBredde995 } from '../utils';
import { BodyShort } from '@navikt/ds-react';

const IkonContainer = styled.div`
  @media (max-width: ${fullSkjermBredde995}px) {
    display: none;
  }
`;

const SideTittel: React.FC = () => (
  <ResponsiveFlexbox $gap="1rem" $direction="row">
    <IkonContainer aria-hidden={true}>
      <AleneMedBarn />
    </IkonContainer>
    <ResponsiveFlexbox $direction="column">
      <ResponsiveHeading size="xlarge" level="1">
        Dine stønader til enslig mor eller far
      </ResponsiveHeading>
      <BodyShort>
        OVERGANGSSTØNAD, STØNAD TIL BARNETILSYN OG STØNAD TIL SKOLEPENGER
      </BodyShort>
    </ResponsiveFlexbox>
  </ResponsiveFlexbox>
);

export default SideTittel;
