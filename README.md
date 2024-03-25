# familie-ef-minside
Enslig forsørger - min side

## Kjør lokalt
1. `npm install`
2. Kjør opp `familie-ef-soknad-api` med launcheren `ApplicationLocalLauncher`
3. `npm run start:dev`
4. Sett cookie og naviger til forsiden med `http://localhost:8091/local/cookie?redirect=http://localhost:3000/familie/alene-med-barn/minside&issuerId=tokenx&audience=familie-app`

## Kjør lokalt mot preprod:
1. Hent token fra
    - `https://tokenx-token-generator.intern.dev.nav.no/api/obo?aud=dev-gcp:teamfamilie:familie-ef-soknad-api`
2. `.env` må inneholde følgende
 ``` 
TOKENX_API=<ACCESS_TOKEN>
```
3. `npm install`
4. `npm run start:preprod`
5. Åpne `http://localhost:3000/familie/alene-med-barn/minside` i nettleseren

## Testing
Appen benytter [vitest](https://vitest.dev/) til frontend-testing. Legg gjerne til nye tester etter oppdateringer av utility-filene. 
For å kjøre opp tester lokalt kan man kjøre `npm run test`. 

## Henvendelser
Interne henvendelser kan sendes via Slack i kanalen #team-familie.

## Kode generert av GitHub Copilot
Dette repoet bruker GitHub Copilot til å generere kode.