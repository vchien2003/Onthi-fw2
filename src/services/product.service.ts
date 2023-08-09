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
  }),
});
export const {
  useFetchProductQuery,
  useRemoveProductMutation,
  useCreateProductMutation,
} = productAPI;
export default productAPI;
