"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExistExceptionError = void 0;
class UserExistExceptionError extends Error {
    constructor({ name, message, cause, }) {
        super(message);
        this.message = message;
        this.name = name;
        this.cause = cause;
    }
}
exports.UserExistExceptionError = UserExistExceptionError;
