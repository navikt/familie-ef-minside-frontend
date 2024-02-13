import { breadCrumbOvergangsstønad, contentWidthMobile } from '../../utils/constants';
import React from 'react';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import SideTittel from '../../components/SideTittel';
import { Grid, Stripe } from './Grid';
import { Alert, BodyLong, Table } from '@navikt/ds-react';
import LenkePanelStorListe from './LenkePanelStorListe';
import styled from 'styled-components';
import { Stønad, Stønader } from '../../interfaces/stønader';
import DataViewer from '../../components/DataViewer';
import { formaterIsoDato, formaterTallMedTusenSkille } from '../../utils/formatter';

const Tabell = styled(Table)`
  max-width: ${contentWidthMobile}px;
`;

const Overgangsstønad: React.FC = () => {
  const { appEnv, stønader, stønadStatus } = useApp();

  setBreadcrumbs([...appEnv.defaultBreadcrumbs, breadCrumbOvergangsstønad]);

  const tittel = 'Din overgangsstønad';

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <SideTittel tittel={tittel} />
        <DataViewer
          dataStatus={stønadStatus}
          loaderTekst="Henter din overgangsstønad"
          alertTekst="Noe gikk galt ved uthenting av din overgangsstønad."
        >
          <StønadTabell stønad={stønader.overgangsstønad} />
        </DataViewer>
      </Grid>
      <Stripe>
        <LenkePanelStorListe />
      </Stripe>
    </main>
  );
};

const StønadTabell: React.FC<{ stønad: Stønad }> = ({ stønad }) => {
  const harStønad = stønad.perioder.length > 0;

  if (!harStønad) {
    return (
      <Alert variant="info">
        Vi fant ingen overgangsstønad å vise. Denne teksten må avklares med teamet. // TODO
      </Alert>
    );
  }

  const sortertePerioder = stønad.perioder.slice().sort((a, b) => (a.fraDato < b.fraDato ? 1 : -1));

  return (
    <>
      <BodyLong>
        Tabellen viser periodene dine med overgangsstønad og hvor mye du har fått/får i stønad per
        måned før skatt. For å se hvordan vi har regnet ut stønadsbeløpet, må du lese vedtaket ditt.
        Du finner alle vedtakene dine i dokumentoversikten lengre ned på siden.
      </BodyLong>
      <Tabell>
        <Table.Header>
          <Table.HeaderCell>Periode</Table.HeaderCell>
          <Table.HeaderCell>Beløp per måned før skatt</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {sortertePerioder.map((periode) => {
            const fraDato = formaterIsoDato(periode.fraDato);
            const tilDato = formaterIsoDato(periode.tilDato);
            const beløp = `${formaterTallMedTusenSkille(periode.beløp)} kr`;
            return (
              <Table.Row>
                <Table.DataCell>{`${fraDato} - ${tilDato}`}</Table.DataCell>
                <Table.DataCell align="right">{beløp}</Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Tabell>
    </>
  );
};

export default Overgangsstønad;
