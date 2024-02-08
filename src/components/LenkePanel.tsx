import { BodyLong, HStack, LinkPanel, VStack } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AOrange50, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';
import { logNavigering } from '../amplitude/amplitude';
import { desktop } from '../utils/constants';
import { HeadingLevel3 } from './ResponsiveHeadinger';
import { useNavigate } from 'react-router-dom';
import React from 'react';

interface Props {
  tittel: string;
  headingLevel: '1' | '2' | '3' | '4' | '5';
  brødtekst: string;
  url: string;
  redirect: 'ekstern' | 'intern';
  className?: string;
  ikon: React.ReactNode;
}

const StyledLinkPanel = styled(LinkPanel)`
  width: 100%;
  padding-left: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: ${AShadowMedium};
  background-color: ${AOrange50};
  border-color: ${ABorderSubtle};

  @media (min-width: ${desktop}px) {
    max-width: 28.625rem;

    .navds-link-panel__content {
      height: 100%;
    }
  }
`;

const IkonContainer = styled.div`
  height: 2.75rem;
`;

const LenkePanel: React.FC<Props> = ({
  tittel,
  headingLevel,
  brødtekst,
  url,
  redirect,
  className,
  ikon,
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
    <StyledLinkPanel href={href} border={true} onClick={handleClick} className={className}>
      <HStack gap="4" align="center">
        <IkonContainer aria-hidden={true}>{ikon}</IkonContainer>
        <VStack>
          <HeadingLevel3 size="xsmall" level={headingLevel}>
            {tittel}
          </HeadingLevel3>
          <BodyLong>{brødtekst}</BodyLong>
        </VStack>
      </HStack>
    </StyledLinkPanel>
  );
};

export default LenkePanel;
