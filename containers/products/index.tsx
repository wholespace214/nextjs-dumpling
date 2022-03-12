import React, { FC, useState, useEffect } from "react";

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
  ModelContent,
  CloseButton,
  ModelCode,
  ModelCodeNum,
  ModelCodeText,
  ModelTitle,
  ModelLine,
  ModelText,
  ModelPrice,
  ModelItem,
  ModelItemName,
  ModelItemValue,
  ModelHelp,
  ModelHelpIcon,
  ModelHelpText,
  ModelButton,
  MessageModel,
  MessageContent,
  MessageClose,
  MessageCheck,
  MessageTitle,
  MessageText,

  //
  MobileFilter,
  MobileFilterText,
  MobileFilterIcon,
  MoblieFilterContent,
  Content,
  ContentTitle,
  ContentClose,
} from "./styled";

import ProductCard from "@components/ProductCard";

//  Import Icons

import search from "@assets/icons/search.png";
import up from "@assets/icons/up.png";
import down from "@assets/icons/down.png";
import close from "@assets/icons/close_black.png";
import info from "@assets/icons/info.png";
import filter from "@assets/icons/filter.png";

//  Import Images
import gun1 from "@assets/images/gun_1.png";
import gun2 from "@assets/images/gun_2.png";
import gun3 from "@assets/images/gun_3.png";
import gun4 from "@assets/images/gun_4.png";
import gun5 from "@assets/images/gun_5.png";
import gun6 from "@assets/images/gun_6.png";

import check from "@assets/icons/check.png";

