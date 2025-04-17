import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const { VITE_BASE_API_URL } = import.meta.env;

// create custome baseQuery
const customBaseQuery = fetchBaseQuery({
  baseUrl: VITE_BASE_API_URL,
  prepareHeaders: (headers) => {
    // set headers
    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");
    // token
    let token = localStorage.getItem("note-token");
    if (token) {
      // parse the token
      token = JSON.parse(token);
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

// Define service for base url and endpoint
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  endpoints: (build) => ({
    // endpoints
    // login
    login: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),

    // notes
    getNotes: build.query({
      query: () => ({
        url: "/notes",
        method: "GET",
      }),
    }),

    getNote: build.query({
      query: (id) => ({
        url: `/notes/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useGetNotesQuery, useGetNoteQuery } = apiSlice;
