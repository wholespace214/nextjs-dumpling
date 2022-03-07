import React, { FC } from "react";
import { MenuContainer, MenuBlock, MenuItem, MenuClose } from "./styled";
import Image from "next/image";
import Link from "next/link";

import close from "../../assets/icons/close.png";

interface MenuProps {
  handleClick: Function;
}

const MenuLayout: FC<MenuProps> = ({ handleClick }) => {
  return (
    <MenuContainer>
      <MenuClose
        onClick={() => {
          handleClick(false);
        }}
      >
        <Image src={close}></Image>
      </MenuClose>
      <MenuBlock>
        <Link href={"/"}>
          <MenuItem
            onClick={() => {
              handleClick(false);
            }}
          >
            HOME
          </MenuItem>
        </Link>
        <Link href={"/about"}>
          <MenuItem
            onClick={() => {
              handleClick(false);
            }}
          >
            ABOUT US
          </MenuItem>
        </Link>
        <Link href={"/products"}>
          <MenuItem
            onClick={() => {
              handleClick(false);
            }}
          >
            PRODUCTS
          </MenuItem>
        </Link>
        <Link href={"/"}>
          <MenuItem
            onClick={() => {
              handleClick(false);
            }}
          >
            FEATURES
          </MenuItem>
        </Link>
        <Link href={"/blog"}>
          <MenuItem
            onClick={() => {
              handleClick(false);
            }}
          >
            BLOG
          </MenuItem>
        </Link>
      </MenuBlock>
    </MenuContainer>
  );
};

export default MenuLayout;
