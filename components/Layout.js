import React from "react";
import HEAD from "next/head";

const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <HEAD>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </HEAD>
      {children}
    </React.Fragment>
  );
};

export default Layout;
