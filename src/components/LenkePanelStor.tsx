import { BodyLong, LinkPanel, VStack } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';
import { logNavigering } from '../amplitude/amplitude';
import { desktop } from '../utils/constants';
import { HeadingLevel3 } from './ResponsiveHeadinger';
import { useNavigate } from 'react-router-dom';

interface Props {
  tittel: string;
  headingLevel: '1' | '2' | '3' | '4' | '5';
  brødtekst: string;
  url: string;
  redirect: 'ekstern' | 'intern';
  className?: string;
}

const StyledLinkPanel = styled(LinkPanel)`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: ${AShadowMedium};
  border-color: ${ABorderSubtle};
  padding-left: 1.5rem;
  min-height: 6.75rem;

  @media (min-width: ${desktop}px) {
    max-width: 28.625rem;

    .navds-link-panel__content {
      height: 100%;
    }
  }
`;

const LenkePanelStor: React.FC<Props> = ({
  tittel,
  headingLevel,
  brødtekst,
  url,
  redirect,
  className,
}) => {
  const navigate = useNavigate();

  const href = redirect === 'ekstern' ? url : `${process.env.PUBLIC_URL}${url}`;

  const handleClick = (e: React.SyntheticEvent) => {
    if (redirect === 'ekstern') {
      logNavigering(url, tittel, 'lenke-panel-stor');
    } else {
      e.preventDefault();
      navigate(url);
    }
  };

  return (
    <StyledLinkPanel
      href={href}
      border={true}
      onClick={handleClick}
      className={className}
    >
      <VStack>
        <HeadingLevel3 size="xsmall" level={headingLevel}>
          {tittel}
        </HeadingLevel3>
        <BodyLong textColor="subtle">{brødtekst}</BodyLong>
      </VStack>
    </StyledLinkPanel>
  );
};

export default LenkePanelStor;
