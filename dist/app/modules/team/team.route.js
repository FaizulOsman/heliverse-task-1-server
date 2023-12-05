"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutes = void 0;
const express_1 = __importDefault(require("express"));
const team_controller_1 = require("./team.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const team_validation_1 = require("./team.validation");
const router = express_1.default.Router();
// Routes
router.post('/', (0, validateRequest_1.default)(team_validation_1.TeamValidation.createTeamZodValidation), team_controller_1.TeamController.createTeam);
router.get('/:id', team_controller_1.TeamController.getSingleTeam);
router.delete('/:id', team_controller_1.TeamController.deleteTeam);
router.get('/', team_controller_1.TeamController.getAllTeams);
exports.TeamRoutes = router;
