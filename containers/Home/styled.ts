import styled from "styled-components";

export const SafetyisContainer = styled.div`
  display: flex;
  margin-left: 32px;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-left: 0px;
    padding: 0px 24px 0px 24px;
  }
`;

export const SafetyisRectangle = styled.div`
  width: 58px;
  height: 6px;
  background-color: #e9342e;
  margin-top: 146px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SafetyisText = styled.div`
  margin-top: 110px;
  max-width: 500px;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

export const SafetyisTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 92px;
  line-height: 100px;
  letter-spacing: 0.01em;
  color: #272624;
  @media screen and (max-width: 600px) {
    font-size: 56px;
    line-height: 64px;
  }
`;

export const SafetyisContent = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #020202;
  max-width: 454px;
  margin-top: 16px;
`;

export const SafetyisButton = styled.div`
  float: left;
  width: 229px;
  margin-top: 40px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SafetyisMobileButton = styled.div`
  display: none;
  margin-top: 40px;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const SafetyisDiv = styled.div`
  position: relative;
  margin-top: 72px;
  @media screen and (max-width: 600px) {
    margin-top: 24px;
  }
`;

export const SafetyisLogo = styled.div`
  position: absolute;
  top: 392.52px;
  left: 338.42px;
  @media screen and (max-width: 600px) {
    width: 140px;
    height: 140px;
    top: 125px;
    left: 211px;
  }
`;

export const AboutContainer = styled.div`
  margin-top: 196px;
  padding: 100px 146px;
  @media screen and (max-width: 600px) {
    padding: 0px 24px;
    margin-top: 120px;
  }
`;

export const AboutText = styled.div`
  margin: auto;
  max-width: 687px;
`;

export const AboutTitle = styled.div`
  text-transform: uppercase;
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 70px;
  color: #272624;

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  @media screen and (max-width: 600px) {
    line-height: 56px;
  }
`;

export const AboutContent = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #272624;
  margin-top: 16px;
  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const AboutFeature = styled.div`
  margin-top: 72px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FeatureCard = styled.div`
  flex: 1;
  background-color: #f3f3f3;
`;

export const FeatureCardImage = styled.div`
  text-align: center;
  margin-top: 57px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 600px) {
    max-width: 279px;
  }
`;

export const FeatureCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin: 64px 36.5px 36px 32px;
  justify-content: space-between;
`;

export const FeatureCardText = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
`;

export const FeatureCardBack = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const OfferContainer = styled.div`
  margin-top: 106px;
  @media screen and (max-width: 600px) {
    /* display: none; */
    margin-top: 120px;
    padding: 0 24px;
  }
`;

export const OfferTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 92px;
  line-height: 102px;
  letter-spacing: 0.01em;
  color: #272624;
  margin-top: 96px;
  margin-left: 378px;
  text-transform: uppercase;
  max-width: 456px;
  @media screen and (max-width: 600px) {
    font-family: "Heavitas [RUS by Daymarius]";
    font-size: 56px;
    line-height: 64px;
    margin: 0;
  }
`;

export const OfferMobileText = styled.div`
  margin-top: 16px;

  display: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  color: #272624;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const OfferMobileCardGroup = styled.div`
  margin-top: 32px;
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;

export const OfferCardGroup = styled.div`
  padding: 72px 50px 119px 50px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const OfferCardGroupRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OfferCardDiv = styled.div`
  flex: 1;
  height: 336px;
`;

export const OfferCardDivText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #272624;
`;

export const WorkContainer = styled.div`
  padding: 96px 147px 2px 33px;
  @media screen and (max-width: 600px) {
    /* display: none; */
    margin-top: 50px;
    padding: 0px 24px;
  }
`;

export const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WorkHeaderTitle = styled.div`
  text-transform: uppercase;
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 60px;
  width: 342px;
`;

export const WorkHeaderText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  max-width: 802px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const WorkOnline = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
`;

export const WorkOnlineImage = styled.div``;

export const WorkOnlineText = styled.div``;

export const WorkOnlineTextTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: #000000;
  margin-top: 189px;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
`;

export const WorkOnlineTextContent = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  max-width: 275px;
  margin-top: 16px;
  @media screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

export const WorkButton = styled.div`
  margin-top: 40px;
  width: 229px;
  float: right;
  @media screen and (max-width: 600px) {
    width: 100%;
    float: none;
    margin-bottom: 50px;
  }
`;

export const BlogContainer = styled.div`
  margin-top: 130px;
  padding: 200px 261px 100px 34px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    /* display: none; */
    padding: 0px 24px;
    margin-bottom: 81px;
    flex-direction: column;
    gap: 64px;
  }
`;

export const BlogTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 60px;
`;

export const BlogGroupOne = styled.div``;

export const BlogGroupTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const BlogButton = styled.div`
  width: 229px;
  margin-left: 116px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    display: none;
  }
`;
