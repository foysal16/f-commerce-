import React from "react";
import styled from "styled-components";
//import ProfileImage from "../../Components/media/logo.png";

const ContainerFooter = styled.div`
  display: flex;
  background-color: #000000;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  margin: 20px auto;
  color: #ffffff;
`;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <Left></Left>
      <Center>Copyright ©2021 F-Ecomm, Inc. All rights reserved.</Center>
      <Right></Right>
    </ContainerFooter>
  );
};

export default Footer;
