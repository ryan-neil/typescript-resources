import { Request, Response } from 'express';
import { IUser } from '../model/users.model';

// emulate api
const data = {
  users: require('../model/users.json'),
  setUsers: function (data: IUser[]) {
    this.users = data;
  },
};

// get all users
const getAllUsers = (req: Request, res: Response) => {
  res.json(data.users);
};

// get single user
const getUser = (req: Request, res: Response) => {
  // find user from id param
  const foundUser = data.users.find(
    (user: IUser) => user.id === parseInt(req.params.id)
  );
  // check for found user
  if (!foundUser) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.params.id} not found` });
  }
  // send user back to client
  res.json(foundUser);
};

export { getAllUsers, getUser };
