"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodo = exports.getAllTodos = void 0;
const asyncErrorHandler_1 = require("@utils/asyncErrorHandler");
const db_1 = __importDefault(require("@config/db"));
// Standardized response function
const handleResponse = (res, status, data = null) => {
    res.status(status).json(data);
};
exports.getAllTodos = (0, asyncErrorHandler_1.asyncErrorHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('SELECT * FROM todos');
    handleResponse(res, 200, result.rows);
}));
exports.getTodo = (0, asyncErrorHandler_1.asyncErrorHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('SELECT * FROM todos WHERE id = $1', [req.params.id]);
    handleResponse(res, 200, result.rows[0]);
}));
exports.createTodo = (0, asyncErrorHandler_1.asyncErrorHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, completed } = req.body;
    const result = yield db_1.default.query('INSERT INTO todos (title, description, completed) VALUES ($1, $2, $3) RETURNING *', [title, description, completed]);
    handleResponse(res, 201, result.rows[0]);
}));
const updateTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('updateTodo', req.body);
    const { title, description, completed } = req.body;
    const result = yield db_1.default.query('UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 RETURNING *', [title, description, completed, req.params.id]);
    handleResponse(res, 200, result.rows[0]);
});
exports.updateTodo = updateTodo;
exports.deleteTodo = (0, asyncErrorHandler_1.asyncErrorHandler)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('DELETE FROM todos WHERE id = $1', [req.params.id]);
    handleResponse(res, 204, result.rows[0]);
}));
