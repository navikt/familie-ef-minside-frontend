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
import { logNavigering } from '../amplitude/amplitude';

interface Props {
  tittel: string;
  headingLevel: '1' | '2' | '3' | '4' | '5';
  brødtekst: string;
  lenkeTekst: string;
  lenkeUrl: string;
  knappTekst: string;
  knappUrl: string;
  ikon: React.ReactNode;
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
  lenkeTekst,
  lenkeUrl,
  knappTekst,
  knappUrl,
  ikon,
}) => (
  <Container border={true}>
    <VStack gap="4">
      <HStack gap="2" align="center" justify="start">
        <IkonContainer aria-hidden={true}>{ikon}</IkonContainer>
        <Heading size={'small'} level={headingLevel}>
          {tittel}
        </Heading>
      </HStack>
      <BodyLong>{brødtekst}</BodyLong>
    </VStack>
    <VStack gap="4">
      <Link
        href={lenkeUrl}
        onClick={() => logNavigering(lenkeUrl, lenkeTekst, 'stønad-panel')}
      >
        {lenkeTekst}
      </Link>
      <Button
        variant="secondary"
        role="link"
        onClick={() => {
          logNavigering(knappUrl, knappTekst, 'button');
          window.location.href = knappUrl;
        }}
      >
        {knappTekst}
      </Button>
    </VStack>
  </Container>
);

export default StønadPanel;
