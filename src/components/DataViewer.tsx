import React, { ReactNode } from 'react';
import { DataStatus } from '../interfaces/dataStatus';
import { Alert, HStack, Loader } from '@navikt/ds-react';

interface Props {
  children: ReactNode;
  dataStatus: DataStatus;
  loaderTekst: string;
  alertTekst: string;
}
const DataViewer: React.FC<Props> = ({ children, dataStatus, loaderTekst, alertTekst }) => {
  if (dataStatus === DataStatus.HENTER) {
    return (
      <HStack justify="center">
        <Loader size="xlarge" title={loaderTekst} />
      </HStack>
    );
  }
  if (dataStatus === DataStatus.FEILET) {
    return <Alert variant="error">{alertTekst}</Alert>;
  }

  return <>{children}</>;
};

export default DataViewer;
