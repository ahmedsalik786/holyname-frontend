import React from "react";
import PrincipalDesk from "../components/principalDesk/PrincipalDesk";
import Navbar from "../components/Navbar/Navbar";
import HeaderButtons from "../components/HeaderButtons/HeaderButtons";
import FixedTable from "../components/FixedTable/FixedTable";
import StickyContactBtn from "../components/StickeyContactBtn/StickeyContactBtn";

const PrincipalDeskPage = () => {
  return (
    <div>
      <StickyContactBtn />
      <Navbar />
      <HeaderButtons />
      <PrincipalDesk />
      <FixedTable />
    </div>
  );
};

export default PrincipalDeskPage;
