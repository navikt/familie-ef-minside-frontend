import { Heading, LinkPanel } from '@navikt/ds-react';
import styled from 'styled-components';

const InnerContainer = styled(LinkPanel.Title)<{ kompakt?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.kompakt ? '0.1rem' : '1rem')};
`;

const StyledLinkPanel = styled(LinkPanel)<{ kompakt?: boolean }>`
  max-width: 18.125rem;
  max-height: 5.25rem;
  border-radius: 0.5rem;

  ${(props) =>
    props.kompakt &&
    `
    gap: 0.2rem;
  `}
`;

interface Props {
  tittel: string;
  url: string;
  ikon: React.ReactNode;
  kompaktVisning?: boolean;
}

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
