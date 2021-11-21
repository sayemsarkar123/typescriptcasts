"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        for (var i = 0, length_1 = this.length; i < length_1; i++) {
            for (var j = 1; j < length_1 - i; j++) {
                if (this.compare(j - 1, j)) {
                    this.swap(j - 1, j);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
