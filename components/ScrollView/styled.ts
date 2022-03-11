import styled from "styled-components";

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  padding: 33px;
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`;

export const Content = styled.div`
  overflow-y: scroll;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  /* ::-webkit-scrollbar-track {
    background: #f1f1f1;
  } */

  /* Handle */
  /* ::-webkit-scrollbar-thumb {
    background: #888;
  } */

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  /* border: 1px solid black; */
`;

export const ContentItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 146px;
  max-height: 500px;
  margin-top: 50px;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 64px;
  }
  /* padding-bottom: 10px; */
`;

export const ContentMainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;

export const MainTextTitle = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: #000000;
`;

export const MainTextContent = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;

  max-width: 313px;
`;

export const ContentImage = styled.div``;

export const Tool = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  justify-content: space-between;
`;

export const ToolButton = styled.div`
  width: 229px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ToolLine = styled.div`
  border: 1px solid #2e352e;
  height: 100px;
  margin-right: 450px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ToolNum = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ToolNumMobile = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
