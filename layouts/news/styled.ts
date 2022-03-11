import styled from "styled-components";

export const NewsContainer = styled.div`
  margin: 64px 32px 0px 34px;
  padding: 140px 0px 140px 0px;
  background-color: #272624;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 112px 24px 90px 24px;
  }
`;

export const NewsDiv = styled.div`
  margin: auto;
`;

export const NewsTextWhite = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  color: #ffffff;
  @media screen and (max-width: 768px) {
  }
`;

export const NewsTextBlack = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  color: #5c5b5b;
  @media screen and (max-width: 768px) {
  }
`;

export const NewsButton = styled.div`
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;

  letter-spacing: 0.5px;
  text-transform: uppercase;

  background-color: #e9342e;
  padding: 21px 69.5px;
  color: white;

  margin-top: 40px;
  cursor: pointer;
  :hover {
    background-color: #ac221c;
    /* border: 1px solid #e9342e; */
  }
  :active {
    background: #fbfbfb;
    color: black;
  }
  @media screen and (max-width: 768px) {
    margin-top: 80px;
    float: none;
  }
`;

export const EmailGroup = styled.div`
  margin-top: 24px;
  @media screen and (max-width: 768px) {
    margin-top: 64px;
  }
`;
