import { AleneMedBarn } from '../icons/AleneMedBarn';
import styled from 'styled-components';
import ResponsiveFlexbox from './ResponsiveFlexbox';
import ResponsiveHeading from './ResponsiveHeading';

const IkonContainer = styled.div`
  @media (max-width: 970px) {
    display: none;
  }
`;

const SideTittel: React.FC = () => (
  <ResponsiveFlexbox $gap="1rem" $direction="row">
    <IkonContainer>
      <AleneMedBarn />
    </IkonContainer>
    <ResponsiveHeading size="xlarge">
      Din oversikt - enslig forsørger
    </ResponsiveHeading>
  </ResponsiveFlexbox>
);

export default SideTittel;
