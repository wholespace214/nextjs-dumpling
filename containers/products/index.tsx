import React, { FC, useState } from "react";

import Image from "next/image";

import {
  ProductContainer,
  ProductTitle,
  ProductContent,
  ProductFilter,
  ProductFilterSearch,
  ProductFilterSort,
  ProductFilterSerchText,
  ProductLine,
  ProductContentFilter,
  ProductContentList,
  ProductCardGroup,
  ProductContentPage,
  PageItem,
  FilterList,
  FilterTitle,
  FilterTitleText,
  FilterItem,
  FilterTitleIcon,
  FilterHr,
  FilterItemCheck,
  FilterItemCheckText,
  FilterItemNum,
  PageItemIcon,
  FilterItmeCheckInput,
  FilterContent,

  //  Model;
  ProductModel,
} from "./styled";

import ProductCard from "../../components/ProductCard";

//  Import Icons

import search from "../../assets/icons/search.png";
import up from "../../assets/icons/up.png";
import down from "../../assets/icons/down.png";

//  Import Images
import gun1 from "../../assets/images/gun_1.png";
import gun2 from "../../assets/images/gun_2.png";
import gun3 from "../../assets/images/gun_3.png";
import gun4 from "../../assets/images/gun_4.png";
import gun5 from "../../assets/images/gun_5.png";
import gun6 from "../../assets/images/gun_6.png";

interface ProductDataJson {
  img: StaticImageData;
  name: String;
  price: Number;
}

interface FilterList {
  name: String;
  num: Number;
}

const Product: FC = () => {
  const [pageNum, setPageNum] = useState<Array<Number>>([1, 2, 3, 4, 5]);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [productData, setProductData] = useState<Array<ProductDataJson>>([
    { img: gun1, name: "Razor HD Gen 3", price: 300 },
    { img: gun2, name: "Razor HD Gen 3", price: 300 },
    { img: gun3, name: "Razor HD Gen 3", price: 300 },
    { img: gun1, name: "Razor HD Gen 3", price: 300 },
    { img: gun2, name: "Razor HD Gen 3", price: 300 },
    { img: gun3, name: "Razor HD Gen 3", price: 300 },
    { img: gun1, name: "Razor HD Gen 3", price: 300 },
    { img: gun2, name: "Razor HD Gen 3", price: 300 },
    { img: gun3, name: "Razor HD Gen 3", price: 300 },
  ]);
  const [firearms, setFirearms] = useState<Array<FilterList>>([
    { name: "Rifles and shotguns", num: 15 },
    { name: "Carbines", num: 15 },
    { name: "Machine guns", num: 23 },
    { name: "Sniper rifles", num: 45 },
    { name: "Submachine guns", num: 56 },
    { name: "Automatic rifles", num: 12 },
    { name: "Assault rifles", num: 8 },
  ]);

  const handleShowModel = () => {
    setShowModel(!showModel);
  };

  return (
    <ProductContainer>
      <ProductTitle>ALL PRODUCTS</ProductTitle>
      <ProductFilter>
        <ProductFilterSearch>
          <Image src={search} width={13} height={13}></Image>
          <ProductFilterSerchText>Search</ProductFilterSerchText>
        </ProductFilterSearch>
        <ProductFilterSort>
          <option value="0">Sort by</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </ProductFilterSort>
      </ProductFilter>
      <ProductLine></ProductLine>
      <ProductContent>
        <ProductContentFilter>
          <FilterList>
            <FilterTitle>
              <FilterTitleText>Firearms</FilterTitleText>
              <FilterTitleIcon>
                <Image src={up}></Image>
              </FilterTitleIcon>
            </FilterTitle>
            <FilterContent>
              {firearms.map((item) => (
                <FilterItem>
                  <FilterItemCheck>
                    <FilterItmeCheckInput></FilterItmeCheckInput>
                    <FilterItemCheckText>{item.name}</FilterItemCheckText>
                  </FilterItemCheck>

                  <FilterItemNum>{item.num}</FilterItemNum>
                </FilterItem>
              ))}
            </FilterContent>
          </FilterList>
          <FilterHr></FilterHr>
          <FilterList>
            <FilterTitle>
              <FilterTitleText>Red Dots</FilterTitleText>
              <FilterTitleIcon>
                <Image src={down}></Image>
              </FilterTitleIcon>
            </FilterTitle>
          </FilterList>
          <FilterHr></FilterHr>
          <FilterList>
            <FilterTitle>
              <FilterTitleText>Accessories</FilterTitleText>
              <FilterTitleIcon>
                <Image src={down}></Image>
              </FilterTitleIcon>
            </FilterTitle>
          </FilterList>
          <FilterHr></FilterHr>
        </ProductContentFilter>
        <ProductContentList>
          <ProductCardGroup>
            {productData.map((item) => (
              <ProductCard
                img={item.img}
                price={item.price}
                name={item.name}
                handleShowModel={handleShowModel}
              />
            ))}
          </ProductCardGroup>
          <ProductContentPage>
            <PageItem>
              <PageItemIcon>
                <Image src={down}></Image>
              </PageItemIcon>
            </PageItem>
            {pageNum.map((item) => {
              if (item === 1) {
                return <PageItem active={true}>{item}</PageItem>;
              } else {
                return <PageItem>{item}</PageItem>;
              }
            })}
            <PageItem>
              <PageItemIcon>
                <Image src={up}></Image>
              </PageItemIcon>
            </PageItem>
          </ProductContentPage>
        </ProductContentList>
      </ProductContent>
      {/* <ProductModel></ProductModel> */}
    </ProductContainer>
  );
};

export default Product;
