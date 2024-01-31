export const åpneFilIEgenTab = (
  journalpostId: string,
  dokumentinfoId: string,
  variantFormat: string,
  filnavn: string
): void => {
  const newWindow = window.open(
    `/dokument/journalpost/${journalpostId}/dokument-pdf/${dokumentinfoId}/variantformat/${variantFormat}`,
    '_blank'
  );
  setTimeout(function () {
    if (newWindow) {
      newWindow.document.title = filnavn;
    }
  }, 500);
};
