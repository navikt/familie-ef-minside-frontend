import { BodyLong, LinkPanel, VStack } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';
import { logNavigering } from '../amplitude/amplitude';
import { desktop } from '../utils';
import { HeadingLevel3 } from './ResponsiveHeadinger';

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
  border-radius: 0.5rem;
  box-shadow: ${AShadowMedium};
  border-color: ${ABorderSubtle};

  @media (min-width: ${desktop}px) {
    max-width: 28.625rem;
  }
`;

const LenkePanelStor: React.FC<Props> = ({
  tittel,
  headingLevel,
  brødtekst,
  url,
  ikon,
}) => (
  <StyledLinkPanel
    href={url}
    border={true}
    onClick={() => logNavigering(url, tittel, 'lenke-panel-stor')}
  >
    <InnerContainer>
      <div aria-hidden={true}>{ikon}</div>
      <VStack>
        <HeadingLevel3 size="xsmall" level={headingLevel}>
          {tittel}
        </HeadingLevel3>
        <BodyLong textColor="subtle">{brødtekst}</BodyLong>
      </VStack>
    </InnerContainer>
  </StyledLinkPanel>
);

export default LenkePanelStor;
