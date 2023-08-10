import { Link } from "react-router-dom";
import {
  useFetchProductQuery,
  useRemoveProductMutation,
} from "../services/product.service";

const Homepage = () => {
  const { data } = useFetchProductQuery();
  const [removeProduct] = useRemoveProductMutation();

  const onhandleRemove = (id: number) => {
    removeProduct(id);
  };
  return (
    <div className="overflow-x-auto">
      <Link to="/add">Thêm mới</Link>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              stt
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Price
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Số lượng
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Description
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              origin
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {data?.map((item, index) => (
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {index + 1}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.price}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.quantity}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {item.description}
              </td>

              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                <Link to={`/update/${item.id}`}>Update</Link>
                <button
                  className="p-2 bg-red-400"
                  onClick={() => onhandleRemove(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Homepage;
