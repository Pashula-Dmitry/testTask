import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  height: auto;
  display: block;
`;

const VideoContaoner = styled.p`
  margin-bottom: 45px;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
`;

const ImageDescription = styled.div`
  margin: 20px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
`;

const DetailInfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextBold = styled.span`
  font-weight: 700;
`;

export {
  CardContainer,
  Image,
  ImageDescription,
  DetailInfoSection,
  ImageContainer,
  VideoContaoner,
  TextBold,
};
