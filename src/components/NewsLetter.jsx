import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #f6eabe;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 1.25rem;
`;
const Description = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  /* border: 2px solid black; */
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid gray; */
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 1rem;
  font-size: 1rem;
`;
const Button = styled.button`
  border: none;
  background-color: teal;
  padding: 1rem;
  color: white;
  cursor: pointer;
`;
const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your e-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
