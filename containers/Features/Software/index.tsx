import React, { FC, useState } from "react";

import Image from "next/image";

import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Button from "@components/Button";
import OfferCard from "@components/OfferCard";

import Styled from "./styled";

// import required modules
import { Pagination } from "swiper";

//  TODO  import provoide icon
import provide1 from "@assets/icons/provide/provide_1.png";
import provide2 from "@assets/icons/provide/provide_2.png";
import provide3 from "@assets/icons/provide/provide_3.png";
import provide4 from "@assets/icons/provide/provide_4.png";
import provide5 from "@assets/icons/provide/provide_5.png";
import provide6 from "@assets/icons/provide/provide_6.png";

//TODO  import partners icon
import partners1 from "@assets/icons/partners/1.png";
import partners2 from "@assets/icons/partners/2.png";
import partners3 from "@assets/icons/partners/3.png";
import partners4 from "@assets/icons/partners/4.png";
import partners5 from "@assets/icons/partners/5.png";

//TODO  import Image
import software1 from "@assets/images/software_1.png";
import software1_mobile from "@assets/images/software_1_mobile.png";
import software2 from "@assets/images/software_2.png";
import logo from "@assets/images/logo.png";
import description from "@assets/images/description.png";

import left_black from "@assets/icons/left-black.png";
import right_red from "@assets/icons/right-red.png";

interface OfferDataType {
  background: string;
  icon: String;
  title: String;
  content: string;
}

interface ProvideDataType {
  icon: StaticImageData;
  title: string;
  text: string;
}

const partners = [
  partners1,
  partners2,
  "0",
  "0",
  partners3,
  partners4,
  partners5,
];

