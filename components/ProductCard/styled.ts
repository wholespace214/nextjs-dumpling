import styled from "styled-components";

export const CardImage = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: 120px;
  /* margin: auto; */
`;

export const CardName = styled.div`
  position: absolute;
  bottom: 64px;
  left: 32px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export const CardBottom = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;

  display: flex;
  flex-direction: row;
`;

export const CardPrice = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: #000000;
`;

export const CardBack = styled.div`
  margin-left: 155px;
  cursor: pointer;
`;

export const ProductCardContainer = styled.div`
  height: 491px;
  width: 290px;
  /* border: 1px solid black; */

  position: relative;

  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  cursor: pointer;
  :hover ${CardBack} {
    margin-left: 165px;
    animation: hover1;
    animation-duration: 1s;

    @keyframes hover1 {
      from {
        margin-left: 155px;
      }
      to {
        margin-left: 165px;
      }
    }
  }
`;
