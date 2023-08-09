import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/home";
import AddProduct from "./pages/addproduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/add",
    element: <AddProduct />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
