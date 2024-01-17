export interface PersonData {
  ident: string;
  visningsnavn: string;
}

export const initiellPersonData = {
  ident: '',
  visningsnavn: '',
};

export const formatertPersonData = (personData: PersonData): PersonData => {
  return {
    ident: personData.ident,
    visningsnavn: formaterNavn(personData.visningsnavn),
  };
};

const formaterNavn = (navn: string) =>
  navn
    .toLowerCase()
    .split(' ')
    .map((str: string) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ');
