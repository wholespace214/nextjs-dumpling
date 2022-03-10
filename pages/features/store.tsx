import React, { FC } from "react";
import Store from "@containers/Features/Store";

import Layout from "@layouts/index";

const Index: FC = () => {
  return (
    <Layout>
      <Store />
    </Layout>
  );
};

export default Index;
