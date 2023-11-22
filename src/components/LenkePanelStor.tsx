import { Heading, LinkPanel} from "@navikt/ds-react";
import styled from "styled-components";

const InnerContainer = styled(LinkPanel.Title)`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const StyledLinkPanel = styled(LinkPanel)`
    max-width: 18.125rem;
    max-height: 5.25rem;
    border-radius: 0.5rem;
`;

interface Props {
    tittel: string;
    url: string;
    ikon: React.ReactNode;
}

const LenkePanelStor: React.FC<Props> = ({tittel, url,   ikon}) =>
        <StyledLinkPanel href={url} border={true} >
            <InnerContainer>
                <div aria-hidden={true}>{ikon}</div>
                <Heading size={'xsmall'}>{tittel}</Heading>
            </InnerContainer>
        </StyledLinkPanel>

export default LenkePanelStor;