import { useWindowResize } from "beautiful-react-hooks";

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
  const [showModel, setShowModel] = useState<Boolean>(false);
  const [showMessage, setMessage] = useState<boolean>(false);

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

  const [redDots, setRedDots] = useState<Array<FilterList>>([
    { name: "Rifles and shotguns", num: 15 },
    { name: "Carbines", num: 15 },
    { name: "Machine guns", num: 23 },
    { name: "Sniper rifles", num: 45 },
    { name: "Submachine guns", num: 56 },
    { name: "Automatic rifles", num: 12 },
    { name: "Assault rifles", num: 8 },
  ]);

  const [accessories, setAccessories] = useState<Array<FilterList>>([
    { name: "Rifles and shotguns", num: 15 },
    { name: "Carbines", num: 15 },
    { name: "Machine guns", num: 23 },
    { name: "Sniper rifles", num: 45 },
    { name: "Submachine guns", num: 56 },
    { name: "Automatic rifles", num: 12 },
    { name: "Assault rifles", num: 8 },
  ]);

  const [firearmsShow, setFirearmsShow] = useState<Boolean>(true);
  const [redDotsShow, setRedDotsShow] = useState<Boolean>(false);
  const [accessoriesShow, setAccessoriesShow] = useState<Boolean>(false);

  const [activePageNum, setActivePageNum] = useState<Number>(1);

  const [mobilFilterShow, setMobilFilterShow] = useState<boolean>(false);

  const handleShowModel = () => {
    setShowModel(!showModel);
  };

  useEffect(() => {
    if (showModel || mobilFilterShow || showMessage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showModel, mobilFilterShow, showMessage]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth - 377 > e.pageX) {
      setShowModel(false);
    }
  };

  return (
    <>
      <ProductContainer show={!mobilFilterShow}>
        <ProductTitle>ALL PRODUCTS</ProductTitle>
        <ProductFilter>
          <MobileFilter>
            <MobileFilterIcon onClick={() => setMobilFilterShow(true)}>
              <Image src={filter} />
            </MobileFilterIcon>
            <MobileFilterText>Filter</MobileFilterText>
          </MobileFilter>
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
        <ProductLine />
        <ProductContent>
          <ProductContentFilter>
            <FilterList>
              <FilterTitle>
                <FilterTitleText>Firearms</FilterTitleText>
                <FilterTitleIcon onClick={() => setFirearmsShow(!firearmsShow)}>
                  <Image src={firearmsShow ? up : down} />
                </FilterTitleIcon>
              </FilterTitle>
              <FilterContent show={firearmsShow}>
                {firearms.map((item, index) => (
                  <FilterItem key={index}>
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
                <FilterTitleIcon onClick={() => setRedDotsShow(!redDotsShow)}>
                  <Image src={redDotsShow ? up : down} />
                </FilterTitleIcon>
              </FilterTitle>
              <FilterContent show={redDotsShow}>
                {redDots.map((item, index) => (
                  <FilterItem key={index}>
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
                <FilterTitleText>Accessories</FilterTitleText>
                <FilterTitleIcon
                  onClick={() => setAccessoriesShow(!accessoriesShow)}
                >
                  <Image src={accessoriesShow ? up : down} />
                </FilterTitleIcon>
              </FilterTitle>
              <FilterContent show={accessoriesShow}>
                {accessories.map((item, index) => (
                  <FilterItem key={index}>
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
          </ProductContentFilter>
          <ProductContentList>
            <ProductCardGroup>
              {productData.map((item, index) => (
                <ProductCard
                  key={index}
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
              {pageNum.map((item, index) => {
                if (item === activePageNum) {
                  return (
                    <PageItem
                      key={index}
                      onClick={() => setActivePageNum(item)}
                      active={true}
                    >
                      {item}
                    </PageItem>
                  );
                } else {
                  return (
                    <PageItem
                      key={index}
                      onClick={() => setActivePageNum(item)}
                    >
                      {item}
                    </PageItem>
                  );
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
      </ProductContainer>

      <ProductModel onClick={handleClick} show={showModel}>
        <ModelContent show={!showMessage} showModel={showModel}>
          <CloseButton onClick={() => setShowModel(false)}>
            <Image src={close}></Image>
          </CloseButton>
          <ModelTitle>Winchester SX4</ModelTitle>
          <ModelCode>
            <ModelCodeText>Code</ModelCodeText>
            <ModelCodeNum>511213292</ModelCodeNum>
          </ModelCode>
          <ModelLine />
          <ModelText>
            Lorem ipsum dolor sit amet,consectetur dipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit
          </ModelText>
          <ModelPrice>$ 2400</ModelPrice>
          <ModelLine />
          <ModelItem>
            <ModelItemName>Dimensions</ModelItemName>
            <ModelItemValue>35х25x50сm</ModelItemValue>
          </ModelItem>
          <ModelItem>
            <ModelItemName>Action</ModelItemName>
            <ModelItemValue>Semi-Automatic</ModelItemValue>
          </ModelItem>
          <ModelItem>
            <ModelItemName>Barrel Lenght</ModelItemName>
            <ModelItemValue>28</ModelItemValue>
          </ModelItem>
          <ModelItem>
            <ModelItemName>Hand</ModelItemName>
            <ModelItemValue>Right</ModelItemValue>
          </ModelItem>
          <ModelItem>
            <ModelItemName>Description</ModelItemName>
            <ModelItemValue>3.5 Chamber</ModelItemValue>
          </ModelItem>
          <ModelItem>
            <ModelItemName>Round Capacity</ModelItemName>
            <ModelItemValue>4+1</ModelItemValue>
          </ModelItem>
          <ModelItem>
            <ModelItemName>Gun Weight</ModelItemName>
            <ModelItemValue>7.125 lbs</ModelItemValue>
          </ModelItem>
          <ModelHelp>
            <ModelHelpIcon>
              <Image src={info} />
            </ModelHelpIcon>
            <ModelHelpText>
              We do not sell firearms online. On the site we can only get
              acquainted with the availability and put it on reserve
            </ModelHelpText>
          </ModelHelp>
          <ModelButton
            onClick={() => {
              setMessage(true);
              setShowModel(false);
            }}
          >
            reserve
          </ModelButton>
        </ModelContent>
      </ProductModel>

      <MessageModel show={showMessage}>
        <MessageContent>
          <MessageClose onClick={() => setMessage(false)}>
            <Image src={close} />
          </MessageClose>
          <MessageCheck>
            <Image src={check} />
          </MessageCheck>
          <MessageTitle>Thanks for the reservation</MessageTitle>
          <MessageText>
            You have reserved this item. Our manager will contact you shortly to
            clarify the rules of conduct
          </MessageText>
        </MessageContent>
      </MessageModel>

      <MoblieFilterContent show={mobilFilterShow}>
        <Content>
          <ContentClose onClick={() => setMobilFilterShow(false)}>
            <Image src={close} />
          </ContentClose>
          <ContentTitle>Filter</ContentTitle>
          <FilterList>
            <FilterTitle>
              <FilterTitleText>Firearms</FilterTitleText>
              <FilterTitleIcon onClick={() => setFirearmsShow(!firearmsShow)}>
                <Image src={firearmsShow ? up : down} />
              </FilterTitleIcon>
            </FilterTitle>
            <FilterContent show={firearmsShow}>
              {firearms.map((item, index) => (
                <FilterItem key={index}>
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
              <FilterTitleIcon onClick={() => setRedDotsShow(!redDotsShow)}>
                <Image src={redDotsShow ? up : down} />
              </FilterTitleIcon>
            </FilterTitle>
            <FilterContent show={redDotsShow}>
              {redDots.map((item, index) => (
                <FilterItem key={index}>
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
              <FilterTitleText>Accessories</FilterTitleText>
              <FilterTitleIcon
                onClick={() => setAccessoriesShow(!accessoriesShow)}
              >
                <Image src={accessoriesShow ? up : down} />
              </FilterTitleIcon>
            </FilterTitle>
            <FilterContent show={accessoriesShow}>
              {accessories.map((item, index) => (
                <FilterItem key={index}>
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
        </Content>
      </MoblieFilterContent>
    </>
  );
};

export default Product;
