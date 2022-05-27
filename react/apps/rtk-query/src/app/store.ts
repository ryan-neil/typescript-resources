import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from '../services/usersApi';

export const store = configureStore({
  // define the reducer
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // middleware (caching data)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware), // here we're binding our API with the store
});
