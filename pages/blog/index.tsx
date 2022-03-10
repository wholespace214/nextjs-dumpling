import React, { FC } from "react";
import Blog from "@containers/Blog";

import Layout from "@layouts/index";

const Index: FC = () => {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
};

export default Index;
