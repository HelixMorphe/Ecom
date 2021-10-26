import React from "react";
import "../styles/Navbar.css";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const Container = styled.div`
  height: 3.75rem;
`;
const Wrapper = styled.div`
  padding: 0.75rem 1.25rem;
  display: flex;
  /* width: 90%; */
  /* border: solid 2px black; */
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  padding: 0.5rem;
`;
const Input = styled.input`
  outline-style: none;
  font-size: 0.875rem;
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: black;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 1.5rem;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>COMA.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
