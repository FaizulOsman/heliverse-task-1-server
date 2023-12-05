import express from 'express';
import { TeamController } from './team.controller';
import validateRequest from '../../middlewares/validateRequest';
import { TeamValidation } from './team.validation';
const router = express.Router();

// Routes
router.post(
  '/',
  validateRequest(TeamValidation.createTeamZodValidation),
  TeamController.createTeam
);

router.get('/:id', TeamController.getSingleTeam);

router.delete('/:id', TeamController.deleteTeam);

router.get('/', TeamController.getAllTeams);

export const TeamRoutes = router;
