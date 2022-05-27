import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '../models/users.model';

export const usersApi = createApi({
  // set reducer path
  reducerPath: 'usersApi',
  // set base URL
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9001/api',
  }),
  // set tag type for auto fetching data (https://redux-toolkit.js.org/rtk-query/usage/automated-refetching)
  // * for queries we use the 'providesTags' property
  // * for mutations we use the 'invalidatesTags' property
  tagTypes: ['User'],
  // all backend endpoints
  endpoints: (builder) => ({
    // get all users
    users: builder.query<IUser[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    // get a user
    user: builder.query<IUser, number>({
      query: (id) => `/users/${id}`,
      providesTags: ['User'],
    }),
    // add a user
    addUser: builder.mutation<void, IUser>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    // update a user
    updateUser: builder.mutation<void, IUser>({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: rest, // we already have the id so we just need to pass the rest of the object
      }),
      invalidatesTags: ['User'],
    }),
    // delete a user
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

// export the hook
export const {
  useUsersQuery,
  useUserQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = usersApi;
