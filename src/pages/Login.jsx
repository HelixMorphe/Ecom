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
  flex-direction: column;
  /* border: 2px solid blue; */
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 0.5rem auto;
  padding: 0.625rem;
  width: 60%;
  outline: none;
`;
const Submit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  max-width: 500px;
  border: none;
  padding: 0.75rem 0.75rem;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 0 auto 0.5rem auto;
  &:hover {
    background-color: rgba(0, 128, 128, 0.9);
  }
`;

const Link = styled.a`
  margin: 0.25rem;
  font-size: 14px;

  &:hover {
    color: teal;
    cursor: pointer;
  }
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
        </Form>
        <Submit>
          {/* <Agreement>Agreement</Agreement> */}
          <Button>LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create a new account</Link>
        </Submit>
      </Wrapper>
    </Container>
  );
};

export default Login;
