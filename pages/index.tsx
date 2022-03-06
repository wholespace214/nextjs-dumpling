import React, { FC } from "react";
// import Container from "../containers/container";
import Header from "../layouts/header";
import Home from "../containers/Home";
import News from "../layouts/news";
import Footer from "../layouts/footer";

const Index: FC = () => {
  return (
    <>
      <Header />
      <Home />
      <News />
      <Footer />
    </>
  );
};

export default Index;
