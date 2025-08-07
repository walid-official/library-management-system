import { apiSlice } from "@/app/apiSlice";

export const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<{ data: any[] }, void>({
      query: () => "/books",
      providesTags: ["Books"],
    }),
    getBook: builder.query<any, string>({
      query: (id) => `/books/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Books", id }],
    }),
    addBook: builder.mutation<void, any>({
      query: (body) => ({ url: "/books", method: "POST", body }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<void, { id: string; data: any }>({
      query: ({ id, data }) => ({ url: `/books/${id}`, method: "PUT", body: data }),
      invalidatesTags: (_result, _error, { id }) => ["Books", { type: "Books", id }],
    }),
    deleteBook: builder.mutation<void, string>({
      query: (id) => ({ url: `/books/${id}`, method: "DELETE" }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
