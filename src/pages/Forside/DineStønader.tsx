import { Alert, HStack, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
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
    <VStack gap="2">
      <HeadingLevel2 size="small" level="2">
        {tekst('stonader.tittel')}
      </HeadingLevel2>
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
    <HStack gap="4">
      {harOvergangsstønad && (
        <LenkePanel
          headingLevel="3"
          stønad={overgangsstønad}
          stønadType="overgangsstønad"
          url="/overgangsstonad"
        />
      )}
      {harBarnetilsyn && (
        <LenkePanel
          headingLevel="3"
          stønad={barnetilsyn}
          stønadType="barnetilsyn"
          url="/barnetilsyn"
        />
      )}
      {harSkolepenger && (
        <LenkePanel
          headingLevel="3"
          stønad={skolepenger}
          stønadType="skolepenger"
          url="/skolepenger"
        />
      )}
    </HStack>
  );
};

export default DineStønader;
