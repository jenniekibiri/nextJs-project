import React from "react";
import Nav from "../components/Nav";

const DefaultLayout = ({children}) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
     
    </>
  );
};

export default DefaultLayout;
