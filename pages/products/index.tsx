import React, { FC } from "react";
import Product from "@containers/products";

import Layout from "@layouts/index";

const Index: FC = () => {
  return (
    <Layout>
      <Product />
    </Layout>
  );
};

export default Index;
