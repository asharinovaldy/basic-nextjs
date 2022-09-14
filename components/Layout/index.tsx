import React, { ReactNode } from "react";
import Header from "../Header/";
import Footer from "../Footer";
import styles from "./Layout.module.css";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: String;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          {" "}
          {pageTitle ? `NextJS Basic | ${pageTitle}` : "Next JS Basic"}{" "}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
