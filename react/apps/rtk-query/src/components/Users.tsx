import { useUsersQuery } from '../services/usersApi';
import UserData from './UserData';

const Users = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery();

  if (isLoading) return <p>Loading data...</p>;
  if (isFetching) return <p>Fetching data...</p>;
  if (error) return <p>Something went wrong.</p>;

  return (
    <>
      <h2>Users</h2>
      <ul>
        {isSuccess &&
          data.map((user) => (
            <li key={user.id}>
              {user.firstname} {user.lastname}
              <UserData id={user.id} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Users;
