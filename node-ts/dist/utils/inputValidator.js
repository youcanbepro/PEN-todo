"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEntry = void 0;
const joi_1 = __importDefault(require("joi"));
const todoScheme = joi_1.default.object({
    title: joi_1.default.string().trim().min(50).required(),
    description: joi_1.default.string().trim().min(100).required(),
    completed: joi_1.default.boolean().required()
});
const validateEntry = (req, res, next) => {
    const { error } = todoScheme.validate(req.body);
    if (error)
        res.status(400).json({
            status: 400,
            message: error.details[0].message
        });
    next();
};
exports.validateEntry = validateEntry;
