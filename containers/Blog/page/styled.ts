import styled from "styled-components";

export const Blog = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: relative;
  @media screen and (max-width: 768px) {
    /* padding: 0; */
  }
`;

export const BlogImage = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    /* margin-top: -119px; */
    display: block;
    top: -120px;
    left: 0px;
    z-index: -100;
    position: absolute;
  }
`;

export const BlogBackBtn = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: none;
  }
  cursor: pointer;
`;

export const BlogBackBtnText = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
  color: #272624;
`;

export const BlogBackBtnIcon = styled.div`
  /* width: 17px; */
  display: flex;
  align-items: center;
  margin-right: 13px;
`;

export const BlogPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 100px;

  margin-top: 93px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 510px;
    gap: 16px;
  }
`;

export const BlogPageContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const LeftHeader = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 18px;
  text-transform: uppercase;
  color: #000000;
  display: flex;
  flex-direction: row;
  gap: 32px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LeftTitle = styled.div`
  font-family: "Heavitas [RUS by Daymarius]";
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 70px;

  margin-top: 48px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
    margin-top: 0;
  }
`;

export const LeftUser = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LeftUserIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftUserContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 16px;
`;

export const LeftUserContentName = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: #000000;
`;

export const LeftUserContentType = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
  opacity: 0.5;

  margin-top: 8px;
`;

export const BlogPageContainerRight = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const RightIconList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RightIconItem = styled.div`
  cursor: pointer;
`;

export const RightContent = styled.div`
  flex: 9;

  max-width: 688px;
`;

export const HeaderText = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #000000;
  @media screen and (max-width: 768px) {
    /* font-size: 14px; */
    line-height: 24px;
  }
`;

export const Title = styled.div`
  font-family: "Heavitas";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-transform: capitalize;

  color: #000000;

  margin-top: 64px;
`;

export const Text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  color: #000000;

  margin-top: 16px;
`;

export const RightImage = styled.div`
  margin-top: 64px;
  margin-bottom: 48px;
`;

export const Recommented = styled.div`
  margin-top: 200px;
  margin-left: 147px;
  @media screen and (max-width: 768px) {
    /* display: none; */
    margin: 0;
  }
`;

export const RecommentedTitle = styled.div`
  font-family: "Heavitas";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  text-transform: capitalize;
  color: #000000;
  @media screen and (max-width: 768px) {
    /* display: none; */
    /* margin: 0; */
    font-size: 36px;
    line-height: 56px;
  }
`;

export const RecommentedList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 115px;
  margin-top: 88px;
  @media screen and (max-width: 768px) {
    /* display: none; */
    flex-direction: column;
    gap: 64px;
    margin-top: 24px;
  }
`;

export const RecommentedItem = styled.div``;
