import CategoryItem from "./CategoryItem";
import React from "react";
import styled from "styled-components";
import { categories } from "../data";
const Container = styled.div`
  display: flex;
  padding: 1.25rem;
  justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
