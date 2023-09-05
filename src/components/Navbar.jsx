import React from "react";
import styled from "styled-components";

//our styled components:
const Container = styled.div`
  ${"" /* background-color: black; */}
  height: 65px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div``;
const Right = styled.div``;
const Center = styled.div``;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>Left</Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
