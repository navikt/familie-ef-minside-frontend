import { HStack, Loader } from '@navikt/ds-react';
import React from 'react';

interface Props {
  size?: '3xlarge' | '2xlarge' | 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall';
  title: string;
}
const DataLoader: React.FC<Props> = ({ size, title }) => (
  <main id="maincontent" tabIndex={-1} role="main">
    <HStack justify="center">
      <Loader size={size} title={title} />
    </HStack>
  </main>
);

export default DataLoader;
