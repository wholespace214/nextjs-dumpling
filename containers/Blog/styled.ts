import styled from "styled-components";

export const BlogContainer = styled.div`
  margin-top: 23px;
  display: flex;
  flex-direction: row;
  gap: 100px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BlogContainerLeft = styled.div`
  flex: 5;
`;
export const BlogImage = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: -119px;
    z-index: -100;
    position: absolute;
  }
`;

export const BlogList = styled.div`
  margin-top: 371px;
  margin-left: 147px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BlogItem = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: 100;
  font-size: 24px;
  line-height: 30px;
`;

export const BlogContainerRight = styled.div`
  flex: 8;
  @media screen and (max-width: 768px) {
    margin-top: 330px;
  }
`;

export const BlogText = styled.div`
  margin-top: 100px;
  margin-right: 150px;
  @media screen and (max-width: 768px) {
    margin-right: 24px;
    margin-left: 24px;
  }
`;

export const BlogTextRead = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BlogTextReadImage = styled.span`
  padding-top: 3px;
`;

export const BlogTextReadText = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-left: 9px;
`;

export const BlogTextTitle = styled.div`
  margin-top: 40px;
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 70px;
  color: #272624;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const BlogTextContent = styled.div`
  margin-top: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  max-width: 574px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
    max-width: 100%;
  }
`;

export const BlogTextLink = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-top: 44px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BlogTextBtnMobile = styled.div`
  margin-top: 40px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const BlogTextLinkText = styled.div`
  text-transform: uppercase;
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: 100;
  font-size: 13px;
  line-height: 24px;
  color: #e9342e;
  cursor: pointer;
`;

export const BlogTextLinkIcon = styled.div`
  width: 17px;
  height: 17px;
  margin-top: 4px;
`;

export const BlogCardGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 180px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 24px;
  }
`;

export const BlogCardGroupLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

export const BlogCardGroupRight = styled.div`
  margin-top: 680px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-left: 70px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-left: 0px;
  }
`;

export const BlogCardGroupBottom = styled.div`
  margin-top: 108px;
  margin-bottom: 70px;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-left: 12px;
    margin-right: 12px;
  }
`;

export const BlogMobileTitle = styled.div`
  display: none;
  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 56px;
  letter-spacing: 0.01em;
  margin-left: 12px;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const BlogMobileList = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-left: 12px;
    gap: 24px;
    margin-top: 100px;
  }
`;

export const BlogMobileItem = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
`;
