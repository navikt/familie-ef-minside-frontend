"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRequestInfo = exports.doProxy = void 0;
var http_proxy_middleware_1 = require("http-proxy-middleware");
var querystring = require("querystring");
var uuid_1 = require("uuid");
var logger_1 = require("./logger");
var restream = function (proxyReq, req) {
    var requestBody = req.body;
    if (requestBody) {
        var contentType = proxyReq.getHeader('Content-Type');
        var bodyData = void 0;
        if (contentType === 'application/json') {
            bodyData = JSON.stringify(requestBody);
        }
        if (contentType === 'application/x-www-form-urlencoded') {
            bodyData = querystring.stringify(requestBody);
        }
        if (bodyData) {
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
            proxyReq.write(bodyData);
        }
    }
};
var doProxy = function (targetUrl, context) {
    return (0, http_proxy_middleware_1.createProxyMiddleware)(context, {
        changeOrigin: true,
        logLevel: 'info',
        logProvider: function () {
            return logger_1.default;
        },
        onProxyReq: restream,
        pathRewrite: function (path) {
            return path.replace(context, '');
        },
        secure: true,
        target: "".concat(targetUrl),
    });
};
exports.doProxy = doProxy;
var addRequestInfo = function () {
    return function (req, _res, next) {
        var _a;
        req.headers['Nav-Consumer-Id'] = 'familie-ef-soknad';
        req.headers['nav-call-id'] = (_a = req.headers['x-correlation-id']) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)();
        next();
    };
};
exports.addRequestInfo = addRequestInfo;
