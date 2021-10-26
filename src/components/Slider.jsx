import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* background-color: coral; */
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === "left" && "0.635rem"};
  right: ${({ direction }) => direction === "right" && "0.635rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 9;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.85s ease-in-out;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  /* height: 100%; */
  background-color: #${({ bg }) => bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 3rem;
`;
const Title = styled.h1`
  font-size: 3.5rem;
  text-align: start;
  font-weight: 600;
`;
const Description = styled.h1`
  font-weight: normal;
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const Button = styled.h1`
  font-weight: 400;
  font-size: 16px;
  display: inline-block;
  padding: 1rem;
  margin-top: 1rem;
  cursor: pointer;
  background: black;
  color: white;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
