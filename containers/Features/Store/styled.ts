import styled from "styled-components";

const SoftwareContainer = styled.div``;

//! Header

const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px 150px 200px 148px;
  gap: 250px;
  @media screen and (max-width: 768px) {
    margin: 0 24px 9px 24px;
    flex-direction: column;
    gap: 16px;
  }
`;

const HeaderText = styled.div`
  flex: 1;
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 90px;
  }
`;

const HeaderTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 70px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #000000;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

const HeaderImageMobile = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    margin-top: 32px;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const HeaderContent = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;

  max-width: 475px;

  margin-top: 16px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeaderBtn = styled.div`
  width: 229px;
  margin-top: 32px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 0;
  }
`;

const HeaderImage = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderImageOne = styled.div``;

const HeaderImageTwo = styled.div`
  position: absolute;
  top: 250px;
  left: -120px;
`;

const HeaderImageLogo = styled.div`
  position: absolute;
  top: -70px;
  right: -100px;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  background: #fbfbfb;
  padding: 48px 0px 48px 0px;
  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    /* width: 1000px; */
  }
`;

const IconItem = styled.div`
  min-width: 170px;
`;

const IconItemImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

//! About

const About = styled.div`
  padding: 140px 146px 100px 261px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0 23px 0 23px;
  }
`;

const AboutText = styled.div``;

const AboutTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 70px;
  color: #252525;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  @media screen and (max-width: 768px) {
    line-height: 50px;
  }
`;

const AboutContent = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;

  max-width: 911px;
  margin-top: 16px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const AboutImage = styled.div`
  max-width: 918px;
  max-height: 532px;
  margin-top: 50px;
`;

const AboutAlter = styled.div`
  background: #f3f3f3;

  display: flex;
  flex-direction: column;

  padding: 40px;

  position: absolute;
  top: 860px;
  right: 125px;
  @media screen and (max-width: 768px) {
    position: unset;
  }
`;

const AlterHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const AlterIcon = styled.div``;

const AlterTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
  color: #000000;

  margin-left: 8px;
`;

const AlterText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #000000;

  margin-left: 32px;
  max-width: 462px;
`;

const AlterTextRed = styled.span`
  color: red;
`;

const Benefits = styled.div`
  background: #fbfbfb;
  padding: 130px 31px 146px 147px;
  @media screen and (max-width: 768px) {
    padding: 82px 24px 150px 24px;
  }
`;

const BenefitsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: none;
  }
`;

const BenefitsTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 70px;

  display: flex;
  letter-spacing: 0.01em;

  color: #272624;

  @media screen and (max-width: 768px) {
    line-height: 50px;
  }
`;

const BenefitsText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;

  color: #000000;

  max-width: 574px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 14px;
    line-height: 24px;
    margin-top: 16px;
  }
`;

const BenefitsSwiper = styled.div`
  margin-top: 56px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BenefitsSwiperMobile = styled.div`
  margin-top: 32px;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const BenefitsPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 34px;
  margin-top: 60px;
`;

const BenefitsPageLeft = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const BenefitsPageRight = styled.div`
  transform: rotate(180deg);
  align-items: center;
  display: flex;
  cursor: pointer;
`;

//! Manufacturing

const Manufacturing = styled.div`
  margin-top: 96px;
  @media screen and (max-width: 768px) {
    padding: 0 24px 0 24px;
  }
`;

const ManufacturingContent = styled.div`
  padding: 0px 0px 0px 261px;
  @media screen and (max-width: 768px) {
    padding: 0 0 0 0;
  }
`;

const ManufacturingText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  max-width: 911px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const ManufacturingTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 70px;

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  @media screen and (max-width: 768px) {
    line-height: 50px;
    font-size: 32px;
    /* max-width: 287px; */
  }
`;

const ManufacturingImage = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6px;
  margin-left: 42px;
  @media screen and (max-width: 768px) {
    /* display: none; */
    margin: 0;
  }
`;
const ManufacturingImageOne = styled.div`
  margin-top: 181px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const ManufacturingImageTwo = styled.div`
  margin-left: 111px;
  @media screen and (max-width: 768px) {
    /* display: none; */
    display: flex;
    margin: 32px auto 0 auto;
  }
`;

//! Work

const Work = styled.div`
  padding: 74px 0px 0px 340px;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 154px 24px 0 24px;
  }
`;

const WorkTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 70px;

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
`;

const WorkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 55px;
  @media screen and (max-width: 768px) {
    gap: 40px;
  }
`;

const WorkItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const WorkItemTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
`;

const WorkItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkItemText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  margin-top: 16px;

  max-width: 568px;
`;

const WorkItemIcon = styled.div`
  display: flex;
  align-items: baseline;
`;

const WorkTimeLine = styled.div`
  border: 1px solid #e9342e;
  height: 500px;
  width: 0px;

  position: absolute;
  top: 200px;
  left: 372px;
  @media screen and (max-width: 375px) {
    top: 300px;
    left: 38px;
  }
  @media screen and (max-width: 428px) and (min-width: 400px) {
    top: 70vw;
    left: 9.5vw;
    height: 105vw;
  }
`;

//! Partners

const Partners = styled.div`
  padding: 226px 148px 0px 261px;
  @media screen and (max-width: 768px) {
    padding: 0 0 0 26px;
    margin-top: 110px;
  }
`;

const PartnersText = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #272624;
`;

const PartnersList = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-top: 58px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const PartnersListMobile = styled.div`
  display: none;
  margin-top: 40px;
  margin-bottom: 96px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const PartnersItem = styled.div`
  width: 330px;
  height: 330px;
  border: 1px solid #d1d1d1;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    max-width: 164px;
    max-height: 164px;
  }
`;

const PartnersItemImage = styled.div`
  max-width: 100px;
  max-height: 100px;
`;

const PartnersItemNot = styled.div`
  width: 330px;
  height: 330px;
`;

export default {
  SoftwareContainer,

  //! Header
  Header,
  HeaderText,
  HeaderTitle,
  HeaderContent,
  HeaderBtn,
  HeaderImage,
  HeaderImageOne,
  HeaderImageTwo,
  HeaderImageLogo,
  HeaderImageMobile,

  //! Icon
  IconList,
  IconItem,
  IconItemImage,

  //! About
  About,
  AboutText,
  AboutContent,
  AboutTitle,
  AboutImage,
  AboutAlter,
  AlterHeader,
  AlterIcon,
  AlterTitle,
  AlterText,
  AlterTextRed,

  //! Benefits
  Benefits,
  BenefitsHeader,
  BenefitsTitle,
  BenefitsText,
  BenefitsSwiper,
  BenefitsSwiperMobile,
  BenefitsPageLeft,
  BenefitsPageRight,
  BenefitsPage,

  //! Manufacturing
  Manufacturing,
  ManufacturingContent,
  ManufacturingText,
  ManufacturingImage,
  ManufacturingTitle,
  ManufacturingImageOne,
  ManufacturingImageTwo,

  //! Work
  Work,
  WorkTitle,
  WorkTimeLine,
  WorkList,
  WorkItem,
  WorkItemContent,
  WorkItemIcon,
  WorkItemText,
  WorkItemTitle,

  //! Partners
  Partners,
  PartnersText,
  PartnersList,
  PartnersItem,
  PartnersItemNot,
  PartnersListMobile,
  PartnersItemImage,
};
