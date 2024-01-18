import { useApp } from '../../context/AppContext';
import { GuidePanel, VStack } from '@navikt/ds-react';
import SideTittel from '../../components/SideTittel';
import styled from 'styled-components';
import { desktop } from '../../utils';

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

const SideHeader: React.FC = () => {
  const { personData } = useApp();

  const panelTekstPrefix = personData.visningsnavn
    ? `Hei, ${personData.visningsnavn}. `
    : '';

  return (
    <VStack gap="8">
      <SideTittel />
      <Poster poster>
        {`${panelTekstPrefix}Denne siden er under arbeid, og du
            vil foreløpig ikke finne informasjon om saken din her nå.`}
      </Poster>
      <Banner>
        {`${panelTekstPrefix}Denne siden er under arbeid, og du
            vil foreløpig ikke finne informasjon om saken din her nå.`}
      </Banner>
    </VStack>
  );
};

export default SideHeader;
