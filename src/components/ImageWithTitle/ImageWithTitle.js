import React from "react";
import styled from "styled-components";
import imageSrc from "../../assets/image2.png";

const ImageWithTitle = () => {
  const title = " Welcome at Merge Wizards!";
  const paragraph =
    "Merge your gaming adventures with knowledge and experience at Merge Wizards. Discover a world of game reviews that will enchant and guide you through the realm of gaming. Unlock the power of informed decisions and embark on epic gaming quests with confidence.";

  return (
    <AppContainer>
    <Container>
      <ImageWrapper>
        <Image src={imageSrc} alt="Image" />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </ContentWrapper>
    </Container>
    </AppContainer>
  );
};
const AppContainer = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
display: flex;
background-color: black;
color: white;
align-items: center;
padding: 20px;
border: 2px solid #7E1717;
border-radius: 8px;
box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
max-width: 800px; /* Adjust the maximum width as per your requirements */
margin: 0 auto; /* Center the container horizontally */
`;

const ImageWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;
  margin-top: 70px;
  margin-left: 100px;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin-bottom:50px;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  margin-left: 50px;
  color: #7E1717;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-left: 50px;
  color: #cccccc;
  margin-right:75px;
  `;

export default ImageWithTitle;

