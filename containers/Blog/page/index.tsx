import React, { FC } from "react";
import Image from "next/image";

//TODO import icon
import left from "@assets/icons/left.png";
import user from "@assets/icons/user.png";

import facebook from "@assets/icons/facebook.png";
import linkedin from "@assets/icons/linkedin.png";
import twitter from "@assets/icons/twitter.png";

//TODO import image
import blog_page_1 from "@assets/images/blog_page_1.png";

import recommented_1 from "@assets/images/recommented_1.png";
import recommented_2 from "@assets/images/recommented_2.png";
import recommented_3 from "@assets/images/recommented_3.png";

import blog from "@assets/images/blog.png";

//TODO import components
import BlogCard from "@components/BlogCard";

import {
  BlogPageContainer,
  Blog,
  BlogBackBtn,
  BlogBackBtnText,
  BlogBackBtnIcon,
  BlogPageContainerLeft,
  LeftHeader,
  LeftTitle,
  LeftUser,
  LeftUserIcon,
  LeftUserContent,
  LeftUserContentName,
  LeftUserContentType,
  BlogPageContainerRight,
  RightContent,
  RightIconList,
  RightIconItem,
  HeaderText,
  Title,
  Text,
  RightImage,
  Recommented,
  RecommentedTitle,
  RecommentedList,
  RecommentedItem,
  BlogImage,
} from "./styled";

