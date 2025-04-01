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
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = exports.getAllTodos = void 0;
const db_1 = __importDefault(require("@config/db"));
const getAllTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('SELECT * FROM todos');
    return result.rows;
});
exports.getAllTodos = getAllTodos;
const createTodo = (title, description) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('INSERT INTO todos (title, description) VALUES ($1, $2) RETURNING *', [title, description]);
    return result.rows[0];
});
exports.createTodo = createTodo;
const getTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('SELECT * FROM todos WHERE id = $1', [id]);
    return result.rows[0];
});
exports.getTodo = getTodo;
const updateTodo = (title, description, id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('UPDATE todos SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);
    return result.rows[0];
});
exports.updateTodo = updateTodo;
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_1.default.query('DELETE FROM todos WHERE id = $1', [id]);
    return result.rows[0];
});
exports.deleteTodo = deleteTodo;
