import { useEffect, useState} from "react";
import axios from "axios";


import Title from "./styled/Title";
import { GridBox } from "./styled/GridBox";
import CartItem from "./CartItem";



function Cart() {
  const [items, setItems] = useState([])
// *********************************************
  useEffect(() => {
    axios.get('/carts/5')
            .then(res=>res.data)
            .then((json)=> {
            const products = json.products
            let newItemsPromise = []
            const getProductPromise = (productId) => {
              return axios.get(`/products/${productId}`)
                .then(res => res.data)
                .then(json => {
                  return {
                    ...json, //whatever is already there
                    stock: 5
                  }
                })
              }
              products.forEach((product) => {
                newItemsPromise.push(getProductPromise(product.productId))
              })
              Promise.all(newItemsPromise).then((items) => {
                setItems(items)
              })

  })
  }, [])
  // ********************************************
  // const items = [
  //   {
  //     id: 1,
  //     title: "Bag",
  //     price: 50,
  //     description: "Bags for every occasion",
  //     category: "Men's Clothing",
  //     image: "https://robohash.org/Bag",
  //     rating: {
  //       rate: 4,
  //       count: 100,
  //     },
  //     stock: 10
  //   },
  //   {
  //     id: 2,
  //     title: "Phone",
  //     price: 500,
  //     description: "Phones for every occasion",
  //     category: "Electronics",
  //     image: "https://robohash.org/Phone",
  //     rating: {
  //       rate: 4,
  //       count: 100,
  //     },
  //     stock: 10
  //   },
  // ];
  return (
    <div id="cart">
      <Title>Cart</Title>
      <GridBox>
        {items.map((item) => {
          return (
            <CartItem key={item.id} item={item} />
          );
        })}
      </GridBox>
    </div>
  );
}

export default Cart;
