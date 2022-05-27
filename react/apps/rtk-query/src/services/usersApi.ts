import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../models/users.model';

export const usersApi = createApi({
  // set reducer path
  reducerPath: 'usersApi',
  // set base URL
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9001/api',
  }),
  // all backend endpoints
  endpoints: (builder) => ({
    users: builder.query<IUser[], void>({
      query: () => '/users',
    }),
    user: builder.query<IUser, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

// export the hook
export const { useUsersQuery, useUserQuery } = usersApi;
