import { useApp } from '../../context/AppContext';
import { GuidePanel } from '@navikt/ds-react';
import SideTittel from '../../components/SideTittel';
import styled from 'styled-components';
import { desktop } from '../../utils/constants';

const Poster = styled(GuidePanel)`
  @media (min-width: ${desktop}px) {
    display: none;
  }
`;

const Banner = styled(GuidePanel)`
  display: none;

  @media (min-width: ${desktop}px) {
    display: block;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${desktop}px) {
    gap: 2.5rem;
  }
`;

const SideHeader: React.FC = () => {
  const { personData } = useApp();

  const panelTekstPrefix = personData.visningsnavn
    ? `Hei, ${personData.visningsnavn}. `
    : '';

  return (
    <Container>
      <SideTittel />
      <Poster poster>
        {`${panelTekstPrefix}Denne siden er under arbeid, og du
            vil foreløpig ikke finne informasjon om saken din her nå.`}
      </Poster>
      <Banner>
        {`${panelTekstPrefix}Denne siden er under arbeid, og du
            vil foreløpig ikke finne informasjon om saken din her nå.`}
      </Banner>
    </Container>
  );
};

export default SideHeader;
