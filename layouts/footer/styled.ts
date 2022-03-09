import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 66px;
  padding: 0px 146px 10px 148px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 48px 0px 0px 0px;
  }
`;

export const FooterLogo = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FooterListGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 164px;
`;

export const FooterList = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    text-align: center;
  }
`;

export const FooterListTwo = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FooterItem = styled.div`
  margin-top: 20px;
  cursor: pointer;
`;

export const FooterItemHr = styled.hr``;

export const FooterTool = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 40px;
    margin-bottom: 42px;
  }
`;

export const FooterToolTop = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
`;

export const FooterToolBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 112px;
  gap: 25px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;

export const FooterLink = styled.span`
  cursor: pointer;
`;

export const FooterVisa = styled.div`
  margin-top: 7px;
  cursor: pointer;
`;

export const FooterToolText = styled.div`
  display: flex;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  color: #131313;
  opacity: 0.4;
  margin-top: 27px;
  justify-content: center;
`;

export const FooterMiddle = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 60px;
  }
`;

export const MiddleList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
`;

export const MiddelItem = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  text-align: right;
  opacity: 0.4;
  color: #131313;
`;
