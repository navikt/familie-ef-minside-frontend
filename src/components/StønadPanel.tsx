import {
  BodyLong,
  Heading,
  Panel,
  HStack,
  VStack,
  Link,
  Button,
} from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';
import React from 'react';

interface Props {
  tittel: string;
  headingLevel: '1' | '2' | '3' | '4' | '5';
  brødtekst: string;
  url: string;
  ikon: React.ReactNode;
  lenkeTekst: string;
  knappTekst: string;
}

const Container = styled(Panel)`
  max-width: 18.75rem;
  padding: 1.25rem;
  box-shadow: ${AShadowMedium};
  border-color: ${ABorderSubtle};
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`;

const IkonContainer = styled.div`
  height: 2.75rem;
`;

const StønadPanel: React.FC<Props> = ({
  tittel,
  headingLevel,
  brødtekst,
  url,
  ikon,
  lenkeTekst,
  knappTekst,
}) => (
  <Container border={true}>
    <VStack gap="4">
      <HStack gap="2" align="center" justify="start">
        <IkonContainer aria-hidden={true}>{ikon}</IkonContainer>
        <Heading size={'xsmall'} level={headingLevel}>
          {tittel}
        </Heading>
      </HStack>
      <BodyLong>{brødtekst}</BodyLong>
    </VStack>
    <VStack gap="4">
      <Link href={url}>{lenkeTekst}</Link>
      <Button variant="secondary">{knappTekst}</Button>
    </VStack>
  </Container>
);

export default StønadPanel;
