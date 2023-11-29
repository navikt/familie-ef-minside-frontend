"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.miljø = void 0;
var logger_1 = require("./logger");
var lokaltMiljø = {
    apiUrl: 'http://localhost:8091',
    minSideUrl: 'https://www.intern.dev.nav.no/minside/',
    oAuthCallbackUri: 'https://localhost:8080/familie/alene-med-barn/minside/oauth2/callback',
    endringsmeldingUrl: 'https://www.ekstern.dev.nav.no/skriv-til-oss',
    ettersendingUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/ettersending',
    søknadOvergangsstønadUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/',
    søknadBarnetilsynUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/barnetilsyn',
    søknadSkolepengerUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/skolepenger',
    infoSideOvergangsstønadUrl: 'https://www.ekstern.dev.nav.no/overgangsstonad-enslig',
    infoSideBarnetilsynUrl: 'https://www.ekstern.dev.nav.no/barnetilsyn-enslig',
    infoSideSkolepengerUrl: 'https://www.ekstern.dev.nav.no/skolepenger-enslig',
    saksbehandlingstiderUrl: 'https://www.ekstern.dev.nav.no/saksbehandlingstider',
};
var devMiljø = {
    apiUrl: 'http://familie-ef-soknad-api/familie/alene-med-barn/soknad-api',
    minSideUrl: 'https://www.intern.dev.nav.no/minside/',
    oAuthCallbackUri: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/minside/oauth2/callback',
    endringsmeldingUrl: 'https://www.ekstern.dev.nav.no/skriv-til-oss',
    ettersendingUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/ettersending',
    søknadOvergangsstønadUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/',
    søknadBarnetilsynUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/barnetilsyn',
    søknadSkolepengerUrl: 'https://familie.ekstern.dev.nav.no/familie/alene-med-barn/soknad/skolepenger',
    infoSideOvergangsstønadUrl: 'https://www.ekstern.dev.nav.no/overgangsstonad-enslig',
    infoSideBarnetilsynUrl: 'https://www.ekstern.dev.nav.no/barnetilsyn-enslig',
    infoSideSkolepengerUrl: 'https://www.ekstern.dev.nav.no/skolepenger-enslig',
    saksbehandlingstiderUrl: 'https://www.ekstern.dev.nav.no/saksbehandlingstider',
};
var prodMiljø = {
    apiUrl: 'http://familie-ef-soknad-api/familie/alene-med-barn/soknad-api',
    minSideUrl: 'https://www.nav.no/minside/',
    oAuthCallbackUri: 'https://www.nav.no/familie/alene-med-barn/minside/oauth2/callback',
    endringsmeldingUrl: 'https://www.nav.no/skriv-til-oss',
    ettersendingUrl: 'https://www.nav.no/familie/alene-med-barn/ettersending',
    søknadOvergangsstønadUrl: 'https://www.nav.no/familie/alene-med-barn/soknad',
    søknadBarnetilsynUrl: 'https://www.nav.no/familie/alene-med-barn/soknad/barnetilsyn',
    søknadSkolepengerUrl: 'https://www.nav.no/familie/alene-med-barn/soknad/skolepenger',
    infoSideOvergangsstønadUrl: 'https://www.nav.no/overgangsstonad-enslig',
    infoSideBarnetilsynUrl: 'https://www.nav.no/barnetilsyn-enslig',
    infoSideSkolepengerUrl: 'https://www.nav.no/skolepenger-enslig',
    saksbehandlingstiderUrl: 'https://www.nav.no/saksbehandlingstider',
};
var initierMiljøvariabler = function () {
    switch (process.env.ENV) {
        case 'localhost':
            return lokaltMiljø;
        case 'dev':
            return devMiljø;
        case 'prod':
            return prodMiljø;
        default:
            logger_1.default.warn('Mangler miljøvariabler - setter lokale variabler');
            return lokaltMiljø;
    }
};
exports.miljø = initierMiljøvariabler();
