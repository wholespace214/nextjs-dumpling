import styled from "styled-components";

export const NewsContainer = styled.div`
  margin: 64px 32px 0px 34px;
  padding: 140px 401px 140px 114px;
  background-color: #272624;
`;

export const NewsTextWhite = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  color: #ffffff;
`;

export const NewsTextBlack = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  color: #5c5b5b;
`;

export const NewsButton = styled.div`
  border: 1px solid #272624;
  box-sizing: border-box;
  background-color: #e9342e;
  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  color: white;
  padding: 21px 67px;
  width: 229px;
  margin-top: 40px;
  cursor: pointer;
  :hover {
    background-color: #ac221c;
    border: 1px solid #e9342e;
  }
  :active {
    background: #fbfbfb;
    color: black;
  }
`;
