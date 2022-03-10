import React, { FC } from "react";
import {
  BlogContainer,
  BlogContainerLeft,
  BlogContainerRight,
  BlogText,
  BlogTextRead,
  BlogTextReadText,
  BlogTextReadImage,
  BlogTextTitle,
  BlogTextContent,
  BlogTextLink,
  BlogTextLinkIcon,
  BlogTextLinkText,
  BlogCardGroup,
  BlogCardGroupLeft,
  BlogCardGroupRight,
  BlogCardGroupBottom,
  BlogList,
  BlogItem,
  BlogImage,
  BlogTextBtnMobile,
} from "./styled";

import Image from "next/image";

import Link from "next/link";

import blog from "../../assets/images/blog.png";
import clock from "../../assets/icons/clock.png";
import right from "../../assets/icons/right.png";

import BlogCard from "../../components/BlogCard";
import blog4 from "../../assets/images/blog_4.png";
import blog1 from "../../assets/images/blog_1.png";
import blog2 from "../../assets/images/blog_2.png";
import blog3 from "../../assets/images/blog_3.png";
import blog5 from "../../assets/images/blog_5.png";

import Button from "@components/Button";

const Blog: FC = () => {
  return (
    <BlogContainer>
      <BlogContainerLeft>
        <BlogImage>
          <Image src={blog}></Image>
        </BlogImage>
        <BlogList>
          <BlogItem>All</BlogItem>
          <BlogItem>firearms</BlogItem>
          <BlogItem>Software</BlogItem>
        </BlogList>
      </BlogContainerLeft>
      <BlogContainerRight>
        <BlogText>
          <BlogTextRead>
            <BlogTextReadImage>
              <Image src={clock}></Image>
            </BlogTextReadImage>
            <BlogTextReadText>3 min read</BlogTextReadText>
          </BlogTextRead>
          <BlogTextTitle>
            protection <br /> of loved ones
          </BlogTextTitle>
          <BlogTextContent>
            Understanding animal health and environmental changes is critical to
            sustaining a healthy production line on a dairy farm
          </BlogTextContent>

          <BlogTextBtnMobile>
            <Button>Read more</Button>
          </BlogTextBtnMobile>
          <BlogTextLink>
            <Link href={"/blog/page"}>
              <BlogTextLinkText>Read more</BlogTextLinkText>
            </Link>
            <BlogTextLinkIcon>
              <Image src={right}></Image>
            </BlogTextLinkIcon>
          </BlogTextLink>
        </BlogText>
        <BlogCardGroup>
          <BlogCardGroupLeft>
            <BlogCard
              img={blog4}
              type={"Video"}
              date="20 oct’ 21"
              content="Lorem ipsum dolor sit amet, consectetur"
            ></BlogCard>
            <BlogCard
              img={blog1}
              type={"Video"}
              date="20 oct’ 21"
              content="Lorem ipsum dolor sit amet, consectetur"
            ></BlogCard>
          </BlogCardGroupLeft>
          <BlogCardGroupRight>
            <BlogCard
              img={blog2}
              type={"Video"}
              date="20 oct’ 21"
              content="Lorem ipsum dolor sit amet, consectetur"
            ></BlogCard>
            <BlogCard
              img={blog3}
              type={"Video"}
              date="20 oct’ 21"
              content="Lorem ipsum dolor sit amet, consectetur"
            ></BlogCard>
          </BlogCardGroupRight>
        </BlogCardGroup>
        <BlogCardGroupBottom>
          <BlogCard
            img={blog5}
            type={"Video"}
            date="20 oct’ 21"
            content="Lorem ipsum dolor sit amet, consectetur"
          ></BlogCard>
        </BlogCardGroupBottom>
      </BlogContainerRight>
    </BlogContainer>
  );
};

export default Blog;
