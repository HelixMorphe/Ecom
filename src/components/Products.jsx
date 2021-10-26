import { products } from "../data";
import styled from "styled-components";
import { Product } from "./Product";
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.25rem;
  justify-content: space-between;
`;
const Products = () => {
  return (
    <Container>
      {products.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};

export default Products;
