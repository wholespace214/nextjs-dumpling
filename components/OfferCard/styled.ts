import styled from "styled-components";

type OfferCardProps = {
  color: string;
};

export const OfferCardDiv = styled.div<OfferCardProps>`
  padding: 35px;
  background: ${(props: OfferCardProps) => props.color};
  height: 265px;
  cursor: pointer;
  /* padding-bottom: 30px; */
  :hover {
    /* background: #272624;
    color: #fff !important; */
    animation: example;
    animation-duration: 1s;

    @keyframes example {
      from {
        background: ${(props: OfferCardProps) => props.color};
        color: #000;
      }
      to {
        background: #272624;
        color: #fff;
      }
    }
  }
`;

export const OfferCardIcon = styled.div``;

export const OfferCardTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  margin-top: 56px;
`;

export const OfferCardText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-top: 16px;
`;
