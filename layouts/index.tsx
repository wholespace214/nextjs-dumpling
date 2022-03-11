import React, { FC, ReactNode, useState, useEffect } from "react";
import { useMediaQuery } from "beautiful-react-hooks";

import News from "@layouts/news";
import Footer from "@layouts/footer";
import Header from "@layouts/header";
import Header2 from "@layouts/header/index2";
import Menu from "@layouts/menu";

import { useRouter } from "next/router";

import LoadingBar from "react-top-loading-bar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter();
  const isTabletMode = useMediaQuery("(max-width: 768px)");

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleMenu = (flag: boolean) => {
    if (!flag) {
    }
    setShowMenu(flag);
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <div className="loading">
      <LoadingBar
        color="#f11946"
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {showMenu ? (
        <Menu handleClick={handleMenu} />
      ) : (
        <>
          {isTabletMode ? (
            <Header handleClick={handleMenu} />
          ) : pathname === "/contact" ? (
            <Header2 handleClick={handleMenu} />
          ) : (
            <Header handleClick={handleMenu} />
          )}
          {children}
          {pathname === "/contact" ? "" : <News />}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
