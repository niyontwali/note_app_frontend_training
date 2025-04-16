import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const { VITE_BASE_API_URL } = import.meta.env;

// create custome baseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: VITE_BASE_API_URL,
  prepareHeaders: (headers) => {
    // token
    const token = localStorage.getItem('note-token');

    // set headers
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;

  }
});

// Define service for base url and endpoint
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (build) => ({
    // endpoints
    // login
    login: build.mutation({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data
      })
    }),

    // notes
    getNotes: build.query({
      query: () => ({
        url: '/notes',
        method: 'GET',
      })
    }),
  })
});

export const { useLoginMutation, useGetNotesQuery } = apiSlice;