import { LinkPanel } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';
import { logNavigering } from '../amplitude/amplitude';
import { desktop } from '../utils/constants';
import { HeadingLevel3 } from './ResponsiveHeadinger';
import { useNavigate } from 'react-router-dom';

interface Props {
  tittel: string;
  headingLevel: '1' | '2' | '3' | '4' | '5';
  url: string;
  redirect: 'ekstern' | 'intern';
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

const LenkePanelMikro: React.FC<Props> = ({ tittel, headingLevel, url, redirect }) => {
  const navigate = useNavigate();

  const href = redirect === 'ekstern' ? url : undefined;

  const handleClick = () => {
    if (redirect === 'ekstern') {
      logNavigering(url, tittel, 'lenke-panel-mikro');
    } else {
      navigate(url);
    }
  };

  return (
    <StyledLinkPanel href={href} border={true} onClick={handleClick}>
      <HeadingLevel3 size="xsmall" level={headingLevel}>
        {tittel}
      </HeadingLevel3>
    </StyledLinkPanel>
  );
};

export default LenkePanelMikro;
