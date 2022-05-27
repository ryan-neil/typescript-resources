import { useUserQuery } from '../services/users.api';

const UserData = ({ id }: { id: number }) => {
  const { data } = useUserQuery(id);

  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};

export default UserData;
