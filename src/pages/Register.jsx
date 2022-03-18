import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 60%;
  max-width: 600px;
  padding: 1.25rem;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  /* border: 2px solid blue; */
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.25rem 0.625rem 0 0;
  padding: 0.625rem;
  outline: none;
`;
const Submit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  max-width: 500px;
  border: none;
  padding: 1rem 1.25rem;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: auto;
  &:hover {
    background-color: rgba(0, 128, 128, 0.9);
  }
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an account</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </Form>
        <Submit>
          {/* <Agreement>Agreement</Agreement> */}
          <Button>CREATE</Button>
        </Submit>
      </Wrapper>
    </Container>
  );
};

export default Register;
