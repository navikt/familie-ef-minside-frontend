import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import ResponsiveFlexbox from './ResponsiveFlexbox';
import { skjermBreddeTittelIkon } from '../utils';
import { BodyShort, Heading } from '@navikt/ds-react';
import { useApp } from '../context/AppContext';
import { Device } from '../hooks/useResponsive';
import React from 'react';

interface Props {
  className?: string;
}

const IkonContainer = styled.div`
  @media (max-width: ${skjermBreddeTittelIkon}px) {
    display: none;
  }
`;

const SideTittel: React.FC<Props> = ({ className }) => {
  const { currentDevice } = useApp();

  const headerSize = currentDevice === Device.MOBILE ? 'medium' : 'xlarge';

  return (
    <ResponsiveFlexbox $gap="1rem" $direction="row" className={className}>
      <IkonContainer aria-hidden={true}>
        <AleneMedBarn />
      </IkonContainer>
      <ResponsiveFlexbox $direction="column">
        <Heading size={headerSize} level="1">
          Dine stønader til enslig mor eller far
        </Heading>
        <BodyShort>
          overgangsstønad, stønad til barnetilsyn og stønad til skolepenger
        </BodyShort>
      </ResponsiveFlexbox>
    </ResponsiveFlexbox>
  );
};

export default SideTittel;
