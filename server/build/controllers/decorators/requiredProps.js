"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredProps = void 0;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function requiredProps() {
    var attributes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        attributes[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.attributes, attributes, target, key);
    };
}
exports.requiredProps = requiredProps;
