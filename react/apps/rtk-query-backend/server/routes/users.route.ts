import { Router } from 'express';
import * as usersApi from '../controllers/users.controller';

const usersRouter: Router = Router();

usersRouter.get('/', usersApi.getAllUsers);
usersRouter.get('/:id', usersApi.getUser);

export { usersRouter };
