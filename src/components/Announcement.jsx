import styled from "styled-components";

const Container = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: teal;
  color: white;
  text-align: center;
  /* font-weight: 500; */
  font-size: 14px;
`;
const Announcement = () => {
  return <Container>Free Shipping on Orders above 500Rs.</Container>;
};

export default Announcement;
