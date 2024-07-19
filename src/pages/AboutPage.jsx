import React from "react";
import PrincipalDesk from "../components/principalDesk/PrincipalDesk";
import Navbar from "../components/Navbar/Navbar";
import HeaderButtons from "../components/HeaderButtons/HeaderButtons";
import FixedTable from "../components/FixedTable/FixedTable";
import StickyContactBtn from "../components/StickeyContactBtn/StickeyContactBtn";

const AboutPage = () => {
  return (
    <div>
      <StickyContactBtn />
      <Navbar />
      <HeaderButtons />

      <FixedTable />
    </div>
  );
};

export default AboutPage;
