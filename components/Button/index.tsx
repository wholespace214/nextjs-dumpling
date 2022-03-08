import React, { FC } from "react";
import Styled from "./styled";

interface ButtonProps {
  children: string;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <Styled.ButtonContainer>
      <Styled.Text>{children}</Styled.Text>
    </Styled.ButtonContainer>
  );
};

export default Button;
