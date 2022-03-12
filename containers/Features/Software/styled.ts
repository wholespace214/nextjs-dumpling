import styled from "styled-components";

const SoftwareContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  gap: 110px;
  margin: 0px 34px 197px 140px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    margin: 80px 24px 0 24px;
  }
`;

const HeaderText = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const HeaderTextTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 70px;

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
    color: #272624;
  }
`;

const HeaderTextContent = styled.div`
  max-width: 574px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  display: flex;
  align-items: center;

  margin-top: 16px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const HeaderTextBtn = styled.div`
  width: 229px;

  margin-top: 32px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 8px;
  }
`;

const HeaderImage = styled.div`
  flex: 1;

  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderMobileImage = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const HeaderImageOne = styled.div``;

const HeaderImageTwo = styled.div`
  position: absolute;
  top: 245px;
  left: -260px;
`;

const HeaderImageLogo = styled.div`
  position: absolute;
  top: 320px;
  left: -380px;
  transform: rotate(4deg);
`;

//! Benefits

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

  max-width: 668px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    font-size: 14px;
    line-height: 24px;
    margin-top: 16px;
  }
`;

const BenefitsSwiper = styled.div`
  margin-top: 56px;
  /* cursor: pointer; */
  @media screen and (max-width: 768px) {
    display: none;
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

const BenefitsSwiperMobile = styled.div`
  margin-top: 32px;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

//! Provide

const Provide = styled.div`
  padding: 128px 0px 130px 0px;
  background: #272624;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 80px 24px 100px 24px;
  }
`;

const ProvideTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 70px;

  display: flex;
  align-items: center;
  letter-spacing: 0.01em;

  margin-left: 150px;

  color: #ffffff;
  @media screen and (max-width: 768px) {
    line-height: 50px;
  }
`;

const ProvideListDiv = styled.div``;

const ProvideList = styled.div`
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 96px;
  row-gap: 56px;
  justify-content: center;
`;

const ProvideItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const ItemIcon = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    align-items: start;
  }
`;

const ItemContent = styled.div``;

const ItemTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 24px;
  text-transform: capitalize;
  color: #ffffff;
`;

const ItemText = styled.div`
  margin-top: 8px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
  max-width: 360px;
`;

//! Description

const Description = styled.div`
  padding: 92px 0 0 0;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 64px 24px 0px 24px;
  }
`;

const DescriptionText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 40px;
  max-width: 690px;
  margin: auto;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

const DescriptionTextRed = styled.div`
  color: red;
`;

const DescriptionImage = styled.div`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

//! Partners

const Partners = styled.div`
  padding: 226px 0px 0px 0px;
  @media screen and (max-width: 768px) {
    padding: 0 0 0 26px;
    margin-top: 110px;
  }
`;

const PartnersText = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 50px;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  color: #272624;
  justify-content: center;
  margin-right: 810px;
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const PartnersList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  max-width: 1040px;

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

  //?  Header
  Header,
  HeaderText,
  HeaderTextTitle,
  HeaderTextContent,
  HeaderTextBtn,
  HeaderImage,
  HeaderImageOne,
  HeaderImageTwo,
  HeaderImageLogo,
  HeaderMobileImage,

  //?  Benefits
  Benefits,
  BenefitsHeader,
  BenefitsTitle,
  BenefitsText,
  BenefitsSwiper,
  BenefitsPage,
  BenefitsSwiperMobile,
  BenefitsPageLeft,
  BenefitsPageRight,

  //?  Provide
  Provide,
  ProvideTitle,
  ProvideListDiv,
  ProvideList,
  ProvideItem,
  ItemIcon,
  ItemContent,
  ItemTitle,
  ItemText,

  //? Description
  Description,
  DescriptionText,
  DescriptionTextRed,
  DescriptionImage,

  //? Partners
  Partners,
  PartnersText,
  PartnersList,
  PartnersItem,
  PartnersItemNot,
  PartnersListMobile,
  PartnersItemImage,
};
