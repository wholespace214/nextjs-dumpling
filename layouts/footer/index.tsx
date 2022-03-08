import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FooterContainer,
  FooterLogo,
  FooterList,
  FooterListTwo,
  FooterTool,
  FooterItem,
  FooterListGroup,
  FooterItemHr,
  FooterToolBottom,
  FooterToolTop,
  FooterToolText,
  FooterLink,
  FooterVisa,
  FooterMiddle,
  MiddleList,
  MiddelItem,
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
          <Link href={"/"}>
            <FooterItem>
              Home <FooterItemHr />
            </FooterItem>
          </Link>
          <Link href={"/about"}>
            <FooterItem>
              About use <FooterItemHr />
            </FooterItem>
          </Link>
          <Link href={"/"}>
            <FooterItem>
              Our work <FooterItemHr />
            </FooterItem>
          </Link>
          <Link href={"/blog"}>
            <FooterItem>
              Blog <FooterItemHr />
            </FooterItem>
          </Link>
          <Link href={"/contact"}>
            <FooterItem>
              Contacts <FooterItemHr />
            </FooterItem>
          </Link>
        </FooterList>

        <FooterListTwo>
          <Link href={"/faq"}>
            <FooterItem>
              FAQ <FooterItemHr />
            </FooterItem>
          </Link>
          <Link href={"/terms"}>
            <FooterItem>
              Terms & Conditions <FooterItemHr />
            </FooterItem>
          </Link>

          <Link href={"/"}>
            <FooterItem>
              Privacy Policy <FooterItemHr />
            </FooterItem>
          </Link>
          <Link href={"/"}>
            <FooterItem>
              Shipping Policy <FooterItemHr />
            </FooterItem>
          </Link>
          <Link href={"/"}>
            <FooterItem>
              Refund Policy <FooterItemHr />
            </FooterItem>
          </Link>
        </FooterListTwo>
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
        <FooterMiddle>
          <MiddleList>
            <Link href={"/faq"}>
              <MiddelItem>FAQ</MiddelItem>
            </Link>
            <Link href={"/terms"}>
              <MiddelItem>Terms & Conditions</MiddelItem>
            </Link>
            <Link href={"/"}>
              <MiddelItem>Privacy Policy</MiddelItem>
            </Link>
          </MiddleList>
          <MiddleList>
            <Link href={"/"}>
              <MiddelItem>Shipping Policy</MiddelItem>
            </Link>
            <Link href={"/"}>
              <MiddelItem>Refund Policy</MiddelItem>
            </Link>
          </MiddleList>
        </FooterMiddle>
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
