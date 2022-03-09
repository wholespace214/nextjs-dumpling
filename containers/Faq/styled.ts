import styled from "styled-components";

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 260px 0px 260px;
  @media screen and (max-width: 600px) {
    margin: 80px 21px 0px 21px;
  }
`;

export const FaqTitle = styled.div`
  max-width: 634px;

  font-family: Heavitas;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 70px;
  letter-spacing: 0.01em;
  color: #272624;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

export const SearchGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin-top: 40px;
`;

export const SearchInput = styled.input`
  background: #ffffff;
  border: 1px solid #e9ebeb;
  box-sizing: border-box;
  padding: 20px 16px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  ::placeholder {
    color: #000000;
    opacity: 0.4;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 22px;
  right: 22px;
`;

export const ListGroup = styled.div`
  margin-top: 64px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
