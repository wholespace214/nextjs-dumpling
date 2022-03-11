import React, { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";

import { FaqListContainer, Title, TitleIcon, Text, TitleText } from "./styled";

interface FaqListProps {
  title: String;
  children: string;
  open: boolean;
}

//  Import Icons
import minus from "@assets/icons/minus.png";
import plus from "@assets/icons/plus.png";

const FaqList: FC<FaqListProps> = ({ title, children, open }) => {
  const [showText, setShowText] = useState<boolean>(false);

  const text = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    setShowText(open);
    if (!open) {
      text.current.classList.add("hidden");
      // text.current.addEventListener(
      //   "transitionend",
      //   function (e) {
      //     text.current.classList.add("hidden");
      //   },
      //   {
      //     capture: false,
      //     once: true,
      //     passive: false,
      //   }
      // );
    }
  }, [open]);

  const IconClick = (flag: boolean) => {
    setShowText(flag);
    if (!flag) {
      text.current.classList.add("visuallyhidden");
      text.current.addEventListener(
        "transitionend",
        function (e) {
          text.current.classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    } else {
      text.current.classList.remove("hidden");
      setTimeout(function () {
        text.current.classList.remove("visuallyhidden");
      }, 50);
    }
  };

  return (
    <FaqListContainer open={showText}>
      <Title>
        <TitleText>{title}</TitleText>
        <TitleIcon onClick={() => IconClick(!showText)}>
          <Image src={showText ? minus : plus} />
        </TitleIcon>
      </Title>
      <Text ref={text} open={showText}>
        {children}
      </Text>
    </FaqListContainer>
  );
};

export default FaqList;
