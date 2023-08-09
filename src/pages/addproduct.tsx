import { useForm } from "react-hook-form";
import { useCreateProductMutation } from "../services/product.service";

type AddProduct = {
  name: string;
  price: number;
  quantity: number;
  description: string;
};
const AddProduct = () => {
  const { handleSubmit, formState, register } = useForm<AddProduct>();
  const [createProduct] = useCreateProductMutation();
  const onSubmit = (data: AddProduct) => {
    createProduct(data);
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Thêm mới!</h1>
      </div>

      <form
        action=""
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="sr-only">name</label>

          <div className="relative">
            <input
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="tên sản phẩm"
              {...register("name")}
            />
          </div>
        </div>

        <div>
          <label className="sr-only">Price</label>

          <div className="relative">
            <input
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Giá"
              {...register("price")}
            />
          </div>
        </div>
        <div>
          <label className="sr-only">Số lượng</label>

          <div className="relative">
            <input
              type="number"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Số lượng"
              {...register("quantity")}
            />
          </div>
        </div>
        <div>
          <label className="sr-only">Mô tả</label>

          <textarea
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            rows={8}
            placeholder="Mô tả"
            {...register("description")}
          ></textarea>
        </div>
        <div>
          <button>Thêm mới</button>
        </div>
      </form>
    </div>
  );
};
export default AddProduct;
