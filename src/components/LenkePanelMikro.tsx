import { Heading, LinkPanel } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';

interface Props {
  tittel: string;
  url: string;
}

const StyledLinkPanel = styled(LinkPanel)`
  width: 18.125rem;
  border-radius: 0.5rem;
  box-shadow: ${AShadowMedium};
  border-color: ${ABorderSubtle};
`;

const LenkePanelMikro: React.FC<Props> = ({ tittel, url }) => (
  <StyledLinkPanel href={url} border={true}>
    <Heading size={'xsmall'}>{tittel}</Heading>
  </StyledLinkPanel>
);

export default LenkePanelMikro;
