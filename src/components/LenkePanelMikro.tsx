import { Heading, LinkPanel } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';
import { logNavigering } from '../amplitude/amplitude';
import { desktop } from '../utils';

interface Props {
  tittel: string;
  headingLevel: '1' | '2' | '3' | '4' | '5';
  url: string;
}

const StyledLinkPanel = styled(LinkPanel)`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: ${AShadowMedium};
  border-color: ${ABorderSubtle};

  @media (min-width: ${desktop}px) {
    max-width: 18.75rem;
  }
`;

const LenkePanelMikro: React.FC<Props> = ({ tittel, headingLevel, url }) => (
  <StyledLinkPanel
    href={url}
    border={true}
    onClick={() => logNavigering(url, tittel, 'lenke-panel-mikro')}
  >
    <Heading size={'small'} level={headingLevel}>
      {tittel}
    </Heading>
  </StyledLinkPanel>
);

export default LenkePanelMikro;
