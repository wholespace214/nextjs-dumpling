import React, { FC, useState } from "react";
import Image from "next/image";
import {
  StyledContainer,
  Menu,
  Logo,
  Tool,
  LanDiv,
  UserIcon,
  SearchImag,
} from "./styled";

import menu from "@assets/icons/menu2.png";
import logo from "@assets/icons/logo2.png";
import search from "@assets/icons/search2.png";
import user from "@assets/icons/user2.png";

interface HeaderProps {
  handleClick: Function;
}

const Header: FC<HeaderProps> = ({ handleClick }) => {
  const [showOption, setShowOption] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<Array<string>>([
    "ENG",
    "FRA",
    "DEU",
    "UKR",
  ]);
  const [selectOption, setSelectOption] = useState<string>("ENG");

  return (
    <StyledContainer>
      <Menu
        onClick={() => {
          handleClick(true);
        }}
      >
        <Image src={menu} width={39.75} height={14} />
      </Menu>
      <Logo>
        <Image src={logo} width={134.17} height={30.59} />
      </Logo>
      <Tool>
        <UserIcon>
          <Image src={user} width={20} height={20} />
        </UserIcon>
      </Tool>
    </StyledContainer>
  );
};

export default Header;
