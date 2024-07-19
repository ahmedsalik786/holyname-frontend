import React from "react";
import Faculity from "../components/Faculity/Faculity";
import HeaderButtons from "../components/HeaderButtons/HeaderButtons";
import Navbar from "../components/Navbar/Navbar";
import FixedTable from "../components/FixedTable/FixedTable";

const FaculityPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderButtons />
      <Faculity />
      <FixedTable />
    </div>
  );
};

export default FaculityPage;
