import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import ResponsiveFlexbox from './ResponsiveFlexbox';
import ResponsiveHeading from './ResponsiveHeading';
import { fullSkjermBredde995 } from '../utils';

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
    <ResponsiveHeading size="xlarge" level="1">
      Din oversikt - stønad til enslig mor eller far
    </ResponsiveHeading>
  </ResponsiveFlexbox>
);

export default SideTittel;
