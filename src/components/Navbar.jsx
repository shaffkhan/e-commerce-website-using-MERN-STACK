import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search,ShoppingCartOutlined } from "@material-ui/icons";
//our styled components:
const Container = styled.div`
  height: 65px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap:25px;
`;
const Center = styled.div``;
//left side components///
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  margin-right: 25px;
`;

const SearchContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

//Center components///
const Logo = styled.h1`
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

//right side components//
const MenuItems = styled.div`
  cursor: pointer;
  font-weight: 14px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input /> <Search style ={{fontSize:20,color:"gray"}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shaff.</Logo>
        </Center>
        <Right>
          <MenuItems>Register</MenuItems>
          <MenuItems>Sign In</MenuItems>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
          </Badge>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
