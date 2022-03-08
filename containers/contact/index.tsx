import React, { FC } from "react";
import Image from "next/image";

import Styled from "./styled";

import contact from "../../assets/images/contact.png";

import Input from "../../components/Input";
import Button from "../../components/Button";

const Contact: FC = () => {
  return (
    <Styled.ContactContainer>
      <Styled.ContactContent>
        <Styled.ContentHeader>
          <Styled.Title>reach Us</Styled.Title>
          <Styled.Text>
            Interested in trying one? Use the form below to get in touch.
          </Styled.Text>
        </Styled.ContentHeader>
        <Styled.InputGroup>
          <Styled.LeftGroup>
            <Input label="Name" />
            <Input label="Phone" />
          </Styled.LeftGroup>
          <Styled.RightGroup>
            <Styled.RightText>
              <Styled.TextTitle>Type your massage here</Styled.TextTitle>
            </Styled.RightText>
            <Input label="" />
          </Styled.RightGroup>
        </Styled.InputGroup>
        <Styled.FooterGroup>
          <Styled.CheckGroup>
            <Styled.Check></Styled.Check>
            <Styled.CheckText>
              I give permission to contact me at this email address.
            </Styled.CheckText>
          </Styled.CheckGroup>
          <Styled.FooterBut>
            <Button>Get in touch</Button>
          </Styled.FooterBut>
        </Styled.FooterGroup>
      </Styled.ContactContent>
      <Styled.Contacts>
        <Styled.ContactsText>Porside Munitions, 21574</Styled.ContactsText>
        <Styled.ContactsText>+1 (302) 714-9161</Styled.ContactsText>
      </Styled.Contacts>
      <Styled.ContactBackground></Styled.ContactBackground>
      <Styled.ContactImage>
        <Image src={contact} />
      </Styled.ContactImage>
    </Styled.ContactContainer>
  );
};

export default Contact;
