import Head from "next/head";
import React from "react";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-4/5 flex m-auto">
      <Head>
        <title>DBMS Assessment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-1/6 bg-blue-400">
        <SideBar />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;