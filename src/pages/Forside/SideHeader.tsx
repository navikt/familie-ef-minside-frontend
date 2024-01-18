import { useApp } from '../../context/AppContext';
import { GuidePanel, VStack } from '@navikt/ds-react';
import SideTittel from '../../components/SideTittel';

const SideHeader: React.FC = () => {
  const { personData } = useApp();

  const panelTekstPrefix = personData.visningsnavn
    ? `Hei, ${personData.visningsnavn}. `
    : '';

  return (
    <VStack gap="8">
      <SideTittel />
      <GuidePanel>
        {`${panelTekstPrefix}Denne siden er under arbeid, og du
            vil foreløpig ikke finne informasjon om saken din her nå.`}
      </GuidePanel>
    </VStack>
  );
};

export default SideHeader;
