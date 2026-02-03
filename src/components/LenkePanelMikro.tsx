import { Heading, LinkPanel } from '@navikt/ds-react';
import styled from 'styled-components';
import { BorderAccentSubtleA } from '@navikt/ds-tokens/dist/tokens';
import { desktop } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

interface Props {
  tittel: string;
  url: string;
  redirect: 'ekstern' | 'intern';
}

const StyledLinkPanel = styled(LinkPanel)`
  width: 100%;
  border-radius: 0.5rem;
  border-color: ${BorderAccentSubtleA};

  @media (min-width: ${desktop}px) {
    max-width: 18.75rem;
  }
`;

const LenkePanelMikro: React.FC<Props> = ({ tittel, url, redirect }) => {
  const navigate = useNavigate();

  const href = redirect === 'ekstern' ? url : undefined;

  const handleClick = () => {
    if (redirect !== 'ekstern') {
      navigate(url);
    }
  };

  return (
    <StyledLinkPanel href={href} border={true} onClick={handleClick}>
      <Heading size="small" level="3">
        {tittel}
      </Heading>
    </StyledLinkPanel>
  );
};

export default LenkePanelMikro;
