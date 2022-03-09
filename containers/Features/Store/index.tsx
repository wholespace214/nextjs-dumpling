import React, { FC, useState } from "react";
import Styled from "./styled";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

//TODO import components
import Button from "@components/Button";

//TODO import image
import store1 from "@assets/images/store_1.png";
import store2 from "@assets/images/store_2.png";
import logo from "@assets/images/logo.png";
import store1_mobile from "@assets/images/store_1_mobile.png";

import store_about from "@assets/images/store_about.png";

import store3 from "@assets/images/store_3.png";
import store4 from "@assets/images/store_4.png";

//TODO import icon
import store_icon1 from "@assets/icons/store/1.png";
import store_icon2 from "@assets/icons/store/2.png";
import store_icon3 from "@assets/icons/store/3.png";
import store_icon4 from "@assets/icons/store/4.png";
import store_icon5 from "@assets/icons/store/5.png";
import store_icon6 from "@assets/icons/store/6.png";
import store_icon7 from "@assets/icons/store/7.png";
import store_icon8 from "@assets/icons/store/8.png";

import provide_icon1 from "@assets/icons/provide/provide_1.png";
import provide_icon2 from "@assets/icons/provide/provide_2.png";
import provide_icon3 from "@assets/icons/provide/provide_3.png";
import provide_icon4 from "@assets/icons/provide/provide_4.png";

//TODO  import partners icon
import partners1 from "@assets/icons/partners/1.png";
import partners2 from "@assets/icons/partners/2.png";
import partners3 from "@assets/icons/partners/3.png";
import partners4 from "@assets/icons/partners/4.png";
import partners5 from "@assets/icons/partners/5.png";

import OfferCard from "@components/OfferCard";

import map from "@assets/icons/map.png";

interface OfferDataType {
  background: string;
  icon: String;
  title: String;
  content: string;
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

  const [storeData, setStoreData] = useState<Array<StaticImageData>>([
    store_icon1,
    store_icon2,
    store_icon3,
    store_icon4,
    store_icon5,
    store_icon6,
    store_icon7,
    store_icon8,
  ]);

