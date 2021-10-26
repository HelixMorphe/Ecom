import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 0.25rem;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* margin-bottom: -100px; */
`;
const Info = styled.div`
  position: absolute;
  /* top: ; */
  bottom: 0;
  width: 100%;
  height: 80%;
  margin-top: auto;
  margin-bottom: auto;
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  text-align: center;
  /* border: 2px solid black; */
`;
const Button = styled.button`
  border: none;
  padding: 0.75rem;
  background: white;
  font-weight: 500;
  /* border-radius: 10px; */
  color: #121212;
  margin-top: 1rem;
  cursor: pointer;
`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
