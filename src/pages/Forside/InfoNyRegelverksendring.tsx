import React from 'react';
import { InformationSquareIcon } from '@navikt/aksel-icons';
import { Alert, Heading, InfoCard } from '@navikt/ds-react';

export const InfoNyRegelverksendring: React.FC = () => {
  return (
    <>
      <InfoCard data-color="info">
        <InfoCard.Header icon={<InformationSquareIcon aria-hidden />}>
          <InfoCard.Title>
            Statsbudsjettet for 2026 varsler endring i ytelsene til enslig mor eller far
          </InfoCard.Title>
        </InfoCard.Header>
        <InfoCard.Content>
          I vedtatt statsbudsjett for 2026 er det lagt opp til endringer i stønadene til enslig mor
          eller far. Endringene innebærer at overgangsstønad og andre ytelser knyttet til det å være
          enslig mor eller far skal fases ut for hovedgruppen av mottakere.
        </InfoCard.Content>
        <InfoCard.Content>
          Noen grupper skal fortsatt ha rett til overgangsstønad. Det gjelder de som har aleneomsorg
          for barn under 14 måneder eller barn med særlig tilsynsbehov.
        </InfoCard.Content>
        <InfoCard.Content>
          Endringene skal kun gjelde nye saker fra 1. juli 2026. Ingen som mottar stønadene i dag
          vil miste det de allerede er innvilget.
        </InfoCard.Content>
        <InfoCard.Content>
          Stortinget vil behandle og fatte et endelig vedtak om endringene og et mer detaljert
          regelverk i løpet av våren.
        </InfoCard.Content>
        <InfoCard.Content>Vi oppdaterer denne teksten så snart vi vet mer.</InfoCard.Content>
      </InfoCard>

      <Alert variant="info">
        <Heading spacing size="small" level="3">
          Statsbudsjettet for 2026 varsler endring i ytelsene til enslig mor eller far
        </Heading>
        I vedtatt statsbudsjett for 2026 er det lagt opp til endringer i stønadene til enslig mor
        eller far. Endringene innebærer at overgangsstønad og andre ytelser knyttet til det å være
        enslig mor eller far skal fases ut for hovedgruppen av mottakere.
        <br />
        <br />
        Noen grupper skal fortsatt ha rett til overgangsstønad. Det gjelder de som har aleneomsorg
        for barn under 14 måneder eller barn med særlig tilsynsbehov.
        <br />
        <br />
        Endringene skal kun gjelde nye saker fra 1. juli 2026.Ingen som mottar stønadene i dag vil
        miste det de allerede er innvilget.
        <br />
        <br />
        Stortinget vil behandle og fatte et endelig vedtak om endringene og et mer detaljert
        regelverk i løpet av våren.
        <br />
        <br />
        Vi oppdaterer denne teksten så snart vi vet mer.
      </Alert>
    </>
  );
};
