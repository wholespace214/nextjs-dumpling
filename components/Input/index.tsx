import React, { FC } from "react";
import Styled from "./styled";

interface InputProps {
  label: string;
  value?: string;
}

const Input: FC<InputProps> = ({ label, value }) => {
  return (
    <Styled.InputContainer>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Input value={value}></Styled.Input>
    </Styled.InputContainer>
  );
};

export default Input;
