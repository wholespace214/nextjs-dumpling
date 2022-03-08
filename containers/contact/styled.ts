import styled from "styled-components";

const ContactContainer = styled.div`
  height: 800px;
  position: relative;
  @media screen and (max-width: 600px) {
    position: none;
    height: 570px;
    margin-top: 100px;
  }
`;

const ContactBackground = styled.div`
  position: absolute;
  background: #272624;
  top: -127px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ContactImage = styled.div`
  position: absolute;
  top: 60px;
  left: 20px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 32px;
  top: 220px;
  background: white;
  width: 830px;
  padding: 40px 40px;

  @media screen and (max-width: 600px) {
    position: none;
    right: 0;
    top: 0;
    padding: 0;
    width: 100%;
  }
`;

const ContentHeader = styled.div`
  @media screen and (max-width: 600px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const Title = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  text-transform: capitalize;

  color: #29282d;
  @media screen and (max-width: 600px) {
    margin-bottom: 8px;
  }
`;

const Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #2e302f;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 32px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const LeftGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const RightGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const RightText = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const TextTitle = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.3);

  margin-bottom: 42px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const FooterGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  @media screen and (max-width: 600px) {
    /* display: none; */
    flex-direction: column;
    margin-left: 24px;
    margin-right: 24px;
    gap: 40px;
  }
`;

const CheckGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

// const Check = styled.input[(type = "checkbox")]``;
const Check = styled.input.attrs({ type: "checkbox" })``;

const CheckText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #29282d;
`;

const FooterBut = styled.div`
  width: 229px;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const Contacts = styled.div`
  position: absolute;

  top: 580px;
  left: 20px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const ContactsText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export default {
  ContactContainer,
  ContactBackground,
  ContactContent,
  ContactImage,
  ContentHeader,
  Title,
  Text,
  LeftGroup,
  RightGroup,
  FooterGroup,
  CheckGroup,
  CheckText,
  FooterBut,
  InputGroup,
  RightText,
  TextTitle,
  Check,
  Contacts,
  ContactsText,
};
