import React, { FC } from "react";
import Image from "next/image";
import {
  FooterContainer,
  FooterLogo,
  FooterList,
  FooterTool,
  FooterItem,
  FooterListGroup,
  FooterItemHr,
  FooterToolBottom,
  FooterToolTop,
  FooterToolText,
  FooterLink,
  FooterVisa,
} from "./styled";

import logo from "../../assets/images/footer_logo.png";

import youtube from "../../assets/icons/youtube.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";

import visa from "../../assets/icons/visa.png";
import visa2 from "../../assets/icons/visa_2.png";

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        <Image src={logo} />
      </FooterLogo>
      <FooterListGroup>
        <FooterList>
          <FooterItem>
            Home <FooterItemHr />
          </FooterItem>
          <FooterItem>
            About us <FooterItemHr />
          </FooterItem>
          <FooterItem>
            Our work <FooterItemHr />
          </FooterItem>
          <FooterItem>
            Blog <FooterItemHr />
          </FooterItem>
          <FooterItem>
            Contacts <FooterItemHr />
          </FooterItem>
        </FooterList>

        <FooterList>
          <FooterItem>
            FAQ <FooterItemHr />
          </FooterItem>
          <FooterItem>
            Terms & Conditions <FooterItemHr />
          </FooterItem>
          <FooterItem>
            Privacy Policy <FooterItemHr />
          </FooterItem>
          <FooterItem>
            Shipping Policy <FooterItemHr />
          </FooterItem>
          <FooterItem>
            Refund Policy <FooterItemHr />
          </FooterItem>
        </FooterList>
      </FooterListGroup>
      <FooterTool>
        <FooterToolTop>
          <FooterLink>
            <Image src={youtube} />
          </FooterLink>
          <FooterLink>
            <Image src={facebook} />
          </FooterLink>
          <FooterLink>
            <Image src={youtube} />
          </FooterLink>
        </FooterToolTop>
        <FooterToolBottom>
          <FooterVisa>
            <Image src={visa} />
          </FooterVisa>
          <FooterLink>
            <Image src={visa2} />
          </FooterLink>
        </FooterToolBottom>
        <FooterToolText>Copyright 2022 Dumpling</FooterToolText>
      </FooterTool>
    </FooterContainer>
  );
};

export default Footer;
