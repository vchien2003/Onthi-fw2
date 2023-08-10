import { useParams, useNavigate } from "react-router-dom";
import {
  useFetchProductidQuery,
  useUpdateProductMutation,
} from "../services/product.service";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const UpdateProductForm = () => {
  const { id } = useParams();
  const { data: product } = useFetchProductidQuery(id);

  const [updateProduct] = useUpdateProductMutation(id);
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const updatedData = {
      name: data.name,
      price: data.price,
      quantity: data.quantity,
      description: data.description,
    };

    try {
      await updateProduct({
        id,
        data: updatedData,
      });

      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  useEffect(() => {
    if (product) {
      setValue("id", product.id);
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("quantity", product.quantity);
      setValue("description", product.description);
    }
  }, [product, setValue]);

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
          <button>Update</button>
        </div>
      </form>
    </div>
  );
};
export default UpdateProductForm;
