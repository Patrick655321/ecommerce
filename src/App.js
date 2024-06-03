import { useEffect, useState, useReducer } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import { ProductList } from "./components/ProductList";
// import ProductListClass from "./components/ProductListClass";
import Cart from "./components/Cart";
import NavBar from "./components/ mui/NavBar";
import CircularIndeterminate from "./components/ mui/Spinner";
import ProductInfo from "./components/ProductInfo";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import { GlobalContext } from "./components/utils/globalStateContext";
import globalReducer from "./components/reducers/globalReducer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [selectedItem, setSelectedItem] = useState(null);

  const initialState = {
    loggedInUserName: "",
    token: "",
  };

  const [store, dispatch] = useReducer(globalReducer, initialState);

  // function setItem(item) {
  //   setSelectedItem(item);
  // }

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  useEffect(() => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    if (username && token) {
      dispatch({
        type: "setLoggedInUsername",
        data: username,
      });
      dispatch({
        type: "setToken",
        data: token,
      });
    }
  }, []);

  return (
    <>
      {isLoading === true ? (
        <CircularIndeterminate />
      ) : (
        <div className="App">
          <GlobalContext.Provider value={{ store, dispatch }}>
            <RouterProvider router={router} />
          </GlobalContext.Provider>
        </div>
      )}
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainPage />}>
      <Route path="login" element={<Login />} />
      <Route path="products/add" element={<AddProduct />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function MainPage() {
  const [selectedItem, setSelectedItem] = useState(null);

  function setItem(item) {
    setSelectedItem(item);
  }

  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Login />
      <ProductList setItem={setItem} />
      <ProductInfo item={selectedItem} />
      <AddProduct />
      <Cart /> */}
    </>
  );
}

export default App;
