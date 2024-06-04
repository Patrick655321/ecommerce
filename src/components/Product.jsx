import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Button from "./styled/Button";
import { useGlobalContext } from "./utils/globalStateContext";

const Wrapper = styled.div`
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -7px 6px 41px -14px rgba(184, 151, 18, 0.71);
  transition: 500ms;
  &:hover {
    box-shadow: -7px 6px 82px -14px rgba(184, 151, 18, 0.71);
  }
`;

function Product(props) {
  //   const item = {
  //     id: 1,
  //     title: "Bag",
  //     price: 50,
  //     description: "Bags for every occasion",
  //     category: "Men's Clothing",
  //     image: "https://robohash.org/Bag",
  //     rating: {
  //         rate: 4,
  //         count: 100
  //     }
  //   }
  const item = props.productInfo;
  const [itemOnCart, setItemOnCart] = useState(0);

  const navigate = useNavigate()
  // function handleAddToCart() {
  //   setItemOnCart(itemOnCart + 1)
  // } this is ASYNC so deconstruct it to arrow function to avoid errors


  function handleAddToCart() {
    setItemOnCart((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <Wrapper onClick={() => {
      // props.setItem(item)
      navigate(`product/${item.id}`)
    }}>
      {" "}
      <img
        style={{
          height: 200,
        }}
        alt="Bag"
        src={item.image}
      />
      <div
        style={{
          fontSize: 25,
          fontWeight: 700,
          marginBottom: 10,
          marginLeft: 5,
        }}
      >
        {item.title}
      </div>
      <div
        style={{
          marginLeft: 5,
        }}
      >
        {item.description}
      </div>
      <div
        style={{
          marginTop: 10,
          marginLeft: 5,
          marginBottom: 10,
        }}
      >
        ${item.price}
      </div>
      <div>Stock: {item.stock - itemOnCart}</div>
      <div>SOH: {item.stock}</div>
      <Button
        // greaterThanFive={itemOnCart > 5}
        disabled={item.stock === itemOnCart}
        onClick={handleAddToCart}
      >{item.stock === itemOnCart ? "No Stock Available" : "Add To Cart"}
      </Button>
    </Wrapper>
  );
}

export default Product;

// robohash
