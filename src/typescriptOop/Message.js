"use strict";
exports.__esModule = true;
exports.Message = void 0;
var Message = /** @class */ (function () {
    function Message(title, message) {
        this.title = '';
        this._isSent = false;
        this.message = '';
        this.deliveryDate = null;
        this.title = title;
        this.message = message;
        this._isSent = false;
    }
    Message.prototype.set_isSent = function (value) {
        if (value === true) {
            this.deliveryDate = new Date();
        }
        this._isSent = value;
    };
    Message.prototype.get_isSent = function () {
        return this._isSent;
    };
    Message.prototype.messsageStatus = function () {
        var sentMessage = this._isSent ? 'Has been sent' : 'Has not been sent';
        return "".concat(this.message, "|").concat(sentMessage);
    };
    Message.prototype.preViewMessage = function () {
        return this.message.slice(0, 10).concat('...');
    };
    return Message;
}());
exports.Message = Message;
var message = new Message('New Course!!! Just $9.99!!!', 'Check out our latest course on OOP with TypeScript');
message.set_isSent(false);
console.log(message.messsageStatus());
console.log(message.preViewMessage());
console.log(message.get_isSent(), "setting is sent");
