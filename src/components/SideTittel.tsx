import { AleneMedBarn } from '../icons/AleneMedBarn';
import styles from './SideTittel.module.css';
import { HStack, VStack } from '@navikt/ds-react';
import React from 'react';
import { HeadingLevel1, UnderTittel } from './ResponsiveHeadinger';

interface Props {
  tittel: string;
  underTittel?: string;
  ikon?: boolean;
}

export const SideTittel: React.FC<Props> = ({ tittel, underTittel, ikon }) => (
  <HStack gap="4">
    {ikon && (
      <div aria-hidden={true} className={styles.ikonContainer}>
        <AleneMedBarn />
      </div>
    )}
    <VStack>
      <HeadingLevel1 size="medium" level="1">
        {tittel}
      </HeadingLevel1>
      {underTittel && <UnderTittel>{underTittel}</UnderTittel>}
    </VStack>
  </HStack>
);
