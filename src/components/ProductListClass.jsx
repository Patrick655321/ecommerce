import { Component } from "react";
import React from "react";
import styled from "styled-components";
import CircularIndeterminate from "./ mui/Spinner";


import ProductClass from "./ProductClass";
import Title from "./styled/Title";
import { GridBox } from "./styled/GridBox";

const CustomGrid = styled(GridBox)`
  margin-left: 100px;
  padding: 30px;
`;

class ProductListClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => res.json())
      .then((json) => {
        const newItems = json.map((product) => {
          product.stock = 5
          return product
        })
      this.setState({
        items: newItems,
        isLoading: false
      })
    })
  }

  render() {
    return (
      <>
      {this.state.isLoading === null ? CircularIndeterminate() :
      <div id="products">
        <Title>PRODUCTS</Title>
        <CustomGrid>
          {this.state.items.map((item) => {
            return <ProductClass key={item.id} productInfo={item} setItem={this.props.setItem} />;
          })}
        </CustomGrid>
      </div>
    }</>
    );
  }
}
export default ProductListClass;
