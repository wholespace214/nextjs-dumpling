import React, { FC, useState } from "react";
import Image from "next/image";

import {
  Scroll,
  Content,
  ContentMainText,
  ContentImage,
  MainTextContent,
  MainTextTitle,
  ContentItem,
  Tool,
  ToolButton,
  ToolNum,
  ToolLine,
  ToolNumMobile,
} from "./styled";
import work from "@assets/images/work.png";

import Button from "@components/Button";

import { useMediaQuery } from "beautiful-react-hooks";

const data = [1, 2, 3, 4];

const ScrollView: FC = () => {
  const [scrollNum, setScrollNum] = useState<number>(1);
  const isTabletMode = useMediaQuery("(max-width: 768px)");

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;

    // console.log(containerHeight, scrollHeight, scrollTop);

    if (scrollTop < 300) {
      setScrollNum(1);
    } else if (scrollTop < 900 && scrollTop > 300) {
      setScrollNum(2);
    } else if ((scrollTop < 1500 && scrollTop > 900) || scrollTop == 1200) {
      setScrollNum(3);
    } else {
      setScrollNum(4);
    }
  };

  const onScrollMobile = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;
    const scrollTop = event.currentTarget.scrollTop;

    // console.log(containerHeight, scrollHeight, scrollTop);

    if (scrollTop < 250) {
      setScrollNum(1);
    } else if ((scrollTop < 750 && scrollTop > 250) || scrollTop == 250) {
      setScrollNum(2);
    } else if ((scrollTop < 1250 && scrollTop > 750) || scrollTop == 750) {
      setScrollNum(3);
    } else {
      setScrollNum(4);
    }
  };

  return (
    <Scroll>
      <ToolNumMobile>
        <span style={{ color: "red" }}>0{scrollNum}</span>/<span>04</span>
      </ToolNumMobile>
      {}
      <Content onScroll={isTabletMode ? onScrollMobile : onScroll}>
        {data.map((item, index) => (
          <ContentItem key={index}>
            <ContentMainText>
              <MainTextTitle>Choose a Firearm Online</MainTextTitle>
              <MainTextContent>
                Shop online, reserve your firearm and secure it with a deposit,
                and schedule a time to come into our store to complete the rest
                of the purchase process.
              </MainTextContent>
            </ContentMainText>
            <ContentImage>
              <Image src={work} />
            </ContentImage>
          </ContentItem>
        ))}
      </Content>
      <Tool>
        <ToolNum>
          <span style={{ color: "red" }}>0{scrollNum}</span>/<span>04</span>
        </ToolNum>
        <ToolLine />
        <ToolButton>
          <Button>Read more</Button>
        </ToolButton>
      </Tool>
    </Scroll>
  );
};

export default ScrollView;
