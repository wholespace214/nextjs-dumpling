import styled from "styled-components";

export const MenuContainer = styled.div`
  margin: 0;
  background-color: #272624;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
  }
`;

export const MenuBlock = styled.div`
  padding: 140px 483px 0px 392px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  @media screen and (max-width: 768px) {
    padding: 171px 0px 0px 30px;
  }
`;

export const MenuItem = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 70px;
  color: #fff;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-family: "Heavitas [RUS by Daymarius]";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
  }
`;

export const MenuClose = styled.div`
  padding-top: 70px;
  padding-left: 70px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    padding-top: 46px;
    padding-left: 38px;
  }
`;
