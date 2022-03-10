import styled from "styled-components";

export const StyledContainer = styled.header`
  margin: 0;
  padding: 44px 32px 44px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 61px 24px 0px 24px;
    flex-direction: row-reverse;
  }
`;

export const Menu = styled.div`
  cursor: pointer;
  @media screen and (max-width: 768px) {
    /* display: flex; */
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  margin-left: 90px;
  @media screen and (max-width: 768px) {
    /* display: none; */
    margin-left: 0;
    /* margin-top: -5px; */
  }
`;

export const Tool = styled.div`
  display: flex;
  padding-bottom: 14.58px;
`;

export const LanDiv = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SearchImag = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LanSelect = styled.div`
  display: flex;
  margin-left: 42px;
`;

interface LanOptionDivProps {
  show: boolean;
}

export const LanOptionDiv = styled.div`
  position: absolute;
  display: ${(props: LanOptionDivProps) => (props.show ? "flex" : "none")};
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.12);
  margin-left: 20px;
  padding: 16px 0px 16px 0px;
  top: 35px;
  z-index: 1;
`;
export const LanOption = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 24px;
  color: #272624;

  padding: 12px 32px 12px 24px;

  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #938e86;
  }
`;

export const SearchDiv = styled.div`
  width: 20px;
  height: 20px;
`;

export const LanText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  margin-right: 15px;
  color: #272624;
`;

export const DownIcon = styled.div`
  margin-top: 3px;
  width: 16px;
  height: 9.38px;
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  background-color: #272624;
  height: 100vh;
  overflow: "overlay";
`;

export const UserIcon = styled.div`
  margin-left: 40px;
`;
