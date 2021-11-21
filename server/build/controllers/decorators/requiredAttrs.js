"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredAttrs = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function requiredAttrs() {
    var attrs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        attrs[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.attributes, attrs, target, key);
    };
}
exports.requiredAttrs = requiredAttrs;
