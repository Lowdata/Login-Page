import React from "react";
import styled from "styled-components";
import bgImg from "../assets/image.jpeg";
import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #FF0000;
  background: #F5F5F5;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  // background-size: cover;
  background-repeat: no-repeat;
  display: flex;
`;

export default App;