const Software: FC = () => {
  const [offerData, setOfferData] = useState<Array<OfferDataType>>([
    {
      background: "#D1D1D1",
      icon: "hard",
      title: "Shop online",
      content:
        "Shop online, reserve a firearm, setup an appointment to finalize purchase in-store",
    },
    {
      background: "#D1D1D1",
      icon: "hard",
      title: "Support",
      content:
        "Instant access to our firearm specialists during the online experience to ask any questions about the firearms your interested in",
    },
    {
      background: "#D1D1D1",
      icon: "hard",
      title: "Online selection",
      content:
        "No sales pressure, browser online and reserve at the customers convenience",
    },
    {
      background: "#D1D1D1",
      icon: "hard",
      title: "Trust",
      content:
        "Maximum transparency and the elimination all of the guesswork on the customer’s side",
    },
    {
      background: "#D1D1D1",
      icon: "hard",
      title: "Error checking",
      content:
        "Never worry about filling out and keeping physical records again, the majority of all the paperwork is done digitally (on-site). This allows real-time validations and will catch human error before submission.",
    },
  ]);

  const [provideData, setProvideData] = useState<Array<ProvideDataType>>([
    {
      icon: provide1,
      title: "accessories",
      text: "Hand-picked accessories that is guaranteed to be compatible to the customer’s purchase",
    },
    {
      icon: provide2,
      title: "accessories",
      text: "Hand-picked accessories that is guaranteed to be compatible to the customer’s purchase",
    },
    {
      icon: provide3,
      title: "accessories",
      text: "Hand-picked accessories that is guaranteed to be compatible to the customer’s purchase",
    },
    {
      icon: provide4,
      title: "accessories",
      text: "Hand-picked accessories that is guaranteed to be compatible to the customer’s purchase",
    },
    {
      icon: provide5,
      title: "accessories",
      text: "Hand-picked accessories that is guaranteed to be compatible to the customer’s purchase",
    },
    {
      icon: provide6,
      title: "accessories",
      text: "Hand-picked accessories that is guaranteed to be compatible to the customer’s purchase",
    },
  ]);

  return (
    <Styled.SoftwareContainer>
      <Styled.Header>
        <Styled.HeaderText>
          <Styled.HeaderTextTitle>
            Software Simplifying Gun Ownership
          </Styled.HeaderTextTitle>
          <Styled.HeaderTextContent>
            DumplingOS is the brains behind the scenes, a fully integrated
            end-to-end digital platform that powers the online and in-store
            customer experience as well as providing unparalleled automation on
            the business side to handle all of the most difficult parts of being
            in the firearms industry. Our platform enables us to operate and
            scale our business with ease.
          </Styled.HeaderTextContent>
          <Styled.HeaderMobileImage>
            <Image src={software1_mobile} />
          </Styled.HeaderMobileImage>
          <Styled.HeaderTextBtn>
            <Button>Sign up</Button>
          </Styled.HeaderTextBtn>
        </Styled.HeaderText>
        <Styled.HeaderImage>
          <Styled.HeaderImageOne>
            <Image src={software1} />
          </Styled.HeaderImageOne>
          <Styled.HeaderImageTwo>
            <Image src={software2} />
          </Styled.HeaderImageTwo>
          <Styled.HeaderImageLogo>
            <Image src={logo} />
          </Styled.HeaderImageLogo>
        </Styled.HeaderImage>
      </Styled.Header>
      <Styled.Benefits>
        <Styled.BenefitsHeader>
          <Styled.BenefitsTitle>Benefits</Styled.BenefitsTitle>
          <Styled.BenefitsText>
            Our streamlined purchase process provides our customers with the
            best-in-class purchase experience by bringing the majority of the
            process to a digital format.
          </Styled.BenefitsText>
        </Styled.BenefitsHeader>
        <Styled.BenefitsSwiper>
          <Swiper
            slidesPerView={3}
            spaceBetween={115}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
          >
            {offerData.map((item, index) => (
              <SwiperSlide key={index}>
                <OfferCard
                  background={item.background}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              </SwiperSlide>
            ))}
            <Styled.BenefitsPage>
              <Styled.BenefitsPageLeft className="prev">
                <Image src={left_black} />
              </Styled.BenefitsPageLeft>
              <Styled.BenefitsPageRight className="next">
                <Image src={left_black} />
              </Styled.BenefitsPageRight>
            </Styled.BenefitsPage>
          </Swiper>
        </Styled.BenefitsSwiper>
        <Styled.BenefitsSwiperMobile>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            {offerData.map((item, index) => (
              <SwiperSlide key={index}>
                <OfferCard
                  background={item.background}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Styled.BenefitsSwiperMobile>
      </Styled.Benefits>
      <Styled.Provide>
        <Styled.ProvideTitle>what we provide</Styled.ProvideTitle>
        {/* <Styled.ProvideListDiv> */}
        <Styled.ProvideList>
          {provideData.map((item, index) => (
            <Styled.ProvideItem key={index}>
              <Styled.ItemIcon>
                <Image src={item.icon} width={64} height={64} />
              </Styled.ItemIcon>
              <Styled.ItemContent>
                <Styled.ItemTitle>{item.title}</Styled.ItemTitle>
                <Styled.ItemText>{item.text}</Styled.ItemText>
              </Styled.ItemContent>
            </Styled.ProvideItem>
          ))}
        </Styled.ProvideList>
        {/* </Styled.ProvideListDiv> */}
      </Styled.Provide>
      <Styled.Description>
        <Styled.DescriptionText>
          <Styled.DescriptionTextRed>
            Our customers are not the ATF or the DOJ.
          </Styled.DescriptionTextRed>
          Instead of spending large amounts of time keeping compliant to all of
          the ever changing regulations, we work with some of the best lawyers
          and software engineers in the industry to create the dealer side of
          DumplingOS do all of the heavy lifting so we’re able to spend our time
          on what matters most, providing the best-in-class customer service and
          experience to people want to exercise their 2nd amendment right.
        </Styled.DescriptionText>
        <Styled.DescriptionImage>
          <Image src={description} />
        </Styled.DescriptionImage>
      </Styled.Description>
      <Styled.Partners>
        <Styled.PartnersText>Partners</Styled.PartnersText>
        <Styled.PartnersList>
          {/* <Styled.PartnersItem></Styled.PartnersItem> */}
          {partners.map((item, index) => {
            if (item === "0") {
              return (
                <Styled.PartnersItemNot key={index}></Styled.PartnersItemNot>
              );
            } else {
              return (
                <Styled.PartnersItem key={index}>
                  <Image src={item} />
                </Styled.PartnersItem>
              );
            }
          })}
        </Styled.PartnersList>
        <Styled.PartnersListMobile>
          <Styled.PartnersItem key={1}>
            <Styled.PartnersItemImage>
              <Image src={partners2} />
            </Styled.PartnersItemImage>
          </Styled.PartnersItem>
          <Styled.PartnersItem key={2}>
            <Styled.PartnersItemImage>
              <Image src={partners2} />
            </Styled.PartnersItemImage>
          </Styled.PartnersItem>
          <Styled.PartnersItem key={3}>
            <Styled.PartnersItemImage>
              <Image src={partners2} />
            </Styled.PartnersItemImage>
          </Styled.PartnersItem>
          <Styled.PartnersItem key={4}>
            <Styled.PartnersItemImage>
              <Image src={partners2} />
            </Styled.PartnersItemImage>
          </Styled.PartnersItem>
        </Styled.PartnersListMobile>
      </Styled.Partners>
    </Styled.SoftwareContainer>
  );
};

export default Software;
