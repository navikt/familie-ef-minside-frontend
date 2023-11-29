"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes_1 = require("./routes");
var cookie_parser_1 = require("cookie-parser");
var csp_1 = require("./csp");
var app = (0, express_1.default)();
app.use(function (_req, res, next) {
    res.header('Content-Security-Policy', (0, csp_1.cspString)());
    res.header('X-Content-Type-Options', 'nosniff');
    res.header('X-Frame-Options', 'DENY');
    next();
});
if (process.env.ENV === 'localhost') {
    app.use((0, cookie_parser_1.default)());
}
app.use('/', (0, routes_1.default)(express_1.default.Router()));
app.listen(8080);
