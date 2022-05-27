import { useDeleteUserMutation } from '../services/users.api';

const DeleteUser = () => {
  const [deleteUser] = useDeleteUserMutation();

  // static user data, this should be replaced with a form
  const deletedUser = {
    id: 4,
  };

  const handleClick = async () => {
    await deleteUser(deletedUser.id);
  };

  return (
    <>
      <button onClick={handleClick}>Delete User</button>
    </>
  );
};

export default DeleteUser;
