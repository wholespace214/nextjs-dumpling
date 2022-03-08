import styled from "styled-components";

type OfferCardProps = {
  color: string;
};

export const OfferCardDiv = styled.div`
  padding: 35px;
  background-color: ${(props: OfferCardProps) => props.color};
  height: 280px;
  /* padding-bottom: 30px; */
`;

export const OfferCardIcon = styled.div``;

export const OfferCardTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: ${(props: OfferCardProps) =>
    props.color === "#272624" ? "#FFFFFF" : "#000000"};
  margin-top: 56px;
`;

export const OfferCardText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-top: 16px;
  color: ${(props: OfferCardProps) =>
    props.color === "#272624" ? "#FFFFFF" : "#000000"};
`;
