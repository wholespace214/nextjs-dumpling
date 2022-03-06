import React, { FC } from "react";
import Image from "next/image";

import {
  SafetyisContainer,
  SafetyisRectangle,
  SafetyisText,
  SafetyisTitle,
  SafetyisContent,
  SafetyisLogo,
  SafetyisDiv,
  SafetyisButton,
  //  About
  AboutContainer,
  AboutText,
  AboutFeature,
  AboutTitle,
  AboutContent,
  //  Feature
  FeatureCard,
  FeatureCardImage,
  FeatureCardFooter,
  FeatureCardText,
  FeatureCardBack,
  //  Offer
  OfferContainer,
  OfferTitle,
  OfferCardGroup,
  OfferCardGroupRow,
  OfferCardDiv,
  OfferCardDivText,
  //  Work
  WorkContainer,
  WorkHeader,
  WorkHeaderText,
  WorkHeaderTitle,
  WorkOnline,
  WorkOnlineImage,
  WorkOnlineText,
  WorkOnlineTextContent,
  WorkOnlineTextTitle,
  WorkButton,

  // Blog
  BlogContainer,
  BlogTitle,
  BlogGroupOne,
  BlogGroupTwo,
  BlogButton,
} from "./styled";

import OfferCard from "../../components/OfferCard";
import BlogCard from "../../components/BlogCard";

import safetyis from "../../assets/images/safetyis.png";
import logo from "../../assets/images/logo.png";
import feature1 from "../../assets/images/feature1.png";
import feature2 from "../../assets/images/feature2.png";
import right from "../../assets/icons/right.png";
import work from "../../assets/images/work.png";

import blog1 from "../../assets/images/blog_1.png";
import blog2 from "../../assets/images/blog_2.png";
import blog3 from "../../assets/images/blog_3.png";

const Home: FC = () => {
  return (
    <div>
      <SafetyisContainer>
        <SafetyisRectangle />
        <SafetyisText>
          <SafetyisTitle>SAFETYIS IN YOUR HANDS</SafetyisTitle>
          <SafetyisContent>
            Let’s face it. With paper forms, multiple trips to the dealer, and
            confusing rules on who, what, where and when to buy a gun, you need
            a guide.
          </SafetyisContent>
          <SafetyisButton>READ MORE</SafetyisButton>
        </SafetyisText>
        <SafetyisDiv>
          <Image src={safetyis} height={512} />
          <SafetyisLogo>
            <Image src={logo} />
          </SafetyisLogo>
        </SafetyisDiv>
      </SafetyisContainer>
      <AboutContainer>
        <AboutText>
          <AboutTitle>About us</AboutTitle>
          <AboutContent>
            Let’s face it. With paper forms, multiple trips to the dealer, and
            confusing rules on who, what, where and when to buy a gun, you need
            a guide. We provide a data-driven platform that keeps you up to date
            on the forms you need and the release status of your firearm. When
            it’s ready, you’re ready.
          </AboutContent>
        </AboutText>
        <AboutFeature>
          <FeatureCard>
            <FeatureCardImage>
              <Image src={feature1} />
              <FeatureCardFooter>
                <FeatureCardText>
                  Software to firearms industry's
                </FeatureCardText>
                <FeatureCardBack>
                  <Image src={right} />
                </FeatureCardBack>
              </FeatureCardFooter>
            </FeatureCardImage>
          </FeatureCard>
          <FeatureCard>
            <FeatureCardImage>
              <Image src={feature2} />
              <FeatureCardFooter>
                <FeatureCardText>Concept retail store</FeatureCardText>
                <FeatureCardBack>
                  <Image src={right} />
                </FeatureCardBack>
              </FeatureCardFooter>
            </FeatureCardImage>
          </FeatureCard>
        </AboutFeature>
      </AboutContainer>
      <OfferContainer>
        <OfferTitle>what can we offer</OfferTitle>
        <OfferCardGroup>
          <OfferCardGroupRow>
            <OfferCardDiv></OfferCardDiv>
            <OfferCardDiv>
              <OfferCardDivText>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet,consectetur adipiscing elit
              </OfferCardDivText>
            </OfferCardDiv>
            <OfferCardDiv></OfferCardDiv>
            <OfferCardDiv>
              <OfferCard background="#D1D1D1" icon="hard" title="Comfort">
                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </OfferCard>
            </OfferCardDiv>
          </OfferCardGroupRow>
          <OfferCardGroupRow>
            <OfferCardDiv>
              <OfferCard background="#272624" icon="file" title="Documents">
                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </OfferCard>
            </OfferCardDiv>
            <OfferCardDiv></OfferCardDiv>
            <OfferCardDiv>
              <OfferCard background="#F3F3F3" icon="time" title="Support">
                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </OfferCard>
            </OfferCardDiv>
            <OfferCardDiv></OfferCardDiv>
          </OfferCardGroupRow>
          <OfferCardGroupRow>
            <OfferCardDiv></OfferCardDiv>
            <OfferCardDiv>
              <OfferCard
                background="#F3F3F3"
                icon="time"
                title="Processing speed"
              >
                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </OfferCard>
            </OfferCardDiv>
            <OfferCardDiv>
              <OfferCard
                background="#D1D1D1"
                icon="setting"
                title="Further service"
              >
                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </OfferCard>
            </OfferCardDiv>
            <OfferCardDiv></OfferCardDiv>
          </OfferCardGroupRow>
        </OfferCardGroup>
      </OfferContainer>
      <WorkContainer>
        <WorkHeader>
          <WorkHeaderTitle>How it work</WorkHeaderTitle>
          <WorkHeaderText>
            We tried to simplify the system of buying firearms as much as
            possible. Now you do not need to look for a dealer and wait for
            confirmation of documents with each purchase
          </WorkHeaderText>
        </WorkHeader>
        <WorkOnline>
          <WorkOnlineText>
            <WorkOnlineTextTitle>Сhoose a weapon online</WorkOnlineTextTitle>
            <WorkOnlineTextContent>
              Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </WorkOnlineTextContent>
          </WorkOnlineText>
          <WorkOnlineImage>
            <Image src={work} />
          </WorkOnlineImage>
        </WorkOnline>
        <WorkButton>READ MORE</WorkButton>
      </WorkContainer>

      <BlogContainer>
        <BlogTitle>Blog</BlogTitle>
        <BlogGroupOne>
          <BlogCard
            type="Video"
            date="20 oct’ 21"
            content="Lorem ipsum dolor sit amet, consectetur"
            img={blog1}
          ></BlogCard>
        </BlogGroupOne>
        <BlogGroupTwo>
          <BlogCard
            type="Video"
            date="20 oct’ 21"
            content="Lorem ipsum dolor sit amet, consectetur"
            img={blog2}
          ></BlogCard>
          <BlogCard
            type="Video"
            date="20 oct’ 21"
            content="Lorem ipsum dolor sit amet, consectetur"
            img={blog3}
          ></BlogCard>
          <BlogButton>view all</BlogButton>
        </BlogGroupTwo>
      </BlogContainer>
    </div>
  );
};

export default Home;
