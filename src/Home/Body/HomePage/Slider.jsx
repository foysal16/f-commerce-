import React, { useState } from "react";
import { useStyles } from "../../HomeStyle";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import styled from "styled-components";
import { sliderItems } from "../../Media/sliderData";

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Warpper = styled.div`
  display: flex;
  height: 100%;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 20px Opx;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 20px;
  width: 300px;
  height: 50px;
`;

const Slider = () => {
  const [slideIndex, seSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      seSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      seSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </Arrow>
      <Warpper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} alt="Slide one" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>BUY NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Warpper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </Arrow>
    </div>
  );
};

export default Slider;
