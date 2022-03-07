import React, { FC, useState } from "react";

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
  Middle,
  MiddleBackground,
  MiddleContent,
  MiddleText,
  MiddleCardGroup,
  MiddleTextContent,
  MiddleTextTitle,
  MiddleCard,
  Footer,
  FooterImage,
  FooterText,
  FooterTextTitle,
  FooterTextContent,
  FooterImageOne,
  FooterImageTwo,
  FooterImageThree,
} from "./styled";

//  Image Import
import about1 from "../../assets/images/about_1.png";
import about2 from "../../assets/images/about_2.png";
import about3 from "../../assets/images/about_3.png";
import about4 from "../../assets/images/about_4.png";
import about5 from "../../assets/images/about_5.png";

import philosophy from "../../assets/images/philosophy.png";
import philosophy2 from "../../assets/images/philosophy_2.png";

import OfferCard from "../../components/OfferCard";

const About: FC = () => {
  interface OfferData {
    icon: String;
    background: string;
    title: String;
  }

  const [offerData, setOfferData] = useState<Array<OfferData>>([
    { icon: "hard", title: "Legalization of firearms", background: "#F3F3F3" },
    {
      icon: "hard",
      title: "The safety of our families",
      background: "#D1D1D1",
    },
    {
      icon: "hard",
      title: "The safety of our families",
      background: "#D1D1D1",
    },
  ]);

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
            <HeaderBottomImageOne>
              <Image src={about4} />
            </HeaderBottomImageOne>
            <HeaderBottomImageTwo>
              <Image src={about3} />
            </HeaderBottomImageTwo>
          </HeaderBottomImage>
        </HeaderBottom>
      </Header>

      {/*Middle */}
      <Middle>
        <MiddleBackground>
          <MiddleContent>
            <MiddleText>
              <MiddleTextTitle>Our mission</MiddleTextTitle>
              <MiddleTextContent>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet,consectetur adipiscing elit
              </MiddleTextContent>
            </MiddleText>
            <MiddleCardGroup>
              {offerData.map((item) => (
                <MiddleCard>
                  <OfferCard
                    background={item.background}
                    icon={item.icon}
                    title={item.title}
                  >
                    Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </OfferCard>
                </MiddleCard>
              ))}
            </MiddleCardGroup>
          </MiddleContent>
        </MiddleBackground>
      </Middle>
      <Footer>
        <FooterText>
          <FooterTextTitle>Family protection comes first</FooterTextTitle>
          <FooterTextContent>
            Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </FooterTextContent>
        </FooterText>
        <FooterImage>
          <FooterImageOne>
            <Image src={about5} />
          </FooterImageOne>
          <FooterImageTwo></FooterImageTwo>
          <Image src={philosophy} />
          <FooterImageThree>
            <Image src={philosophy2} />
          </FooterImageThree>
        </FooterImage>
      </Footer>
    </AboutContainer>
  );
};

export default About;
