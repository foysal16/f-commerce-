//import { useStyles } from "../../HomeStyle";
import { Container } from "@material-ui/core";
import styled from "styled-components";

const CategorieContainer = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  opacity: 0.65;
`;
const Info = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  margin-bottom: 30px;
`;
const Button = styled.button`
  border-radius: none;
  background-color: #000000;
  color: #ffffff;
  width: 150px;
  height: 35px;
  cursor: pointer;
  font-weight: 600;
`;

export const CategoryItem = ({ item }) => {
  return (
    <Container>
      <CategorieContainer>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </CategorieContainer>
    </Container>
  );
};
