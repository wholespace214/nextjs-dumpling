import React, { FC } from "react";
import Image from "next/image";

import {
  ProductCardContainer,
  CardImage,
  CardName,
  CardBottom,
  CardPrice,
  CardBack,
} from "./styled";

import right from "../../assets/icons/right_black.png";

interface ProductCardProps {
  name: String;
  price: Number;
  img: StaticImageData;
  handleShowModel: Function;
}

const ProductCard: FC<ProductCardProps> = ({
  name,
  price,
  img,
  handleShowModel,
}) => {
  return (
    <ProductCardContainer>
      <CardImage>
        <Image src={img}></Image>
      </CardImage>
      <CardName>{name}</CardName>
      <CardBottom>
        <CardPrice>$ {price}</CardPrice>
        <CardBack onClick={() => handleShowModel()}>
          <Image src={right}></Image>
        </CardBack>
      </CardBottom>
    </ProductCardContainer>
  );
};

export default ProductCard;
