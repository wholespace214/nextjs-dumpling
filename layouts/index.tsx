import React, { FC, ReactNode, useState } from "react";

import News from "../layouts/news";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Menu from "../layouts/menu";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = (flag: boolean) => {
    setShowMenu(flag);
  };

  return (
    <>
      {showMenu ? (
        <Menu handleClick={handleMenu} />
      ) : (
        <>
          <Header handleClick={handleMenu} />
          {children}
          <News />
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
