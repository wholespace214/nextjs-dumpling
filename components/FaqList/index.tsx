import React, { FC, useState, useEffect } from "react";
import Image from "next/image";

import { FaqListContainer, Title, TitleIcon, Text, TitleText } from "./styled";

interface FaqListProps {
  title: String;
  children: string;
  open: boolean;
}

//  Import Icons
import minus from "../../assets/icons/minus.png";
import plus from "../../assets/icons/plus.png";

const FaqList: FC<FaqListProps> = ({ title, children, open }) => {
  const [showText, setShowText] = useState<boolean>(false);

  useEffect(() => {
    setShowText(open);
  }, [open]);

  return (
    <FaqListContainer open={showText}>
      <Title>
        <TitleText>{title}</TitleText>
        <TitleIcon onClick={() => setShowText(!showText)}>
          <Image src={showText ? minus : plus} />
        </TitleIcon>
      </Title>
      <Text open={showText}>{children}</Text>
    </FaqListContainer>
  );
};

export default FaqList;
