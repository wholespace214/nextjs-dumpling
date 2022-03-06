import React, { FC } from "react";
import Image from "next/image";

import {
  BlogCardContainer,
  BlogCardContent,
  BlogCardDate,
  BlogCardTitle,
  BlogCardType,
  BlogCardDateLine,
} from "./styled";

interface BlogCardProps {
  type: string;
  date: string;
  img: StaticImageData;
  content: string;
}

const BlogCard: FC<BlogCardProps> = ({ type, date, img, content }) => {
  return (
    <BlogCardContainer>
      <Image src={img} />
      <BlogCardTitle>
        <BlogCardType>{type}</BlogCardType>
        <BlogCardDateLine></BlogCardDateLine>
        <BlogCardDate>{date}</BlogCardDate>
      </BlogCardTitle>
      <BlogCardContent>{content}</BlogCardContent>
    </BlogCardContainer>
  );
};

export default BlogCard;
