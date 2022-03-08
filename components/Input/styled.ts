import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Label = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.3);
`;

const Input = styled.input`
  /* height: 65px; */
  border-bottom: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  background: #272624;
  opacity: 0.5;
  outline: none;

  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  padding-top: 32px;
  padding-bottom: 8px;

  :hover {
    border-bottom: 1px solid red;
    border-top: none;
    border-left: none;
    border-right: none;
  }
  :focus {
    border-bottom: 1px solid red;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

export default {
  InputContainer,
  Label,
  Input,
};
