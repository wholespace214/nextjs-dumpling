import styled from "styled-components";

interface FaqContainerProps {
  open: boolean;
}

export const FaqListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 34px 32px 32px;
  border: 1px solid rgba(22, 23, 28, 0.07);
  background: ${(props: FaqContainerProps) =>
    props.open ? "#F3F3F3" : "white"};
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.div`
  display: flex;
  align-items: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 24px;
  color: #272624;
`;

export const TitleIcon = styled.div`
  cursor: pointer;
`;

export const Text = styled.div`
  display: ${(props: FaqContainerProps) => (props.open ? "block" : "none")};
  margin-top: 16px;
  max-width: 775px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #272624;
`;
