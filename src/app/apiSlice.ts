import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-api-mauve.vercel.app/api" }),
  tagTypes: ["Books", "Borrows"],
  endpoints: () => ({}),
});
