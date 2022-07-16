import { useDeleteUserMutation } from '../services/users.api';

const DeleteUser = () => {
  const [deleteUser] = useDeleteUserMutation();

  // static request body
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
