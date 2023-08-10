import { IProduct } from "../models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    fetchProduct: builder.query<IProduct[], void>({
      query: () => "/products",
      providesTags: ["product"],
    }),
    fetchProductid: builder.query({
      query: (id: number) => "/products/" + id,
      providesTags: ["product"],
    }),
    removeProduct: builder.mutation({
      query: (id: number) => ({
        url: "/products/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    createProduct: builder.mutation({
      query: (data: IProduct) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, data }: { id: number; data: Partial<IProduct> }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useFetchProductQuery,
  useRemoveProductMutation,
  useCreateProductMutation,
  useFetchProductidQuery,
  useUpdateProductMutation,
} = productAPI;

export default productAPI;
