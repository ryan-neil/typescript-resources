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
      .json({ message: `User ID ${req.params.id} not found` });
  }

  // send user back to client
  res.json(foundUser);
};

// add a user
const addUser = (req: Request, res: Response) => {
  const newUser = {
    id: data.users?.length ? data.users[data.users.length - 1].id + 1 : 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };

  // check for first and last name
  if (!newUser.firstname && !newUser.lastname) {
    res.status(400).json({ message: 'First and last names are required.' });
  }

  // pass updated data back to setUsers
  data.setUsers([...data.users, newUser]);
  // send success code and data back to client
  res.status(201).json(data.users);
};

// update a user
const updateUser = (req: Request, res: Response) => {
  // find user from id param
  const foundUser = data.users.find(
    (user: IUser) => user.id === parseInt(req.params.id)
  );

  // check for found user
  if (!foundUser) {
    return res
      .status(400)
      .json({ message: `User ID ${req.params.id} not found` });
  }

  // if we received a name set the user we found to the new parameter value
  if (req.body.firstname) foundUser.firstname = req.body.firstname;
  if (req.body.lastname) foundUser.lastname = req.body.lastname;

  //  remove the existing user record from database
  const filteredUsers = data.users.filter(
    (user: IUser) => user.id !== parseInt(req.params.id)
  );

  // combine the array without the existing user and the new user object
  const unsortedArray = [...filteredUsers, foundUser];

  // call 'setUsers' function from the data object (react setState pattern) and sort
  data.setUsers(
    unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );

  // send back the users after they have been updated by 'setUsers'
  res.json(data.users);
};

// delete a user
const deleteUser = (req: Request, res: Response) => {
  // filter out the found user
  const filteredUsers = data.users.filter(
    (user: IUser) => user.id !== parseInt(req.params.id)
  );

  // pass filtered user array back to database (this.setUsers)
  data.setUsers([...filteredUsers]);

  // send the filtered user array back to
  res.status(201).json(data.users);
};

export { getAllUsers, getUser, addUser, updateUser, deleteUser };
