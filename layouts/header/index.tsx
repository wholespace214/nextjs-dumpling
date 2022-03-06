import React, { FC, memo } from "react";
import Image from "next/image";
import {
  StyledContainer,
  Menu,
  Logo,
  Tool,
  LanDiv,
  LanText,
  DownIcon,
} from "./styled";

import menu from "../../assets/icons/menu.png";
import logo from "../../assets/icons/logo.png";
import search from "../../assets/icons/search.png";
import down from "../../assets/icons/down.png";

const Header: FC = () => {
  return (
    <StyledContainer>
      <Menu>
        <Image src={menu} width={39.75} height={14} />
      </Menu>
      <Logo>
        <Image src={logo} width={134.17} height={30.59} />
      </Logo>
      <Tool>
        <Image src={search} width={20} height={20} />
        <LanDiv>
          <LanText>ENG</LanText>
          <DownIcon>
            <Image src={down} />
          </DownIcon>
        </LanDiv>
      </Tool>
    </StyledContainer>
  );
};

export default Header;
