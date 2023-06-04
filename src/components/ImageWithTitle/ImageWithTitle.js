import React from "react";
import styled from "styled-components";
import imageSrc from "../../assets/image2.png";

const ImageWithTitle = () => {
  const title = " About Merge Wizards!";
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
    -webkit-box-align: center;
    align-items: center;
    padding: 5%;
    border-radius: 8px;
`;

const ImageWrapper = styled.div`
  margin:5%
`;

const Image = styled.img`
  width: 100%;
  margin-bottom:50px;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
 padding:20px;
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

