import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: #fbfbfb;
  border: 1px solid #272624;
  box-sizing: border-box;
  cursor: pointer;
  :hover {
    background: #e9342e;
    border: 1px solid #e9342e;
    color: white !important;
  }
  :active {
    background: #ac221c;
    border: 1px solid #ac221c;
    color: white !important;
  }
`;

const Text = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  :hover {
    color: white;
  }
  :active {
    color: white;
  }
`;

export default {
  ButtonContainer,
  Text,
};
