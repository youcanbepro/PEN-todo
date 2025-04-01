"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todosController_1 = require("@controllers/todosController"); // Importing the controller functions
const router = express_1.default.Router();
router.route('/').get(todosController_1.getAllTodos).post(todosController_1.createTodo);
router.route('/:id').get(todosController_1.getTodo).put(todosController_1.updateTodo).delete(todosController_1.deleteTodo);
exports.default = router;
