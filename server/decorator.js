"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ssr_1 = require("@navikt/nav-dekoratoren-moduler/ssr");
var logger_1 = require("./logger");
var milj_1 = require("./milj\u00F8");
var getHtmlWithDecorator = function (filePath) {
    var env = process.env.ENV;
    if (env === undefined) {
        logger_1.default.error('Mangler miljø for dekoratøren');
        throw Error('Miljø kan ikke være undefined');
    }
    var decoratorBreadcrumb = [
        {
            url: milj_1.miljø.minSideUrl,
            title: 'Min side',
            handleInApp: false,
        },
        {
            url: '/minside',
            title: 'Min side - Enslig forsørger',
            handleInApp: false,
        },
    ];
    var dekoratørConfig = {
        env: env === 'localhost' ? 'dev' : env,
        filePath: filePath,
        params: {
            simple: false,
            enforceLogin: false,
            redirectToApp: true,
            level: 'Level4',
            breadcrumbs: decoratorBreadcrumb,
        },
    };
    return (0, ssr_1.injectDecoratorServerSide)(dekoratørConfig);
};
exports.default = getHtmlWithDecorator;
