import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Container >
        {/* <Wrapper /> */}
    </Container>
  );
};

const Container = styled.div`
//   width: 100%;
//   height: 100%;
  width: 500px;
  height: 830px;
  top : 243px;
  left: 142px;
//   position: absolute;
  display: flex;
  justify-content: center;
  background-position: center;
//   background-size: cover;
  align-items: center;

  h1 {
    font-size: 65px;
    font-weight: 900;
    color: #343434;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;
// const Wrapper = styled.div`
//   background-image: url(${bgImg});
//   background-position: left;
//   background-size: cover;
//   background-repeat: no-repeat;
//   display: flex;
// `;
export default Main;
