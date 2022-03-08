import React, { FC } from "react";
import {
  NewsContainer,
  NewsTextWhite,
  NewsTextBlack,
  NewsButton,
  EmailGroup,
} from "./styled";

import Input from "../../components/Input";

const News: FC = () => {
  return (
    <NewsContainer>
      <NewsTextWhite>stay up to date with all news</NewsTextWhite>
      <NewsTextBlack>in the firearms industry</NewsTextBlack>
      <EmailGroup>
        <Input label={"Email"} />
      </EmailGroup>
      <NewsButton>subscribe</NewsButton>
    </NewsContainer>
  );
};

export default News;
