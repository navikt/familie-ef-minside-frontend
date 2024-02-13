import { breadCrumbOvergangsstønad } from '../../utils/constants';
import React from 'react';
import { setBreadcrumbs } from '@navikt/nav-dekoratoren-moduler';
import { useApp } from '../../context/AppContext';
import SideTittel from '../../components/SideTittel';
import { Grid, Stripe } from './Grid';
import { BodyLong, Table } from '@navikt/ds-react';
import LenkePanelStorListe from './LenkePanelStorListe';

const Overgangsstønad: React.FC = () => {
  const { appEnv } = useApp();

  setBreadcrumbs([...appEnv.defaultBreadcrumbs, breadCrumbOvergangsstønad]);

  const tittel = 'Din overgangsstønad';

  return (
    <main id="maincontent" tabIndex={-1} role="main">
      <Grid>
        <SideTittel tittel={tittel} />
        <BodyLong>
          Tabellen viser periodene dine med overgangsstønad og hvor mye du har fått/får i stønad per
          måned før skatt. For å se hvordan vi har regnet ut stønadsbeløpet, må du lese vedtaket
          ditt. Du finner alle vedtakene dine i dokumentoversikten lengre ned på siden.
        </BodyLong>
        <Table>
          <Table.Header>
            <Table.HeaderCell>Periode</Table.HeaderCell>
            <Table.HeaderCell>Beløp per måned før skatt</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>01.01.2024 - 30.09.2025</Table.DataCell>
              <Table.DataCell>19 065 kr</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>01.12.2023 - 31.12.2023</Table.DataCell>
              <Table.DataCell> 4 125 kr</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>01.11.2023 - 30.11.2023</Table.DataCell>
              <Table.DataCell>13 665 kr</Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Grid>
      <Stripe>
        <LenkePanelStorListe />
      </Stripe>
    </main>
  );
};

export default Overgangsstønad;
