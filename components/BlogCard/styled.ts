import styled from "styled-components";

export const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlogCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const BlogCardImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BlogCardType = styled.div``;

export const BlogCardDate = styled.div``;

export const BlogCardDateLine = styled.div`
  height: 12px;
  border: 1px solid #868f9b;
  margin-top: 5px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const BlogCardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  max-width: 343px;
`;
