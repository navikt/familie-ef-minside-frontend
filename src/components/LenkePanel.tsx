import { BodyLong, HStack, LinkPanel, VStack } from '@navikt/ds-react';
import styled from 'styled-components';
import { ABorderSubtle, AOrange50, AShadowMedium } from '@navikt/ds-tokens/dist/tokens';
import { desktop } from '../utils/constants';
import { HeadingLevel3 } from './ResponsiveHeadinger';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Stønad, StønadType } from '../interfaces/stønader';
import { formaterNullableIsoDato } from '../utils/formatter';
import { Overgangsstønad } from '../icons/Overgangsstønad';
import { Barnetilsyn } from '../icons/Barnetilsyn';
import { Skolepenger } from '../icons/Skolepenger';
import { utledKomponentTittel } from '../pages/Forside/utils';
import { useLocaleIntlContext } from '../context/LocaleIntlContext';

interface Props {
  className?: string;
  headingLevel: '1' | '2' | '3' | '4' | '5';
  stønad: Stønad;
  stønadType: StønadType;
  url: string;
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

const LenkePanel: React.FC<Props> = ({ className, headingLevel, stønad, stønadType, url }) => {
  const navigate = useNavigate();
  const { tekst } = useLocaleIntlContext();

  const href = `${process.env.PUBLIC_URL}${url}`;
  const ikon = utledIkon(stønadType);
  const tittel = tekst(utledKomponentTittel(stønadType));
  const brødtekst = utledBrødtekst(stønadType, stønad, tekst);

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    navigate(url);
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

const utledBrødtekst = (
  stønadType: StønadType,
  stønad: Stønad,
  tekst: (key: string, params?: string[]) => string
) => {
  if (stønadType === 'skolepenger') {
    return <BodyLong>{tekst('tekst.seDetaljer')}</BodyLong>;
  }

  const startDato = formaterNullableIsoDato(stønad.startDato);
  const sluttDato = formaterNullableIsoDato(stønad.sluttDato);

  if (startDato && sluttDato) {
    <BodyLong>{tekst('tekst.fraTil', [startDato, sluttDato])}</BodyLong>;
  }
  if (sluttDato) {
    return <BodyLong>{tekst('stønad.tilOgMed', [sluttDato])}</BodyLong>;
  }

  return <BodyLong>{tekst('tekst.seDetaljer')}</BodyLong>;
};

export default LenkePanel;
