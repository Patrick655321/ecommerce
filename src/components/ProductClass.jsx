import { Component } from 'react'

import styled from "styled-components";

import Button from "./styled/Button";

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
`

class ProductClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemOnCart: 0
        }
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    handleAddToCart = () => {
        this.setState= ((prevState) => {
            return {
                itemOnCart: prevState.itemOnCart + 1 
            }
            })
    }

    render() {
        const item = this.props.productInfo;
        // if (!item) {
        //     return <Wrapper>Loading...</Wrapper>;
        //   }
        return (<Wrapper onClick={() => {
          this.props.setItem(item)
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
            <div>Stock: {item.stock - this.state.itemOnCart}</div>
            <div>SOH: {item.stock}</div>
            <Button
              // greaterThanFive={this.state.itemOnCart > 5}
              disabled={item.stock === this.state.itemOnCart}
              onClick={this.handleAddToCart}
            >{item.stock === this.state.itemOnCart ? "No Stock Available" : "Add To Cart"}
            </Button>
          </Wrapper>)
    }
}

export default ProductClass