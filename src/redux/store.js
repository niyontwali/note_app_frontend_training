import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import authReducer from './reducers/authReducer';

// Create and configure the Redux store
const store = configureStore({
  // Register all reducers used in the app
  reducer: {
    // Register the API slice reducer (for handling data fetching)
    [apiSlice.reducerPath]: apiSlice.reducer,

    // Register the authentication reducer (for managing auth state)
    auth: authReducer,
  },
  
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Export the store so it can be used in the app (usually in the <Provider>)
export default store;