import React from "react";
import Navbar from "../Components/Layout/Navbar/Navbar";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Container;
