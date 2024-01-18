import { BodyLong, Heading, LinkPanel, VStack } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';
import { logNavigering } from '../amplitude/amplitude';
import { useApp } from '../context/AppContext';
import { Device } from '../hooks/useResponsive';
import { desktop } from '../utils';

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
}) => {
  const { currentDevice } = useApp();

  const tittelSize = currentDevice === Device.MOBILE ? 'xsmall' : 'small';

  return (
    <StyledLinkPanel
      href={url}
      border={true}
      onClick={() => logNavigering(url, tittel, 'lenke-panel-stor')}
    >
      <InnerContainer>
        <div aria-hidden={true}>{ikon}</div>
        <VStack>
          <Heading size={tittelSize} level={headingLevel}>
            {tittel}
          </Heading>
          <BodyLong textColor="subtle">{brødtekst}</BodyLong>
        </VStack>
      </InnerContainer>
    </StyledLinkPanel>
  );
};

export default LenkePanelStor;
