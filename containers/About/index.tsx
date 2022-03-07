import React, { FC } from "react";

import Image from "next/image";

import {
  AboutContainer,
  Header,
  HeaderBottom,
  HeaderTop,
  HeaderTopImage,
  HeaderTopImageOne,
  HeaderTopImageTwo,
  Title,
  HeaderBottomText,
  HeaderBottomImage,
  HeaderBottomImageOne,
  HeaderBottomImageTwo,
} from "./styled";

//  Image Import
import about1 from "../../assets/images/about_1.png";
import about2 from "../../assets/images/about_2.png";
import about3 from "../../assets/images/about_3.png";
import about4 from "../../assets/images/about_4.png";
import about5 from "../../assets/images/about_5.png";

const About: FC = () => {
  return (
    <AboutContainer>
      <Header>
        <HeaderTop>
          <Title>
            We are a company who facilitates legal possession of firearms
          </Title>
          <HeaderTopImage>
            <HeaderTopImageOne>
              <Image src={about1} />
            </HeaderTopImageOne>
            <HeaderTopImageTwo>
              <Image src={about2} />
            </HeaderTopImageTwo>
          </HeaderTopImage>
        </HeaderTop>
        <HeaderBottom>
          <HeaderBottomText>
            Let’s face it. With paper forms, multiple trips to the dealer, and
            confusing rules on who, what, where and when to buy a gun, you need
            a guide. We provide a data-driven platform that keeps you up to date
            on the forms you need and the release status of your firearm. When
            it’s ready, you’re ready.
          </HeaderBottomText>
          <HeaderBottomImage>
            <HeaderBottomImageOne></HeaderBottomImageOne>
            <HeaderBottomImageTwo></HeaderBottomImageTwo>
          </HeaderBottomImage>
        </HeaderBottom>
      </Header>
    </AboutContainer>
  );
};

export default About;
