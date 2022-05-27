import { useAddUserMutation } from '../services/users.api';

const AddUser = () => {
  const [addUser] = useAddUserMutation();

  // static user data, this should be replaced with a form
  const newUser = {
    id: 4,
    firstname: 'Han',
    lastname: 'Solo',
  };

  const handleClick = async () => {
    await addUser(newUser);
  };

  return (
    <>
      <button onClick={handleClick}>Add User</button>
    </>
  );
};

export default AddUser;
