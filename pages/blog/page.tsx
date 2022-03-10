import React, { FC } from "react";
import BlogPage from "@containers/Blog/page";

import Layout from "@layouts/index";

const Index: FC = () => {
  return (
    <Layout>
      <BlogPage />
    </Layout>
  );
};

export default Index;
