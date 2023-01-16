import React from "react";
import styled from "styled-components";
// import logo from "../assets/logo.svg";
import Input from "./Input";

const Sidebar = () => {
  let url = "";
  return (
    <Container>
      <Form>
            <h1>Log in</h1>
            <label>Log in ID</label>
            <Input type="email" placeholder="Enter Login ID" className="fill" />
            <label>Password</label>
            <Input type="password" placeholder="Password" className="fill" />

            <aside>
              <div className="line">
                <div className="sid sid2">
                <input type="checkbox" /> <p>Remmember Me</p>
                </div>
                <div className="change">Change Password </div>
              </div>
            </aside>
            <aside className="sid">
            <input type="checkbox" /><p>Agree to <a href={url}>Terms and Conditions</a></p>
            </aside>

            <button className="but">Log In</button>
            <h4>Don't have an account?  <span><a href={url}>Register here</a></span> </h4>
        </Form>
    </Container>
  );
};


const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;

  h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 110%;
    /* identical to box height, or 53px */
    display: flex;
    align-items: center;
    text-align: center;
    margin: auto;
    margin-top: 100px;
  }
  label{
    padding: 20px;
    padding-bottom: 2px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 110%;
  }
  .fill{
      box-sizing: border-box;
      width: 500px;
      height: 40px;
      padding: 0 10px;
      border: 1px solid rgba(4, 7, 47, 0.4);
      border-radius: 8px;
      margin-left: 20px;
      margin-top: 5px;
  }
  .sid{
      display: flex;
      margin: 5px 20px;
      display: flex;
      justify-content:space-between;
      width:237px;
      margin-left:0;
  }
  .line{
    display : flex;
    justify-content: space-between;
  }
  .sid2{
    width:136px;
  }
  .change{
    color:#F78719;
    font-weight: 400;
  }

  button {
      width: 400px;
      height: 40px;
      background: #1575A7;
      border-radius: 8px;
      margin : auto;
      margin-top : 20px;
  }
  h4{
      margin: auto;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 450;
      font-size: 18px;
      line-height: 27px;
      padding: 10px 0 0 0 ;
      color: #04072F;
  }
  a{
    color:#F78719;
  }
`;

const Container = styled.div`
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.16);
  background-color: #FFF;
  width: 700px;
  height:650px;
  radius:12px;
  border-radius: 12px;
  padding: 0 2rem;
  margin : auto;

`;

export default Sidebar;
