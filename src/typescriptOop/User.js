"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(firstName, lastName, email) {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return 'Whatever';
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getFullname = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.emailCheck = function () {
        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return emailReg.test(String(this.email).toLowerCase());
    };
    return User;
}());
exports.User = User;
var user = new User('Ani', 'Daniel', 'danielani66n');
console.log(user.fullName);
console.log(user.emailCheck());
