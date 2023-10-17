import React from "react";
import MainHeader from "./mainheader";

function Layout(props) {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
