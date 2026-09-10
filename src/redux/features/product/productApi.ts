import { baseApi } from "../../api/baseApi";
import { addLocalProduct, deleteLocalProduct, readProducts } from "@/lib/localProducts";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      async queryFn({ page, search, filterData }: any = {}) {
        const products = readProducts();
        let filtered = [...products];

        if (search) {
          filtered = filtered.filter((product) =>
            product.name.toLowerCase().includes(String(search).toLowerCase())
          );
        }

        if (filterData?.category) {
          filtered = filtered.filter(
            (product) => product.category === filterData.category
          );
        }

        if (filterData?.range > 0) {
          filtered = filtered.filter((product) => Number(product.price) <= Number(filterData.range));
        }

        if (filterData?.instock !== "" && filterData?.instock !== undefined) {
          filtered = filtered.filter((product) =>
            String(product.inStock) === String(filterData.instock)
          );
        }

        const pageSize = 9;
        const total = filtered.length;
        const totalPage = Math.max(1, Math.ceil(total / pageSize));
        const safePage = Number(page) > 0 ? Number(page) : 1;
        const start = (safePage - 1) * pageSize;
        const end = start + pageSize;

        return {
          data: {
            data: {
              data: filtered.slice(start, end),
              meta: { totalPage, total, page: safePage },
            },
          },
        };
      },
      providesTags: ["Products"],
    }),
    getAProduct: builder.query({
      async queryFn(id: any) {
        const product = readProducts().find((item) => item._id === id);
        return { data: { data: product || null } };
      },
    }),
    addProduct: builder.mutation({
      async queryFn(data: any) {
        const saved = addLocalProduct(data);
        return { data: { data: saved[0] } };
      },
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      async queryFn({ id, data }: any) {
        const products = readProducts();
        const updated = products.map((product) =>
          product._id === id ? { ...product, ...data } : product
        );
        localStorage.setItem("doodle_products", JSON.stringify(updated));
        return { data: { data: updated.find((product) => product._id === id) } };
      },
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      async queryFn(id: any) {
        const saved = deleteLocalProduct(id);
        return { data: { data: saved } };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
