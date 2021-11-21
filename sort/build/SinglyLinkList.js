"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkList = void 0;
var Sorter_1 = require("./Sorter");
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
    return Node;
}());
var SinglyLinkList = /** @class */ (function (_super) {
    __extends(SinglyLinkList, _super);
    function SinglyLinkList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.head = null;
        _this.tail = null;
        _this.length = 0;
        return _this;
    }
    SinglyLinkList.prototype.push = function (value) {
        var node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else if (this.tail) {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    };
    SinglyLinkList.prototype.at = function (index) {
        if (index >= this.length)
            throw new Error('Index out of bounds');
        var head = this.head;
        var i = -1;
        while (++i < index) {
            head = (head === null || head === void 0 ? void 0 : head.next) || null;
        }
        if (head)
            return head;
        throw new Error('List is empty');
    };
    SinglyLinkList.prototype.compare = function (leftIndex, rightIndex) {
        return this.at(leftIndex).value > this.at(rightIndex).value;
    };
    SinglyLinkList.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.at(leftIndex).value;
        this.at(leftIndex).value = this.at(rightIndex).value;
        this.at(rightIndex).value = leftHand;
    };
    SinglyLinkList.prototype.print = function () {
        var head = this.head;
        var i = -1;
        while (++i < this.length) {
            console.log(head === null || head === void 0 ? void 0 : head.value);
            head = (head === null || head === void 0 ? void 0 : head.next) || null;
        }
    };
    return SinglyLinkList;
}(Sorter_1.Sorter));
exports.SinglyLinkList = SinglyLinkList;
