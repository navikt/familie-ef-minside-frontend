import { AleneMedBarn } from '../icons/AleneMedBarn';
import styles from './SideTittel.module.css';
import { BodyShort, Heading, HStack, VStack } from '@navikt/ds-react';
import React from 'react';

interface Props {
  tittel: string;
  underTittel?: string;
  ikon?: boolean;
}

export const SideTittel: React.FC<Props> = ({ tittel, underTittel, ikon }) => (
  <HStack gap="space-4">
    {ikon && (
      <div aria-hidden={true} className={styles.ikonContainer}>
        <AleneMedBarn />
      </div>
    )}
    <VStack>
      <Heading size="xlarge" level="1">
        {tittel}
      </Heading>
      {underTittel && <BodyShort>{underTittel}</BodyShort>}
    </VStack>
  </HStack>
);
