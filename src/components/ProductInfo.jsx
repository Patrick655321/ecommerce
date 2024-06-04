import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import Title from "../components/styled/Title"


import Product from "./Product"
import Review from "./Review"


function ProductInfo() { //was (props)
    const [item, setItem] = useState(null) // const item = props.item

    const { productId } = useParams() //pulls :productId from url

    useEffect(() => {
        axios.get(`products/${productId}`)
            .then((res) => res.data)
            .then((json) => {
                console.log(json)
                setItem({
                    ...json,
                    stock: 5
                })
            })
            .catch((err) => {
            })
    }, [productId])
    

    if(!item) {
        return null
    }
    return (
        <>
        <Title>{item.title}</Title>
        <Product productInfo={item} />
        <Review />
        </>
    )
}

export default ProductInfo