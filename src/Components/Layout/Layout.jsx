import React from "react";
import Container from "../../Container/Container";
import TrendCoins from "./Trend/TrendCoins";
import Header from "./Header/Header";
import Service from "./Service/Service";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Service />
      <TrendCoins />
      <Footer />
    </Container>
  );
};

export default Layout;
