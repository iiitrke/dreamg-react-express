"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotFoundError = void 0;
class UserNotFoundError extends Error {
    constructor({ name, message, cause, }) {
        super(message);
        this.message = message;
        this.name = name;
        this.cause = cause;
    }
}
exports.UserNotFoundError = UserNotFoundError;
