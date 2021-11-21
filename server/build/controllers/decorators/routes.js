"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.put = exports.del = exports.patch = exports.post = exports.get = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
var methods_1 = require("./methods");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder(methods_1.Methods.get);
exports.post = routeBinder(methods_1.Methods.post);
exports.patch = routeBinder(methods_1.Methods.patch);
exports.del = routeBinder(methods_1.Methods.delete);
exports.put = routeBinder(methods_1.Methods.put);
