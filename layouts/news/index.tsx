import React, { FC } from "react";
import {
  NewsContainer,
  NewsTextWhite,
  NewsTextBlack,
  NewsButton,
} from "./styled";

const News: FC = () => {
  return (
    <NewsContainer>
      <NewsTextWhite>stay up to date with all news</NewsTextWhite>
      <NewsTextBlack>in the firearms industry</NewsTextBlack>
      <NewsButton>Read more</NewsButton>
    </NewsContainer>
  );
};

export default News;
