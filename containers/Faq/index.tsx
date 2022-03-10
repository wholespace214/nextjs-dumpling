import React, { FC } from "react";
import Image from "next/image";
import {
  FaqContainer,
  FaqTitle,
  SearchGroup,
  SearchIcon,
  SearchInput,
  ListGroup,
} from "./styled";

//  Import Icons
import search from "@assets/icons/search.png";

import FaqList from "@components/FaqList";

const Faq: FC = () => {
  return (
    <FaqContainer>
      <FaqTitle>Hi! How can we help you?</FaqTitle>
      <SearchGroup>
        <SearchInput placeholder="Search" />
        <SearchIcon>
          <Image src={search} />
        </SearchIcon>
      </SearchGroup>
      <ListGroup>
        <FaqList
          open={true}
          title="What are the benefits of buying a firearm online?"
        >
          Purchasing a firearm in California requires you to jump through
          endless hoops, ensuring you remain compliant with the state's strict
          laws. Firearm dealers and shops can also be quite off-putting and
          callous, especially for a first-timer. In some cases, dealers may push
          a specific firearm on a person just for the sake of a sale, even if
          the product is not the best fit for the gun owner. We move most of the
          purchasing process online, so you do not have to commit to multiple
          trips to the firearm dealer. Shoppers may ask our specialists
          questions via live chat so they can make an informed decision when
          deciding on a firearm. There's no pressure added, and we encourage
          shoppers to purchase a gun that best suits them.
        </FaqList>
        <FaqList
          open={false}
          title="How does Dumpling Defense’s software simplify the process of buying a gun online?"
        >
          Purchasing a firearm in California requires you to jump through
          endless hoops, ensuring you remain compliant with the state's strict
          laws. Firearm dealers and shops can also be quite off-putting and
          callous, especially for a first-timer. In some cases, dealers may push
          a specific firearm on a person just for the sake of a sale, even if
          the product is not the best fit for the gun owner. We move most of the
          purchasing process online, so you do not have to commit to multiple
          trips to the firearm dealer. Shoppers may ask our specialists
          questions via live chat so they can make an informed decision when
          deciding on a firearm. There's no pressure added, and we encourage
          shoppers to purchase a gun that best suits them.
        </FaqList>
        <FaqList
          open={false}
          title="What happens after I purchase a firearm online with Dumpling Defense?"
        >
          Purchasing a firearm in California requires you to jump through
          endless hoops, ensuring you remain compliant with the state's strict
          laws. Firearm dealers and shops can also be quite off-putting and
          callous, especially for a first-timer. In some cases, dealers may push
          a specific firearm on a person just for the sake of a sale, even if
          the product is not the best fit for the gun owner. We move most of the
          purchasing process online, so you do not have to commit to multiple
          trips to the firearm dealer. Shoppers may ask our specialists
          questions via live chat so they can make an informed decision when
          deciding on a firearm. There's no pressure added, and we encourage
          shoppers to purchase a gun that best suits them.
        </FaqList>
        <FaqList
          open={false}
          title="Will there be any paperwork required in-person when I pick up my firearm?"
        >
          Purchasing a firearm in California requires you to jump through
          endless hoops, ensuring you remain compliant with the state's strict
          laws. Firearm dealers and shops can also be quite off-putting and
          callous, especially for a first-timer. In some cases, dealers may push
          a specific firearm on a person just for the sake of a sale, even if
          the product is not the best fit for the gun owner. We move most of the
          purchasing process online, so you do not have to commit to multiple
          trips to the firearm dealer. Shoppers may ask our specialists
          questions via live chat so they can make an informed decision when
          deciding on a firearm. There's no pressure added, and we encourage
          shoppers to purchase a gun that best suits them.
        </FaqList>
        <FaqList
          open={false}
          title="How do I keep track of the documents required to buy a gun online in California?"
        >
          Purchasing a firearm in California requires you to jump through
          endless hoops, ensuring you remain compliant with the state's strict
          laws. Firearm dealers and shops can also be quite off-putting and
          callous, especially for a first-timer. In some cases, dealers may push
          a specific firearm on a person just for the sake of a sale, even if
          the product is not the best fit for the gun owner. We move most of the
          purchasing process online, so you do not have to commit to multiple
          trips to the firearm dealer. Shoppers may ask our specialists
          questions via live chat so they can make an informed decision when
          deciding on a firearm. There's no pressure added, and we encourage
          shoppers to purchase a gun that best suits them.
        </FaqList>
      </ListGroup>
    </FaqContainer>
  );
};

export default Faq;
