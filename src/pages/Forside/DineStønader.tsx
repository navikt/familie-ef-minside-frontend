import { Alert, HStack, VStack } from '@navikt/ds-react';
import { HeadingLevel2 } from '../../components/ResponsiveHeadinger';
import { useApp } from '../../context/AppContext';
import React from 'react';
import DataViewer from '../../components/DataViewer';
import LenkePanel from '../../components/LenkePanel';
import { Overgangsstønad } from '../../icons/Overgangsstønad';
import { Barnetilsyn } from '../../icons/Barnetilsyn';
import { Skolepenger } from '../../icons/Skolepenger';
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
        <StønadVisning stønader={stønader} />
      </DataViewer>
    </VStack>
  );
};

const StønadVisning: React.FC<{ stønader: Stønader }> = ({ stønader }) => {
  const { overgangsstønad, barnetilsyn, skolepenger } = stønader;

  const harOvergangsstønad = overgangsstønad.length > -1; // TODO
  const harBarnetilsyn = barnetilsyn.length > -1; // TODO
  const harSkolepenger = skolepenger.length > -1; // TODO

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
          tittel="Overgangsstønad"
          headingLevel="3"
          brødtekst="Du får stønad til og med 31.12.2024"
          url={'/overgangsstonad'}
          redirect="intern"
          ikon={<Overgangsstønad width={44} height={44} />}
        />
      )}
      {harBarnetilsyn && (
        <LenkePanel
          tittel="Stønad til barnetilsyn"
          headingLevel="3"
          brødtekst="Du får stønad til og med 30.06.2024"
          url={'/barnetilsyn'}
          redirect="intern"
          ikon={<Barnetilsyn width={44} height={44} />}
        />
      )}
      {harSkolepenger && (
        <LenkePanel
          tittel="Skolepenger"
          headingLevel="3"
          brødtekst="Klikk for å se detaljer"
          url={'/skolepenger'}
          redirect="intern"
          ikon={<Skolepenger width={44} height={44} />}
        />
      )}
    </HStack>
  );
};

export default DineStønader;
