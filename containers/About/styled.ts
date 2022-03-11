import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div``;

export const HeaderTop = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 143px;
  margin-top: 70px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 0;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  flex: 8;
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: 400;
  font-weight: normal;
  font-size: 64px;
  line-height: 70px;
  color: #272624;
  max-width: 505px;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const HeaderTopImage = styled.div`
  flex: 5;
  margin-top: 0px;
  position: relative;
  margin-bottom: 120px;
  text-align: right;
  margin-right: 32px;
  @media screen and (max-width: 768px) {
    /* display: none; */
    margin-right: 0;
    margin-top: 53px;
  }
`;

export const HeaderTopImageOne = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderTopImageOneMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const HeaderTopImageTwo = styled.div`
  position: absolute;
  top: 287px;
  left: 50px;
  @media screen and (max-width: 768px) {
    width: 226px;
    height: 303px;
    top: 155px;
    left: 0;
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 123px;
  margin-left: 147px;
  @media screen and (max-width: 768px) {
    /* display: none; */
    margin-top: 0;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const HeaderBottomText = styled.div`
  max-width: 688px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  color: #272624;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const HeaderBottomImage = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 52px;
`;

export const HeaderBottomImageOne = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderBottomImageOneMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeaderBottomImageTwo = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Middle = styled.div`
  margin-bottom: 90px;
  position: relative;
  @media screen and (max-width: 768px) {
    /* display: none; */
    margin-bottom: 0;
  }
`;

export const MiddleBackground = styled.div`
  height: 1274px;
  background: #272624;
  display: flex;
  @media screen and (max-width: 768px) {
    height: 800px;
  }
`;

export const MiddleContent = styled.div`
  padding-top: 159px;
  padding-left: 250px;
  padding-right: 250px;
  @media screen and (max-width: 1200px) {
    padding: 0;
    padding-left: 90px;
    padding-right: 90px;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const MiddleText = styled.div`
  margin-left: 124px;
  /* margin-left: auto; */
  @media screen and (max-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const MiddleTextTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 92px;
  line-height: 102px;
  color: #ffffff;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  max-width: 463px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 56px;
    margin-top: 60px;
    max-width: 100%;
  }
`;

export const MiddleTextContent = styled.div`
  margin-top: 48px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  color: #ffffff;
  max-width: 346px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 32px;
    margin-top: 24px;
    max-width: 100%;
  }
`;

export const MiddleCardGroupMobile = styled.div`
  display: none;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  @media screen and (max-width: 768px) {
    display: flex;
    max-width: 327px;
    justify-content: center;
  }
`;

export const MiddleCardHeader = styled.div`
  /* display: none; */
  width: 340px;
  height: 350px;
  position: absolute;
  top: 500px;
  left: 1050px;
  @media screen and (max-width: 1439px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MiddleCardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 64px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MiddleCard = styled.div`
  width: 340px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 275px 30px 110px 34px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    /* display: none; */
    margin: 0;
    flex-direction: column;
    padding: 120px 24px 0px 24px;
  }
`;

export const FooterMobileTitle = styled.div`
  display: none;
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 56px;
  align-items: center;
  letter-spacing: 0.01em;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const FooterMobileText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: none;
  margin-top: 32px;
  margin-bottom: 32px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FooterText = styled.div`
  margin-top: 153px;
  overflow-y: scroll;
  height: 300px;
  padding-right: 10px;
  ::-webkit-scrollbar {
    width: 0px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const FooterContent = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterContentMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FooterTextTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
  color: #272624;
  margin-top: 100px;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const FooterTextNum = styled.div`
  margin-top: 200px;
`;

export const FooterTextContent = styled.div`
  margin-top: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  width: 275px;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 48px;
  }
`;

export const FooterImage = styled.div`
  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;

export const FooterBottom = styled.div`
  display: none;
  margin-top: 62px;
  margin-bottom: 120px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const FooterImageOne = styled.div``;

export const FooterImageTwo = styled.div`
  margin-top: -45px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterImageThree = styled.div`
  margin-top: -218px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
