import { useUpdateUserMutation } from '../services/users.api';

const UpdateUser = () => {
  const [updateUser] = useUpdateUserMutation();

  // static request body
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
