import { Container } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { popularProducts } from "../../Media/sliderData";
import Product from "./Product";

const ContainerProduct = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Title = styled.h4`
  font-size: 40px;
  display: flex;
`;

const Products = () => {
  return (
    <Container>
      <Title>POPURLAR PRODUCTS</Title>
      <ContainerProduct>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </ContainerProduct>
    </Container>
  );
};

export default Products;
