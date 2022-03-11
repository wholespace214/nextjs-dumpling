import React, { FC } from "react";
import {
  NewsContainer,
  NewsTextWhite,
  NewsTextBlack,
  NewsButton,
  EmailGroup,
  NewsDiv,
} from "./styled";

import Input from "@components/Input2";

const News: FC = () => {
  return (
    <NewsContainer>
      <NewsDiv>
        <NewsTextWhite>stay up to date with all news</NewsTextWhite>
        <NewsTextBlack>in the firearms industry</NewsTextBlack>
        <EmailGroup>
          <Input label={"Email"} />
        </EmailGroup>
        <NewsButton>subscribe</NewsButton>
      </NewsDiv>
    </NewsContainer>
  );
};

export default News;
