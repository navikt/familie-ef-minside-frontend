import { Alert, HStack, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import { useApp } from '../../context/AppContext';
import React from 'react';
import DataViewer from '../../components/DataViewer';
import LenkePanel from '../../components/LenkePanel';
import { Stønader } from '../../interfaces/stønader';

const DineStønader: React.FC = () => {
  const { stønader, stønadStatus } = useApp();

  return (
    <VStack gap="2">
      <HeadingLevel2 size="small" level="2">
        Dine stønader
      </HeadingLevel2>
      <DataViewer
        dataStatus={stønadStatus}
        loaderTekst="Henter dine stønader"
        alertTekst="Noe gikk galt ved uthenting av dine stønader."
      >
        <StønadPaneler stønader={stønader} />
      </DataViewer>
    </VStack>
  );
};

const StønadPaneler: React.FC<{ stønader: Stønader }> = ({ stønader }) => {
  const { overgangsstønad, barnetilsyn, skolepenger } = stønader;

  const harOvergangsstønad = overgangsstønad.perioder.length > 0;
  const harBarnetilsyn = barnetilsyn.perioder.length > 0;
  const harSkolepenger = skolepenger.perioder.length > 0;

  if (!(harOvergangsstønad || harBarnetilsyn || harSkolepenger)) {
    return (
      <Alert inline variant="info">
        Vi fant ingen stønader å vise. Denne teksten må avklares med teamet. // TODO
      </Alert>
    );
  }

  return (
    <HStack gap="4">
      {harOvergangsstønad && (
        <LenkePanel
          headingLevel="3"
          redirect="intern"
          stønad={overgangsstønad}
          stønadType="overgangsstønad"
        />
      )}
      {harBarnetilsyn && (
        <LenkePanel
          headingLevel="3"
          redirect="intern"
          stønad={barnetilsyn}
          stønadType="barnetilsyn"
        />
      )}
      {harSkolepenger && (
        <LenkePanel
          headingLevel="3"
          redirect="intern"
          stønad={skolepenger}
          stønadType="skolepenger"
        />
      )}
    </HStack>
  );
};

export default DineStønader;
