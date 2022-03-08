import styled from "styled-components";

const TermsContainer = styled.div`
  padding: 40px 261px 0px 261px;
  position: relative;
`;

// const TermsLeft = styled.div``;

// const TermsRight = styled.div``;

const TermsTitle = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 70px;
  letter-spacing: 0.01em;
  color: #000000;
`;

const TermsTitleText = styled.div`
  margin-top: 40px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;

const TextListGroup = styled.div`
  margin-top: 48px;
  margin-bottom: 148px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const TextList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextListTitle = styled.div`
  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

const TextListContent = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;

  margin-top: 16px;
`;

const IconGroup = styled.div`
  position: absolute;
  top: 150px;
  left: 76px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IconDownload = styled.div`
  cursor: pointer;
`;

const IconForwad = styled.div`
  cursor: pointer;
`;

export default {
  TermsContainer,
  TermsTitle,
  TermsTitleText,
  TextListGroup,
  TextList,
  TextListTitle,
  TextListContent,
  IconGroup,
  IconDownload,
  IconForwad,
};