  return (
    <Styled.SoftwareContainer>
      <Styled.Header>
        <Styled.HeaderText>
          <Styled.HeaderTitle>Bay Area Firearms</Styled.HeaderTitle>
          <Styled.HeaderContent>
            It's 2022, yet the firearm industry still operates as if the
            internet does not exist. We've modernized the process of purchasing
            a firearm, removing the confusion and inevitable headache.
          </Styled.HeaderContent>
          <Styled.HeaderImageMobile>
            <Image src={store1_mobile} />
          </Styled.HeaderImageMobile>
          <Styled.HeaderBtn>
            <Button>view products</Button>
          </Styled.HeaderBtn>
        </Styled.HeaderText>
        <Styled.HeaderImage>
          <Styled.HeaderImage>
            <Styled.HeaderImageOne>
              <Image src={store1} />
            </Styled.HeaderImageOne>
            <Styled.HeaderImageTwo>
              <Image src={store2} />
            </Styled.HeaderImageTwo>
            <Styled.HeaderImageLogo>
              <Image src={logo} />
            </Styled.HeaderImageLogo>
          </Styled.HeaderImage>
        </Styled.HeaderImage>
      </Styled.Header>
      <Styled.IconList>
        {storeData.map((item, index) => (
          <Styled.IconItem key={index}>
            <Styled.IconItemImage>
              <Image src={item} />
            </Styled.IconItemImage>
          </Styled.IconItem>
        ))}
      </Styled.IconList>
      <Styled.About>
        <Styled.AboutText>
          <Styled.AboutTitle>About store</Styled.AboutTitle>
          <Styled.AboutContent>
            Browse our selection of firearms online and decide which is the best
            fit for you with our questionnaire and live chat support services.
            Avoid multiple trips to the firearm dealer and pushy salesman who
            are determined on selling select firearms for their own gain.
          </Styled.AboutContent>
        </Styled.AboutText>
        <Styled.AboutImage>
          <Image src={store_about} />
        </Styled.AboutImage>
        <Styled.AboutAlter>
          <Styled.AlterHeader>
            <Styled.AlterIcon>
              <Image src={map} />
            </Styled.AlterIcon>
            <Styled.AlterTitle>Locations</Styled.AlterTitle>
          </Styled.AlterHeader>
          <Styled.AlterText>
            Headquartered in{" "}
            <Styled.AlterTextRed>Redwood City, California,</Styled.AlterTextRed>{" "}
            our services simplify firearm purchases while remaining compliant
            with state laws.
          </Styled.AlterText>
        </Styled.AboutAlter>
      </Styled.About>
      <Styled.Benefits>
        <Styled.BenefitsHeader>
          <Styled.BenefitsTitle>service</Styled.BenefitsTitle>
          <Styled.BenefitsText>
            We provide a 2-year warranty for weapons purchased in our store. You
            don't care about anything
          </Styled.BenefitsText>
        </Styled.BenefitsHeader>
        <Styled.BenefitsSwiper>
          <Swiper
            slidesPerView={3}
            spaceBetween={115}
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
      <Styled.Manufacturing>
        <Styled.ManufacturingContent>
          <Styled.ManufacturingTitle>manufacturing</Styled.ManufacturingTitle>
          <Styled.ManufacturingText>
            Most retailers only sell other people's products, making them
            dependent on distributors and manufacturers. With Dumpling Defense
            manufacturing firearms, fewer middlemen are involved in the
            product's sale. Our manufacturing opens doors to producing newer and
            improved models of outdated guns that are no longer available for
            purchase in California.
          </Styled.ManufacturingText>
        </Styled.ManufacturingContent>
        <Styled.ManufacturingImage>
          <Styled.ManufacturingImageOne>
            <Image src={store4} />
          </Styled.ManufacturingImageOne>
          <Styled.ManufacturingImageTwo>
            <Image src={store3} />
          </Styled.ManufacturingImageTwo>
        </Styled.ManufacturingImage>
      </Styled.Manufacturing>

      <Styled.Work>
        <Styled.WorkTitle>How it work</Styled.WorkTitle>
        <Styled.WorkTimeLine></Styled.WorkTimeLine>
        <Styled.WorkList>
          <Styled.WorkItem>
            <Styled.WorkItemIcon>
              <Image src={provide_icon1} />
            </Styled.WorkItemIcon>
            <Styled.WorkItemContent>
              <Styled.WorkItemTitle>
                Choose a Firearm Online
              </Styled.WorkItemTitle>
              <Styled.WorkItemText>
                Browse through our firearm selection online and pick the best
                option for you, your comfort, and your expertise.
              </Styled.WorkItemText>
            </Styled.WorkItemContent>
          </Styled.WorkItem>
          <Styled.WorkItem>
            <Styled.WorkItemIcon>
              <Image src={provide_icon2} />
            </Styled.WorkItemIcon>
            <Styled.WorkItemContent>
              <Styled.WorkItemTitle>
                Submit Documents Online
              </Styled.WorkItemTitle>
              <Styled.WorkItemText>
                According to your state's laws, our software will directly send
                the required documents to purchase and obtain a firearm legally.
              </Styled.WorkItemText>
            </Styled.WorkItemContent>
          </Styled.WorkItem>
          <Styled.WorkItem>
            <Styled.WorkItemIcon>
              <Image src={provide_icon3} />
            </Styled.WorkItemIcon>
            <Styled.WorkItemContent>
              <Styled.WorkItemTitle>
                Wait for Confirmation in the System
              </Styled.WorkItemTitle>
              <Styled.WorkItemText>
                Patiently wait for our software to confirm and organize your
                legal documentation in our system.
              </Styled.WorkItemText>
            </Styled.WorkItemContent>
          </Styled.WorkItem>
          <Styled.WorkItem>
            <Styled.WorkItemIcon>
              <Image src={provide_icon4} />
            </Styled.WorkItemIcon>
            <Styled.WorkItemContent>
              <Styled.WorkItemTitle>
                Pick Up Firearms in the Store
              </Styled.WorkItemTitle>
              <Styled.WorkItemText>
                Once documentation is squared away, you will receive an alert
                from Dumpling Defense inviting you to a one-time visit to pick
                up your firearm.
              </Styled.WorkItemText>
            </Styled.WorkItemContent>
          </Styled.WorkItem>
        </Styled.WorkList>
      </Styled.Work>
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
