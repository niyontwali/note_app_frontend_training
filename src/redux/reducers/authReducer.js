import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for authentication
// It tries to load the token from localStorage if it exists
const initialAuthState = {
  userToken: (() => {
    const storedToken = localStorage.getItem('note-token');
    // alternative to itenary operators
    // if (storedToken) {
    //   return JSON.parse(storedToken)
    // } else {
    //   return null
    // }
    return storedToken ? JSON.parse(storedToken) : null;

  })(),
};

// Create a Redux slice for authentication
// A slice contains state, reducers, and action creators
export const authReducer = createSlice({
  name: 'auth',
  initialState: initialAuthState,

  reducers: {
    // Set user credentials and save the token
    setCredentials: (state, action) => {
      state.userToken = action.payload;
      localStorage.setItem('note-token', JSON.stringify(action.payload));
    },

    // Log out the user by clearing the token
    logout: (state) => {
      state.userToken = null; 
      localStorage.removeItem('note-token');
    },
  },
});

// Export the reducer to be added to the store
export default authReducer.reducer;

// Export the actions so we can use them in components
export const { setCredentials, logout } = authReducer.actions;
