"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logWarn = exports.logInfo = void 0;
var winston_1 = require("winston");
var logger = winston_1.default.createLogger({
    transports: [
        new winston_1.default.transports.Console({
            format: winston_1.default.format.json(),
        }),
    ],
});
var prefix = function (req) {
    return "".concat(req.method, " - ").concat(req.originalUrl);
};
var utledMetadata = function (req, error) {
    var callId = req.header('nav-call-id');
    var requestId = req.header('x-request-id');
    return __assign(__assign(__assign({}, (callId ? { x_callId: callId } : {})), (requestId ? { x_requestId: requestId } : {})), (error ? { error: error } : {}));
};
var logInfo = function (message, req) {
    var melding = "".concat(prefix(req), ": ").concat(message);
    var meta = utledMetadata(req);
    logger.info(melding, meta);
};
exports.logInfo = logInfo;
var logWarn = function (message, req, error) {
    var melding = "".concat(prefix(req), ": ").concat(message);
    var meta = utledMetadata(req, error);
    logger.warn(melding, meta);
};
exports.logWarn = logWarn;
exports.default = logger;
