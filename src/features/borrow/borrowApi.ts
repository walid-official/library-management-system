import { apiSlice } from "@/app/apiSlice";

type BorrowRequestPayload = {
  book: string;
  quantity: number;
  dueDate: string;
};

export const borrowApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    borrowBook: builder.mutation<any, BorrowRequestPayload>({
      query: (data) => ({
        url: `/borrow`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Borrows", "Books"],
    }),

    getBorrows: builder.query<any, void>({
      query: () => `/borrow`,
      providesTags: ["Borrows"],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowsQuery } = borrowApi;
