import { useUpdateUserMutation } from '../services/users.api';

const UpdateUser = () => {
  const [updateUser] = useUpdateUserMutation();

  // static user data, this should be replaced with a form
  const updatedUser = {
    id: 4,
    firstname: 'Han-Man',
    lastname: 'Solo-Dolo',
  };

  const handleClick = async () => {
    await updateUser(updatedUser);
  };

  return (
    <>
      <button onClick={handleClick}>Update User</button>
    </>
  );
};

export default UpdateUser;
