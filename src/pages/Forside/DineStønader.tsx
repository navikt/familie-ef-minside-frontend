import { Alert, Heading, HStack, VStack } from '@navikt/ds-react';
import { useApp } from '../../context/AppContext';
import React from 'react';
import DataViewer from '../../components/DataViewer';
import LenkePanel from '../../components/LenkePanel';
import { Stønader } from '../../interfaces/stønader';
import { useLocaleIntlContext } from '../../context/LocaleIntlContext';

const DineStønader: React.FC = () => {
  const { stønader, stønadStatus } = useApp();
  const { tekst } = useLocaleIntlContext();

  return (
    <VStack gap="space-2">
      <Heading size="medium" level="2">
        {tekst('stonader.tittel')}
      </Heading>
      <DataViewer
        dataStatus={stønadStatus}
        loaderTekst={tekst('dataViewer.henter')}
        alertTekst={tekst('dataViewer.galt')}
      >
        <StønadPaneler stønader={stønader} />
      </DataViewer>
    </VStack>
  );
};

const StønadPaneler: React.FC<{ stønader: Stønader }> = ({ stønader }) => {
  const { overgangsstønad, barnetilsyn, skolepenger } = stønader;
  const { tekst } = useLocaleIntlContext();

  const harOvergangsstønad = overgangsstønad.perioder.length > 0;
  const harBarnetilsyn = barnetilsyn.perioder.length > 0;
  const harSkolepenger = skolepenger.perioder.length > 0;

  if (!(harOvergangsstønad || harBarnetilsyn || harSkolepenger)) {
    return (
      <Alert inline variant="info">
        {tekst('stonader.ingenFunnet')}
      </Alert>
    );
  }

  return (
    <HStack gap="space-4">
      {harOvergangsstønad && (
        <LenkePanel stønad={overgangsstønad} stønadType="overgangsstønad" url="/overgangsstonad" />
      )}
      {harBarnetilsyn && (
        <LenkePanel stønad={barnetilsyn} stønadType="barnetilsyn" url="/barnetilsyn" />
      )}
      {harSkolepenger && (
        <LenkePanel stønad={skolepenger} stønadType="skolepenger" url="/skolepenger" />
      )}
    </HStack>
  );
};

export default DineStønader;
