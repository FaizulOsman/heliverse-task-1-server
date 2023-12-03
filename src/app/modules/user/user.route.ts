import express from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from './user.validation';
const router = express.Router();

// Routes
router.post(
  '/',
  validateRequest(UserValidation.createUserZodValidation),
  UserController.createUser
);

router.get('/:id', UserController.getSingleUser);

router.delete('/:id', UserController.deleteUser);

router.put(
  '/:id',
  validateRequest(UserValidation.updateUserZodValidation),
  UserController.updateUser
);

router.get('/', UserController.getAllUsers);

export const UserRoutes = router;