const BlogPage: FC = () => {
  return (
    <Blog>
      <BlogImage>
        <Image src={blog}></Image>
      </BlogImage>
      <BlogBackBtn>
        <BlogBackBtnIcon>
          <Image src={left} />
        </BlogBackBtnIcon>
        <BlogBackBtnText>back</BlogBackBtnText>
      </BlogBackBtn>
      <BlogPageContainer>
        <BlogPageContainerLeft>
          <LeftHeader>
            <span>Video</span>
            <span>20 oct’ 21</span>
          </LeftHeader>
          <LeftTitle>Protection of loved ones</LeftTitle>
          <LeftUser>
            <LeftUserIcon>
              <Image src={user} />
            </LeftUserIcon>
            <LeftUserContent>
              <LeftUserContentName>Tom Ford</LeftUserContentName>
              <LeftUserContentType>business analyst</LeftUserContentType>
            </LeftUserContent>
          </LeftUser>
        </BlogPageContainerLeft>
        <BlogPageContainerRight>
          <RightContent>
            <HeaderText>
              These grip modules feature aggressive stippling on front and
              backstraps and signature Wilson Combat Starburst pattern on the
              sides of the grip. All versions are 6 1/8″ long and 1 1/8″ thick
              at the grip, but the XL modules are 3/8″ taller (3 1/2″ vs 3 1/8″)
              and weigh . These grip modules feature aggressive stippling on
              front and backstraps and signature Wilson Combat Starburst pattern
              on the sides of the grip. All versions are 6 1/8″ long and 1 1/8″
              thick at the grip, but the XL modules are 3/8″ taller (3 1/2″ vs 3
              1/8″) and weigh .These grip modules feature aggressive stippling
              on front and backstraps and signature Wilson Combat Starburst
              pattern on the sides of the grip. All versions are 6 1/8″ long and
              1 1/8″ thick at the grip, but the XL modules are 3/8″ taller (3
              1/2″ vs 3 1/8″) and weigh .These grip modules feature aggressive
              stippling on front and backstraps and signature Wilson Combat
              Starburst pattern on the sides of the grip. All versions are 6
              1/8″ long and 1 1/8″ thick at the grip, but the XL modules are
              3/8″ taller (3 1/2″ vs 3 1/8″) and weigh .These grip modules
              feature aggressive stippling on front and backstraps and signature
              Wilson Combat Starburst pattern on the sides of the grip. All
              versions are 6 1/8″ long and 1 1/8″ thick at the grip, but the XL
              modules are 3/8″ taller (3 1/2″ vs 3 1/8″) and weigh . These grip
              modules feature aggressive stippling on front and backstraps and
              signature Wilson Combat Starburst pattern on the sides of the
              grip. All versions are 6 1/8″ long and 1 1/8″ thick at the grip,
              but the XL modules are 3/8″ taller (3 1/2″ vs 3 1/8″) and weigh
              .These grip modules feature aggressive stippling on front and
              backstraps and signature Wilson Combat Starburst pattern on the
              sides of the grip. All versions are 6 1/8″ long and 1 1/8″ thick
              at the grip, but the XL modules are 3/8″ taller (3 1/2″ vs 3 1/8″)
              and weigh .These grip modules feature aggressive stippling on
              front and backstraps and signature Wilson Combat Starburst pattern
              on the sides of the grip. All versions are 6 1/8″ long and 1 1/8″
              thick at the grip, but the XL modules are 3/8″ taller (3 1/2″ vs 3
              1/8″) and weigh .
            </HeaderText>
            <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            <Text>
              These grip modules feature aggressive stippling on front and
              backstraps and signature Wilson Combat Starburst pattern on the
              sides of the grip. All versions are 6 1/8″ long and 1 1/8″ thick
              at the grip, but the XL modules are 3/8″ taller (3 1/2″ vs 3 1/8″)
              and weigh .
            </Text>
            <Text>
              Wilson Combat WCP365 and WCP365 XL grip modules are both available
              with and without manual safety cut. The versions with manual
              safety are available in black color only whereas the grip modules
              lacking a manual safety cut can be purchased in both black and tan
              color options.
            </Text>

            <Title>Lorem ipsum dolor sit amet, consectetur</Title>
            <Text>
              These grip modules feature aggressive stippling on front and
              backstraps and signature Wilson Combat Starburst pattern on the
              sides of the grip. All versions are 6 1/8″ long and 1 1/8″ thick
              at the grip, but the XL modules are 3/8″ taller (3 1/2″ vs 3 1/8″)
              and weigh .
            </Text>
            <RightImage>
              <Image src={blog_page_1} />
            </RightImage>
            <Text>
              These grip modules feature aggressive stippling on front and
              backstraps and signature Wilson Combat Starburst pattern on the
              sides of the grip. All versions are 6 1/8″ long and 1 1/8″ thick
              at the grip, but the XL modules are 3/8″ taller (3 1/2″ vs 3 1/8″)
              and weigh .
            </Text>

            <Text>
              These grip modules feature aggressive stippling on front and
              backstraps and signature Wilson Combat Starburst pattern on the
              sides of the grip. All versions are 6 1/8″ long and 1 1/8″ thick
              at the grip, but the XL modules are 3/8″ taller (3 1/2″ vs 3 1/8″)
              and weigh .
            </Text>
          </RightContent>
          <RightIconList>
            <RightIconItem>
              <Image src={twitter} />
            </RightIconItem>
            <RightIconItem>
              <Image src={facebook} />
            </RightIconItem>
            <RightIconItem>
              <Image src={linkedin} />
            </RightIconItem>
          </RightIconList>
        </BlogPageContainerRight>
      </BlogPageContainer>
      <Recommented>
        <RecommentedTitle>Recommented</RecommentedTitle>
        <RecommentedList>
          <RecommentedItem>
            <BlogCard
              img={recommented_1}
              type={"Video"}
              date="20 oct’ 21"
              content="Lorem ipsum dolor sit amet, consectetur"
            ></BlogCard>
          </RecommentedItem>
          <RecommentedItem>
            <BlogCard
              img={recommented_2}
              type={"Video"}
              date="20 oct’ 21"
              content="Lorem ipsum dolor sit amet, consectetur"
            ></BlogCard>
          </RecommentedItem>
          <RecommentedItem>
            <BlogCard
              img={recommented_3}
              type={"Video"}
              date="20 oct’ 21"
              content="Lorem ipsum dolor sit amet, consectetur"
            ></BlogCard>
          </RecommentedItem>
        </RecommentedList>
      </Recommented>
    </Blog>
  );
};

export default BlogPage;
