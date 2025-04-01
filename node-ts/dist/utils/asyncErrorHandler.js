"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncErrorHandler = void 0;
const asyncErrorHandler = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch((err) => next(err));
    };
};
exports.asyncErrorHandler = asyncErrorHandler;
