import { BodyLong, Heading, LinkPanel, VStack } from '@navikt/ds-react';
import styled from 'styled-components';

const InnerContainer = styled(LinkPanel.Title)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLinkPanel = styled(LinkPanel)`
  max-width: 27.75rem;
  max-height: 7.75rem;
  border-radius: 0.5rem;
`;

interface Props {
  tittel: string;
  brødtekst: string;
  url: string;
  ikon: React.ReactNode;
}

const LenkePanelStor: React.FC<Props> = ({ tittel, brødtekst, url, ikon }) => (
  <StyledLinkPanel href={url} border={true}>
    <InnerContainer>
      <div aria-hidden={true}>{ikon}</div>
      <VStack>
        <Heading size={'xsmall'}>{tittel}</Heading>
        <BodyLong textColor="subtle">{brødtekst}</BodyLong>
      </VStack>
    </InnerContainer>
  </StyledLinkPanel>
);

export default LenkePanelStor;
