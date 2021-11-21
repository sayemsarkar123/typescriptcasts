"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.authScreen = function (req, res) {
        res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input name=\"email\">\n      </div>\n      <div>\n        <label>Password</label>\n        <input name=\"password\" type=\"password\"/>\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
    };
    LoginController.prototype.userAuth = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email === 'user@email.com' && password === 'password') {
            req.session = { loggedIn: true };
            res.redirect('/');
        }
        else {
            res.send('Incorrect email or password.');
        }
    };
    LoginController.prototype.userLogout = function (req, res) {
        req.session = null;
        res.redirect('/');
    };
    __decorate([
        (0, decorators_1.get)('/login'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "authScreen", null);
    __decorate([
        (0, decorators_1.post)('/login'),
        (0, decorators_1.requiredAttrs)('email', 'password'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "userAuth", null);
    __decorate([
        (0, decorators_1.get)('/logout'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "userLogout", null);
    LoginController = __decorate([
        (0, decorators_1.controller)('/auth')
    ], LoginController);
    return LoginController;
}());
