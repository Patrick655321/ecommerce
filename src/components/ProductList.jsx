// import axios from "axios"
// import { useEffect, useState } from "react"
import useApi from "./utils/useApi"

import styled from "styled-components"
import CircularIndeterminate from "./ mui/Spinner"


import Product from "./Product"
// import ProductClass from "./ProductClass"
import Title from "./styled/Title"
import { GridBox } from "./styled/GridBox"

const CustomGrid = styled(GridBox)`
  margin-left: 100px;
  padding: 30px
`

function ProductList(props) {

  const[isLoading, itemsWithoutStock] = useApi("/products?limit=9")

  const items = itemsWithoutStock.map((item) => {
    item.stock = 5
    return item
  })


  /* const [items, setItems] = useState([])

  const [isLoading, setIsLoading] = useState(true)


    const items = [
        {
          id: 1,
          title: "Bag",
          price: 50,
          description: "Bags for every occasion",
          category: "Men's Clothing",
          image: "https://robohash.org/Bag",
          rating: {
              rate: 4,
              count: 100
          },
          stock: 10
        },
        {
          id: 2,
          title: "Phone",
          price: 500,
          description: "Phones for every occasion",
          category: "Electronics",
          image: "https://robohash.org/Phone",
          rating: {
              rate: 4,
              count: 100
          },
          stock: 10
        },
        {
          id: 3,
          title: "Shoes",
          price: 150,
          description: "Shoes for every occasion",
          category: "Women's Clothing",
          image: "https://robohash.org/Shoes",
          rating: {
              rate: 4,
              count: 100
          },
          stock: 10
        },
        {
          id: 4,
          title: "Slap",
          price: 0,
          description: "HOW CAN SHE SLAP?!",
          category: "Racist housemates",
          image: "https://robohash.org/Slap",
          rating: {
              rate: 4,
              count: 100
          },
          stock: 10
        },
        {
          id: 5,
          title: "Dice",
          price: 1000,
          description: "To roll in the alleyway",
          category: "Gambling",
          image: "https://robohash.org/Dice",
          rating: {
              rate: 4,
              count: 100
          },
          stock: 10
        },
        {
          id: 6,
          title: "Limes",
          price: 88,
          description: "For putting in the coconuts",
          category: "Drinks",
          image: "https://robohash.org/Limes",
          rating: {
              rate: 4,
              count: 100
          }
        }
      ]
     */
    /* useEffect(() => {
      console.log("useEffect")
    })
    useEffect(() => {
      axios.get("/products?limit=9")
      .then((res) => res.data)
      .then((json) => {
        const newItems = json.map((product) => {
          product.stock = 5
          return product
        })
      setItems(newItems)
      setIsLoading(false)
    })
    }, []) */

    return (
      <>
      {isLoading ? <CircularIndeterminate /> : (
        <div id="products">
        <Title>PRODUCTS</Title>
        <CustomGrid>
            {items.map((item) => {
                return <Product key={item.id} productInfo={item} setItem={props.setItem} /> 
            })}
        </CustomGrid>
        </div>)}
        </>
    )
}

export { ProductList }