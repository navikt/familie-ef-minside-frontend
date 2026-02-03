import { BodyLong, Heading, LinkPanel, VStack } from '@navikt/ds-react';
import styled from 'styled-components';
import { BorderNeutralSubtle, ShadowDialog } from '@navikt/ds-tokens/dist/tokens';
import { logNavigering } from '../amplitude/amplitude';
import { desktop } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

interface Props {
  tittel: string;
  brødtekst: string;
  url: string;
  redirect: 'ekstern' | 'intern';
  className?: string;
}

const StyledLinkPanel = styled(LinkPanel)`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: ${ShadowDialog};
  border-color: ${BorderNeutralSubtle};
  padding-left: 1.5rem;
  height: 7rem;
  vertical-align: top;

  @media (min-width: ${desktop}px) {
    max-width: 28.625rem;

    .navds-link-panel__content {
      height: 100%;
    }
  }
`;

const LenkePanelStor: React.FC<Props> = ({ tittel, brødtekst, url, redirect, className }) => {
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
    <StyledLinkPanel href={href} border={true} onClick={handleClick} className={className}>
      <VStack>
        <Heading size="small" level="3">
          {tittel}
        </Heading>
        <BodyLong textColor="subtle">{brødtekst}</BodyLong>
      </VStack>
    </StyledLinkPanel>
  );
};

export default LenkePanelStor;
