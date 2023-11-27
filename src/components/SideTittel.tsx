import { AleneMedBarn } from '../ikoner/AleneMedBarn';
import { Heading, HStack } from '@navikt/ds-react';

const SideTittel: React.FC = () => (
  <HStack gap="4">
    <AleneMedBarn />
    <Heading size="xlarge">Din oversikt - enslig forsørger</Heading>
  </HStack>
);

export default SideTittel;
