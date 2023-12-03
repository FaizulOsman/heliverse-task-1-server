"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
// Routes
router.post('/', (0, validateRequest_1.default)(user_validation_1.UserValidation.createUserZodValidation), user_controller_1.UserController.createUser);
router.get('/:id', user_controller_1.UserController.getSingleUser);
router.delete('/:id', user_controller_1.UserController.deleteUser);
router.put('/:id', (0, validateRequest_1.default)(user_validation_1.UserValidation.updateUserZodValidation), user_controller_1.UserController.updateUser);
router.get('/', user_controller_1.UserController.getAllUsers);
exports.UserRoutes = router;
