"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
var MetadataKeys_1 = require("./MetadataKeys");
function validateAttributes(attributes) {
    return function (req, res, next) {
        if (!req.body)
            return res.send('Invalid Request');
        for (var _i = 0, attributes_1 = attributes; _i < attributes_1.length; _i++) {
            var attribute = attributes_1[_i];
            if (!req.body[attribute])
                return res.send('Invalid Request');
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            var method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middlewares, target.prototype, key) ||
                [];
            var attrs = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.attributes, target.prototype, key) ||
                [];
            var validateHandler = validateAttributes(attrs);
            if (path)
                router[method].apply(router, __spreadArray(__spreadArray(["" + routePrefix + path], middlewares, false), [validateHandler,
                    routeHandler], false));
        }
    };
}
exports.controller = controller;
