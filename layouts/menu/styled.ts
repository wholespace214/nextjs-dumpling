import styled from "styled-components";

export const MenuContainer = styled.div`
  background-color: #272624;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    background-color: red;
    height: 100vh;
    width: 100vw;
  }
`;

export const MenuBlock = styled.div`
  padding: 80px 483px 0px 392px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const MenuItem = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 70px;
  color: #ffffff;
  cursor: pointer;
`;

export const MenuClose = styled.div`
  padding-top: 70px;
  padding-left: 70px;
  cursor: pointer;
`;
