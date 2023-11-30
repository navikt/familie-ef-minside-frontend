import { Heading, LinkPanel } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';

interface Props {
  tittel: string;
  url: string;
  ikon: React.ReactNode;
  kompaktVisning?: boolean;
}

const InnerContainer = styled(LinkPanel.Title)<{ kompakt?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.kompakt ? '0.1rem' : '1rem')};
`;

const StyledLinkPanel = styled(LinkPanel)<{ kompakt?: boolean }>`
  max-width: 18.125rem;
  max-height: 5.5rem;
  border-radius: 0.5rem;
  box-shadow: ${AShadowMedium};
  border-color: ${ABorderSubtle};

  ${(props) =>
    props.kompakt &&
    `
    gap: 0.2rem;
  `}
`;

const LenkePanelLiten: React.FC<Props> = ({
  tittel,
  url,
  ikon,
  kompaktVisning,
}) => (
  <StyledLinkPanel href={url} border={true} kompakt={kompaktVisning}>
    <InnerContainer kompakt={kompaktVisning}>
      <div aria-hidden={true}>{ikon}</div>
      <Heading size={'xsmall'}>{tittel}</Heading>
    </InnerContainer>
  </StyledLinkPanel>
);

export default LenkePanelLiten;
