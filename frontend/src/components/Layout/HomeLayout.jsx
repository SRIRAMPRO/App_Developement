import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/HomeRouter";

const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <Fragment>
      {!isAuthPage && <Header />}
      <div>
        <Routers />
      </div>
      {!isAuthPage && <Footer />}
    </Fragment>
  );
};

export default Layout;
