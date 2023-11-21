import {BodyShort, Panel} from "@navikt/ds-react";

interface Props {
    ikon: React.ReactNode;
    tittel: string;
    url: string;
}

const LenkePanel: React.FC<Props> = ({ikon, tittel, url}) => {
    return (
        <Panel href={url} border={true} as={"a"}>
            <div aria-hidden={true}>{ikon}</div>
            <BodyShort>{tittel}</BodyShort>
        </Panel>
    );
}

export default LenkePanel;