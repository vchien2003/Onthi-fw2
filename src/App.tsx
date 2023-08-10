import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/home";
import AddProduct from "./pages/addproduct";
import UpdateProductForm from "./pages/updateproduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/add",
    element: <AddProduct />,
  },
  {
    path: "/update/:id",
    element: <UpdateProductForm />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
