// import { Description } from "@material-ui/icons";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  padding: 3rem;
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 70vh;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Description = styled.p`
  margin: 1.25rem 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin: 2rem 0;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  padding: 0.75rem;
  /* border: 1px gray solid; */
  border-radius: 50%;
  margin: 0 0.5rem;
  background-color: ${({ color }) => color};
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 0.625rem;
  padding: 0.4rem;
  border: 1px solid gray;
  outline: none;
  cursor: pointer;
`;
const FilterSizeOption = styled.option`
  background-color: white;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  border: 1px solid teal;
  padding: 1rem;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 1rem;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  /* font-weight: 600; */

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/6832161/2018/11/14/6ebfb791-4cdd-4a16-aff3-0df944e647511542196198349-WROGN-Men-Black-Solid-Bomber-3181542196198219-2.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Jack & Jones Men Black Solid Bomber</Title>
          <Description>
            Black solid bomber, has a stand collar, two pockets, zip closure,
            long sleeves, straight hem and has no lining
          </Description>
          <Price>Rs. 3000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="gray" />
              <FilterColor color="brown" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
