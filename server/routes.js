"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var decorator_1 = require("./decorator");
var logger_1 = require("./logger");
var proxy_1 = require("./proxy");
var tokenProxy_1 = require("./tokenProxy");
var milj_1 = require("./milj\u00F8");
var buildPath = path_1.default.resolve(process.cwd(), '../build');
var EF_BASE_PATH = '/familie/alene-med-barn';
var BASE_PATH = "".concat(EF_BASE_PATH, "/minside");
var routes = function (router) {
    router.get("".concat(BASE_PATH, "/internal/isAlive|isReady"), function (_req, res) {
        return res.sendStatus(200);
    });
    router.get("/env", function (_req, res) {
        res
            .status(200)
            .send({
            endringsmeldingUrl: milj_1.miljø.endringsmeldingUrl,
            ettersendingUrl: milj_1.miljø.ettersendingUrl,
            søknadOvergangsstønadUrl: milj_1.miljø.søknadOvergangsstønadUrl,
            søknadBarnetilsynUrl: milj_1.miljø.søknadBarnetilsynUrl,
            søknadSkolepengerUrl: milj_1.miljø.søknadSkolepengerUrl,
            infoSideOvergangsstønadUrl: milj_1.miljø.infoSideOvergangsstønadUrl,
            infoSideBarnetilsynUrl: milj_1.miljø.infoSideBarnetilsynUrl,
            infoSideSkolepengerUrl: milj_1.miljø.infoSideSkolepengerUrl,
            saksbehandlingstiderUrl: milj_1.miljø.saksbehandlingstiderUrl,
        })
            .end();
    });
    router.get("".concat(BASE_PATH, "/env"), function (_req, res) {
        res
            .status(200)
            .send({
            endringsmeldingUrl: milj_1.miljø.endringsmeldingUrl,
            ettersendingUrl: milj_1.miljø.ettersendingUrl,
            søknadOvergangsstønadUrl: milj_1.miljø.søknadOvergangsstønadUrl,
            søknadBarnetilsynUrl: milj_1.miljø.søknadBarnetilsynUrl,
            søknadSkolepengerUrl: milj_1.miljø.søknadSkolepengerUrl,
            infoSideOvergangsstønadUrl: milj_1.miljø.infoSideOvergangsstønadUrl,
            infoSideBarnetilsynUrl: milj_1.miljø.infoSideBarnetilsynUrl,
            infoSideSkolepengerUrl: milj_1.miljø.infoSideSkolepengerUrl,
            saksbehandlingstiderUrl: milj_1.miljø.saksbehandlingstiderUrl,
        })
            .end();
    });
    router.use(/^(?!.*\/(internal|static|api)\/).*$/, function (_req, res) {
        (0, decorator_1.default)(path_1.default.join(buildPath, 'index.html'))
            .then(function (html) {
            res.send(html);
        })
            .catch(function (e) {
            logger_1.default.error(e);
            res.status(500).send(e);
        });
    });
    router.use("".concat(BASE_PATH, "/api"), (0, proxy_1.addRequestInfo)(), (0, tokenProxy_1.default)('familie-ef-soknad-api'), (0, proxy_1.doProxy)(milj_1.miljø.apiUrl, "".concat(BASE_PATH, "/api")));
    return router;
};
exports.default = routes;
