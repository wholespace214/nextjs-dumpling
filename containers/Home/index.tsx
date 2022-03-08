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
  SafetyisMobileButton,
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
  OfferMobileText,
  OfferMobileCardGroup,
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

import Button from "../../components/Button";

const Home: FC = () => {
  return (
    <div>
      <SafetyisContainer>
        <SafetyisRectangle />
        <SafetyisText>
          <SafetyisTitle>Smart, Safe, & Strapped</SafetyisTitle>
          <SafetyisContent>
            Make friends with your firearm and bypass the rollercoaster ride of
            paper forms and infinite trips to the dealer. We offer a streamlined
            firearms purchase process starting with our flagship store serving
            the Bay Area.
          </SafetyisContent>
          <SafetyisButton>
            <Button>READ MORE</Button>
          </SafetyisButton>
        </SafetyisText>
        <SafetyisDiv>
          <Image src={safetyis} height={512} />
          <SafetyisLogo>
            <Image src={logo} />
          </SafetyisLogo>
        </SafetyisDiv>
        <SafetyisMobileButton>
          <Button>READ MORE</Button>
        </SafetyisMobileButton>
      </SafetyisContainer>
      <AboutContainer>
        <AboutText>
          <AboutTitle>About us</AboutTitle>
          <AboutContent>
            We’re here to make gun ownership easy and accessible to those
            preparing to purchase a gun in the Bay Area. Reserve a firearm
            online, avoid the frustration of paper forms, and receive all
            required documentation from our software in one straight-shot.
          </AboutContent>
        </AboutText>
        <AboutFeature>
          <FeatureCard>
            <FeatureCardImage>
              <Image src={feature1} />
            </FeatureCardImage>
            <FeatureCardFooter>
              <FeatureCardText>Software to firearms industry's</FeatureCardText>
              <FeatureCardBack>
                <Image src={right} />
              </FeatureCardBack>
            </FeatureCardFooter>
          </FeatureCard>
          <FeatureCard>
            <FeatureCardImage>
              <Image src={feature2} />
            </FeatureCardImage>
            <FeatureCardFooter>
              <FeatureCardText>Concept retail store</FeatureCardText>
              <FeatureCardBack>
                <Image src={right} />
              </FeatureCardBack>
            </FeatureCardFooter>
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
                Dumpling Defense is a data-driven platform and firearms retailer
                committed to keeping gun owners up-to-date with the latest
                forms, processes, and knowledge needed to own and use a firearm
                responsibly.
              </OfferCardDivText>
            </OfferCardDiv>
            <OfferCardDiv></OfferCardDiv>
            <OfferCardDiv>
              <OfferCard
                background="#D1D1D1"
                icon="hard"
                title="Comfort"
                content="Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              ></OfferCard>
            </OfferCardDiv>
          </OfferCardGroupRow>
          <OfferCardGroupRow>
            <OfferCardDiv>
              <OfferCard
                background="#272624"
                icon="file"
                title="Documents"
                content="Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              ></OfferCard>
            </OfferCardDiv>
            <OfferCardDiv></OfferCardDiv>
            <OfferCardDiv>
              <OfferCard
                background="#F3F3F3"
                icon="time"
                title="Support"
                content="Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              ></OfferCard>
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
                content="Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              ></OfferCard>
            </OfferCardDiv>
            <OfferCardDiv>
              <OfferCard
                background="#D1D1D1"
                icon="setting"
                title="Further service"
                content="Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              ></OfferCard>
            </OfferCardDiv>
            <OfferCardDiv></OfferCardDiv>
          </OfferCardGroupRow>
        </OfferCardGroup>
        <OfferMobileText>
          Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
          sit amet,consectetur adipiscing elit
        </OfferMobileText>
        <OfferMobileCardGroup>
          <OfferCard
            background="#D1D1D1"
            icon="setting"
            title="Further service"
            content="Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ></OfferCard>
        </OfferMobileCardGroup>
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
        <WorkButton>
          <Button>READ MORE</Button>
        </WorkButton>
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
          <BlogButton>
            <Button>view all</Button>
          </BlogButton>
        </BlogGroupTwo>
      </BlogContainer>
    </div>
  );
};

export default Home;
