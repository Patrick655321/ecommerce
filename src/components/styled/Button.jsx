import styled from "styled-components";


const Button = styled.button`
  height: 40px;
  border: none;
  background-color: rgba(230, 177, 53);
  border-radius: 10px;
  font-size: 20px;
  padding: 0px 15px;
  color: ${(props) => props.greaterThanFive ? 'black' : 'white'};
  cursor: pointer;

  &:hover {
    background-color: rgba(230, 177, 53, 0.8);
  }

  &:disabled {
    background-color: grey;
    color: grey;
    cursor: not-allowed;
    transition: 500ms
  }
  /* ${(props) => {
    return`
      color: ${props.greaterThanFive ? 'black' : 'white'}
    `
  }} */ //FOR MULTIPLE PROPS RELATED CHANGES
`;

export default Button;
