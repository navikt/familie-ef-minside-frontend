import ResponsiveHeading from '../../components/ResponsiveHeading';
import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import { useApp } from '../../context/AppContext';
import LenkePanelLiten from '../../components/LenkePanelLiten';
import { Overgangsstønad } from '../../icons/Overgangsstønad';
import { Barnetilsyn } from '../../icons/Barnetilsyn';
import { Skolepenger } from '../../icons/Skolepenger';

const LenkePanelLitenListe: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <ResponsiveFlexbox $gap="0.5rem" $direction="column">
      <ResponsiveHeading size={'medium'}>Ønsker du å søke?</ResponsiveHeading>
      <ResponsiveFlexbox $gap="1rem">
        <LenkePanelLiten
          tittel="Søknad om overgangsstønad"
          ikon={<Overgangsstønad width={52} height={52} />}
          url={appEnv.søknadOvergangsstønadUrl}
        />
        <LenkePanelLiten
          tittel="Søknad om stønad til barnetilsyn"
          ikon={<Barnetilsyn width={52} height={52} />}
          url={appEnv.søknadBarnetilsynUrl}
        />
        <LenkePanelLiten
          tittel="Søknad om stønad til skolepenger"
          ikon={<Skolepenger width={52} height={52} />}
          url={appEnv.søknadSkolepengerUrl}
        />
      </ResponsiveFlexbox>
    </ResponsiveFlexbox>
  );
};

export default LenkePanelLitenListe;
