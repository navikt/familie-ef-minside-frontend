import { BodyLong, HStack, LinkPanel, VStack } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AOrange50, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';
import { logNavigering } from '../amplitude/amplitude';
import { desktop } from '../utils/constants';
import { HeadingLevel3 } from './ResponsiveHeadinger';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Stønad, StønadType } from '../interfaces/stønader';
import { formaterNullableIsoDato, formaterStorForbokstav } from '../utils/formatter';
import { Overgangsstønad } from '../icons/Overgangsstønad';
import { Barnetilsyn } from '../icons/Barnetilsyn';
import { Skolepenger } from '../icons/Skolepenger';

interface Props {
  className?: string;
  headingLevel: '1' | '2' | '3' | '4' | '5';
  redirect: 'ekstern' | 'intern';
  stønad: Stønad;
  stønadType: StønadType;
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

const Bold = styled.b`
  text-decoration-line: underline;
`;

const LenkePanel: React.FC<Props> = ({ className, headingLevel, redirect, stønad, stønadType }) => {
  const navigate = useNavigate();

  const url = `/${stønadType}`;
  const ikon = utledIkon(stønadType);
  const tittel = formaterStorForbokstav(stønadType);
  const href = redirect === 'ekstern' ? url : `${process.env.PUBLIC_URL}${url}`;
  const brødtekst = utledBrødtekst(stønad);

  const handleClick = (e: React.SyntheticEvent) => {
    if (redirect === 'ekstern') {
      logNavigering(url, tittel, 'lenke-panel');
    } else {
      e.preventDefault();
      navigate(url);
    }
  };

  return (
    <StyledLinkPanel href={href} border={true} onClick={handleClick} className={className}>
      <HStack gap="4" align="center" wrap={false}>
        <IkonContainer aria-hidden={true}>{ikon}</IkonContainer>
        <VStack>
          <HeadingLevel3 size="xsmall" level={headingLevel}>
            {tittel}
          </HeadingLevel3>
          {brødtekst}
        </VStack>
      </HStack>
    </StyledLinkPanel>
  );
};

const utledIkon = (stønadType: StønadType) => {
  switch (stønadType) {
    case 'overgangsstønad':
      return <Overgangsstønad width={44} height={44} />;
    case 'barnetilsyn':
      return <Barnetilsyn width={44} height={44} />;
    case 'skolepenger':
      return <Skolepenger width={44} height={44} />;
  }
};

const utledBrødtekst = (stønad: Stønad) => {
  const startDato = formaterNullableIsoDato(stønad.startDato);
  const sluttDato = formaterNullableIsoDato(stønad.sluttDato);

  if (startDato && sluttDato) {
    return (
      <BodyLong>
        Du har stønad fra og med <Bold>{startDato}</Bold> til og med <Bold>{sluttDato}</Bold>
      </BodyLong>
    );
  }
  if (sluttDato) {
    return (
      <BodyLong>
        Innvilget frem til og med <Bold>{sluttDato}</Bold>
      </BodyLong>
    );
  }

  return <BodyLong>Klikk for å se detaljer</BodyLong>;
};

export default LenkePanel;
