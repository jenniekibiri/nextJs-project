import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const DefaultLayout = ({children}) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
