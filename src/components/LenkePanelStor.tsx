import { BodyLong, Heading, LinkPanel, VStack } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';

interface Props {
  tittel: string;
  headingLevel: '1' | '2' | '3' | '4' | '5';
  brødtekst: string;
  url: string;
  ikon: React.ReactNode;
}

const InnerContainer = styled(LinkPanel.Title)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLinkPanel = styled(LinkPanel)`
  max-width: 28.625rem;
  border-radius: 0.5rem;
  box-shadow: ${AShadowMedium};
  border-color: ${ABorderSubtle};
`;

const LenkePanelStor: React.FC<Props> = ({
  tittel,
  headingLevel,
  brødtekst,
  url,
  ikon,
}) => (
  <StyledLinkPanel href={url} border={true}>
    <InnerContainer>
      <div aria-hidden={true}>{ikon}</div>
      <VStack>
        <Heading size={'small'} level={headingLevel}>
          {tittel}
        </Heading>
        <BodyLong textColor="subtle">{brødtekst}</BodyLong>
      </VStack>
    </InnerContainer>
  </StyledLinkPanel>
);

export default LenkePanelStor;
