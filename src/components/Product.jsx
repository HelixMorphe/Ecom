import {
  FavoriteBorderOutlined,
  FavoriteOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  flex: 1;
  margin: 0.25rem;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  

  &:hover ${Info} {
    opacity: 1;
    cursor: pointer;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;

  /* background: black; */
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.625rem;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background: #e9f5f5;
    transform: scale(1.1);
  }
`;
export const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
