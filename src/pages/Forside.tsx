import {Heading} from "@navikt/ds-react";
import styled from "styled-components";
import LenkePanel from "../components/LenkePanel";
import {SøknadIkon} from "../ikoner/SøknadIkon";

const PageContainer = styled.div``;

const Forside: React.FC = () => {
    return (
        <PageContainer>
            <Heading size={'large'}>Min side</Heading>
            <LenkePanel ikon={<SøknadIkon />} tittel='Søknad om overgangsstønad' url={''}/>
        </PageContainer>
    );
}

export default Forside;