import { Container } from "@material-ui/core";
import styled from "styled-components";
import { categories } from "../../Media/sliderData";
import { CategoryItem } from "./CategoryItem";

const ContainerCategories = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Title = styled.h4`
  font-size: 40px;
  display: flex;
  text-align: center;
  margin-top: 100px;
`;

const Categories = () => {
  return (
    <Container>
      <Title>PRODUCT CATEGORIES</Title>
      <ContainerCategories>
        {categories.map((item) => (
          <CategoryItem item={item} />
        ))}
      </ContainerCategories>
    </Container>
  );
};

export default Categories;
