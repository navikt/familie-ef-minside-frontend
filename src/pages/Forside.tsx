import {Heading, HStack} from "@navikt/ds-react";
import styled from "styled-components";
import LenkePanelLiten from "../components/LenkePanelLiten";
import {Søknad} from "../ikoner/Søknad";
import {Overgangsstønad} from "../ikoner/Overgangsstønad";
import {Barnetilsyn} from "../ikoner/Barnetilsyn";
import {Skolepenger} from "../ikoner/Skolepenger";

const SideContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  gap: 2rem;
  justify-self: center;
`;

const Forside: React.FC = () => {
    return (
        <SideContainer>
            <Heading size={'large'}>Min side</Heading>
            <Heading size={'medium'}>Melde fra eller ettersende dokumentasjon?</Heading>
            <Heading size={'medium'}>Ønsker du å søke?</Heading>
            <HStack gap={'4'}>
                <LenkePanelLiten tittel='Søknad om overgangsstønad' ikon={<Søknad farge={'rød'}/>} url={'www.nav.no'}/>
                <LenkePanelLiten tittel='Søknad om stønad til barnetilsyn' ikon={<Søknad farge={'rød'}/>} url={'www.nav.no'}/>
                <LenkePanelLiten tittel='Søknad om stønad til skolepenger' ikon={<Søknad farge={'rød'}/>} url={'www.nav.no'}/>
            </HStack>
            <Heading size={'medium'}>Ønsker du å lese mer om stønadene?</Heading>
            <HStack gap={'4'}>
                <LenkePanelLiten tittel='Overgangsstønad' ikon={<Overgangsstønad />} url={'https://www.nav.no/overgangsstonad-enslig'}/>
                <LenkePanelLiten tittel='Stønad til Barnetilsyn' ikon={<Barnetilsyn />} url={'https://www.nav.no/barnetilsyn-enslig'}/>
                <LenkePanelLiten tittel='Stønad til skolepenger' ikon={<Skolepenger />} url={'https://www.nav.no/skolepenger-enslig'}/>
            </HStack>
            <Heading size={'medium'}>Snarveier</Heading>
        </SideContainer>
    );
}

export default Forside;