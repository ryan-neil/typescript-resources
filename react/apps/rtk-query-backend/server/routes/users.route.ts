import { Router } from 'express';
import * as usersApi from '../controllers/users.controller';

const usersRouter: Router = Router();

usersRouter.get('/', usersApi.getAllUsers);
usersRouter.post('/', usersApi.addUser);
usersRouter.put('/:id', usersApi.updateUser);
usersRouter.delete('/:id', usersApi.deleteUser);
usersRouter.get('/:id', usersApi.getUser);

export { usersRouter };
