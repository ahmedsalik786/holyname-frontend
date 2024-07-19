import React from "react";
import StickyContactBtn from "../components/StickeyContactBtn/StickeyContactBtn";
import Navbar from "../components/Navbar/Navbar";
import HeaderButtons from "../components/HeaderButtons/HeaderButtons";

const AdmissionPage = () => {
  return (
    <div>
      <StickyContactBtn />
      <Navbar />
      <HeaderButtons />
      <FixedTable />
    </div>
  );
};

export default AdmissionPage;
