import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import ResponsiveFlexbox from './ResponsiveFlexbox';
import ResponsiveHeading from './ResponsiveHeading';
import { smallSkjerm } from '../utils';

const IkonContainer = styled.div`
  @media (max-width: ${smallSkjerm}px) {
    display: none;
  }
`;

const SideTittel: React.FC = () => (
  <ResponsiveFlexbox $gap="1rem" $direction="row">
    <IkonContainer>
      <AleneMedBarn />
    </IkonContainer>
    <ResponsiveHeading size="xlarge">
      Din oversikt - stønad til enslig mor eller far
    </ResponsiveHeading>
  </ResponsiveFlexbox>
);

export default SideTittel;
