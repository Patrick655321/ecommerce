import { useState } from "react";

const CartItem = (props) => { 
  const [noOfItems, setNoOfItems] = useState(1)

  function handleDecrease() {
    setNoOfItems((prevState) => {
      return prevState -1
    })
  }

  function handleIncrease() {
    setNoOfItems((prevState) => {
      return prevState + 1
    })
  }

  const item = props.item

  return (
    <div style={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
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
        }}
      >
        ${item.price}
      </div>
      <div>Stock: {item.stock}</div>
      <div>
        <button disabled={noOfItems===0} onClick={handleDecrease}>-</button>
        <span style={{
            margin: '0px 5px',

        }}>{noOfItems}</span>
        <button disabled={noOfItems===item.stock} onClick={handleIncrease}>+</button>
      </div>
      <div>Total Price: ${noOfItems * item.price}</div>
    </div>)
};

export default CartItem