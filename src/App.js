import { useEffect, useState, useReducer } from "react";


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
  const [isLoading, setIsLoading] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null)

  const initialState = {
    loggedInUserName: '',
    token: ''
  }

  const [store, dispatch] = useReducer(globalReducer, initialState)

  function setItem(item) {
    setSelectedItem(item)
  }

  setTimeout(() => {
    setIsLoading(false)
  }, 2000)

  useEffect(()=> {
    const username = localStorage.getItem("username")
    const token = localStorage.getItem("token")
    if(username && token) {
      dispatch({
        type: 'setLoggedInUsername',
        data: username
      })
      dispatch({
        type: 'setToken',
        data: token
      })
    }
  }, [])

  return (
    <>
    {isLoading === true ? <CircularIndeterminate />: 
        <div className="App">
        <GlobalContext.Provider value={{store, dispatch}}>
        <NavBar />
        <Login />
        <ProductList setItem={setItem}/>
        <ProductInfo item ={selectedItem}/>
        <AddProduct />
        <Cart />
        </GlobalContext.Provider>
      </div>}
    </>
  );
}

export default App;
