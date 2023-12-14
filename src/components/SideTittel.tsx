import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import ResponsiveFlexbox from './ResponsiveFlexbox';
import ResponsiveHeading from './ResponsiveHeading';
import { skjermBreddeTittelIkon } from '../utils';
import { BodyShort } from '@navikt/ds-react';
import { logNavigering } from '../amplitude/amplitude';

interface Props {
  className?: string;
}

const IkonContainer = styled.div`
  @media (max-width: ${skjermBreddeTittelIkon}px) {
    display: none;
  }
`;

const SideTittel: React.FC<Props> = ({ className }) => (
  <ResponsiveFlexbox $gap="1rem" $direction="row" className={className}>
    <IkonContainer aria-hidden={true}>
      <AleneMedBarn />
    </IkonContainer>
    <ResponsiveFlexbox $direction="column">
      <ResponsiveHeading
        size="xlarge"
        level="1"
        onClick={() =>
          logNavigering(
            'self',
            'Dine stønader til enslig mor eller far',
            'header'
          )
        }
      >
        Dine stønader til enslig mor eller far
      </ResponsiveHeading>
      <BodyShort>
        OVERGANGSSTØNAD, STØNAD TIL BARNETILSYN OG STØNAD TIL SKOLEPENGER
      </BodyShort>
    </ResponsiveFlexbox>
  </ResponsiveFlexbox>
);

export default SideTittel;
