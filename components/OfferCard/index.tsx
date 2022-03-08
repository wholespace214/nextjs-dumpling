import React, { FC } from "react";
import {
  OfferCardDiv,
  OfferCardIcon,
  OfferCardTitle,
  OfferCardText,
} from "./styled";

import Image from "next/image";

import hard from "../../assets/icons/hard.png";
import time from "../../assets/icons/time.png";
import setting from "../../assets/icons/setting.png";
import file from "../../assets/icons/file.png";

interface OfferCardProps {
  background: string;
  icon: String;
  title: String;
  content: string;
}

const OfferCard: FC<OfferCardProps> = ({
  background,
  icon,
  title,
  content,
}) => {
  return (
    <OfferCardDiv color={background}>
      <OfferCardIcon>
        {icon === "hard" ? (
          <Image src={hard} />
        ) : icon === "time" ? (
          <Image src={time} />
        ) : icon === "setting" ? (
          <Image src={setting} />
        ) : icon === "file" ? (
          <Image src={file} />
        ) : (
          ""
        )}
      </OfferCardIcon>
      <OfferCardTitle color={background}>{title}</OfferCardTitle>
      <OfferCardText color={background}>{content}</OfferCardText>
    </OfferCardDiv>
  );
};

export default OfferCard;
