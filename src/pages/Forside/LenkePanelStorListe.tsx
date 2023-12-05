import ResponsiveHeading from '../../components/ResponsiveHeading';
import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import LenkePanelStor from '../../components/LenkePanelStor';
import { Søknad } from '../../icons/Søknad';
import { Ettersending } from '../../icons/Ettersending';
import { useApp } from '../../context/AppContext';

const LenkePanelStorListe: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <ResponsiveFlexbox $gap="0.5rem" $direction="column">
      <ResponsiveHeading size={'medium'} level="2">
        Melde fra eller ettersende dokumentasjon?
      </ResponsiveHeading>
      <ResponsiveFlexbox $gap="1rem">
        <LenkePanelStor
          tittel="Endringsmelding"
          headingLevel="3"
          brødtekst="Ved endring i inntekt, aktivitet eller annet som påvirker din stønad."
          url={appEnv.endringsmeldingUrl}
          ikon={<Søknad farge="grønn" />}
        />
        <LenkePanelStor
          tittel="Ettersendelse"
          headingLevel="3"
          brødtekst="Her kan du ettersende dokumenter til din sak."
          url={appEnv.ettersendingUrl}
          ikon={<Ettersending />}
        />
      </ResponsiveFlexbox>
    </ResponsiveFlexbox>
  );
};

export default LenkePanelStorListe;
