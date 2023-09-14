import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HeaderLayout from "./components/layouts/HeaderLayout";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Error from "./components/Error";

import useDataFetching from "./utils/dataFetching";
import { ProductContextProvider } from "./context/ProductContextProvider";

function App() {
  const { productsData, error, isLoading } = useDataFetching(
    "https://fakestoreapi.com/products"
  );

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HeaderLayout />}>
        <Route index element={<Home />} />
        <Route
          path="shop"
          element={
            <Shop
              productsData={productsData}
              error={error}
              isLoading={isLoading}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  );
}

export default App;