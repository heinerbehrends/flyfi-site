import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ marginTop: "64px" }}>{children}</main>
      <Footer />
    </>
  );
}
