import ResponsiveHeading from '../../components/ResponsiveHeading';
import ResponsiveFlexbox from '../../components/ResponsiveFlexbox';
import { useApp } from '../../context/AppContext';
import { Overgangsstønad } from '../../icons/Overgangsstønad';
import { Barnetilsyn } from '../../icons/Barnetilsyn';
import { Skolepenger } from '../../icons/Skolepenger';
import StønadPanel from '../../components/StønadPanel';

const StønadPanelListe: React.FC = () => {
  const { appEnv } = useApp();

  return (
    <ResponsiveFlexbox $gap="0.5rem" $direction="column">
      <ResponsiveHeading size={'medium'} level="2">
        Ønsker du å søke?
      </ResponsiveHeading>
      <ResponsiveFlexbox $gap="1rem">
        <StønadPanel
          tittel="Overgangsstønad"
          headingLevel="3"
          brødtekst="Sikrer deg inntekt i inntil 3 år når du har minst 60 prosent av den daglige omsorgen for barn under 8 år."
          ikon={<Overgangsstønad width={44} height={44} />}
          url={appEnv.søknadOvergangsstønadUrl}
          lenkeTekst="Les mer om overgangsstønad"
          knappTekst="Søk overgangsstønad"
        />
        <StønadPanel
          tittel="Stønad til barnetilsyn"
          headingLevel="3"
          brødtekst="Dekker deler av utgiftene til barnehage, skolefritidsordning (SFO) eller dagmamma når du er alene med barn og er i arbeid."
          ikon={<Barnetilsyn width={44} height={44} />}
          url={appEnv.søknadBarnetilsynUrl}
          lenkeTekst="Les mer om stønad til barnetilsyn"
          knappTekst="Søk stønad til barnetilsyn"
        />
        <StønadPanel
          tittel="Stønad til skolepenger"
          headingLevel="3"
          brødtekst="Dekker utgifter til studieavgift, semesteravgift og eksamensgebyr når du tar utdanning og er alene med barn."
          ikon={<Skolepenger width={44} height={44} />}
          url={appEnv.søknadSkolepengerUrl}
          lenkeTekst="Les mer om stønad til skolepenger"
          knappTekst="Søk stønad til skolepenger"
        />
      </ResponsiveFlexbox>
    </ResponsiveFlexbox>
  );
};

export default StønadPanelListe;
