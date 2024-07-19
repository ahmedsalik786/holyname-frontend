import React from "react";
import FaculityImageSlider from "./FaculityImageSlider.jsx";
import FacultyCardItem from "./FacultyCardItem.jsx";

const Faculity = () => {
  const data = {
    faculity: {
      guestFaculity: [
        {
          name: "salik ahmed",
          photo: "",
          experience: "5yr experience in teaching",
          subject: ["matchs,computer,science"],
        },
      ],
    },
  };
  return (
    <div>
      <h1 className="text-center font-extrabold font-black-500 text-2xl">
        Meet our Teachers
      </h1>
      <div className="box border-black  p-10 m-20 w-auto">
        {/* <FaculityImageSlider /> */}
      </div>
      <div className="guestFaculity m-10 p-5">
        <h1 className="p-10 text-3xl font-extrabold">Guest Faculity</h1>
        <div className="box flex flex-grow gap-5">
          <FacultyCardItem />
          <FacultyCardItem />
          <FacultyCardItem />
        </div>
      </div>
      <div className="guestFaculity m-10 p-5">
        <h1 className="p-10 text-3xl font-extrabold">PHYSICS FACULTY</h1>
        <div className="box flex flex-grow gap-5">
          <FacultyCardItem />
          <FacultyCardItem />
          <FacultyCardItem />
        </div>
      </div>
      <div className="guestFaculity m-10 p-5">
        <h1 className="p-10  underline text-3xl font-extrabold">
          CHEMISTRY FACULTY
        </h1>
        <div className="box flex flex-grow gap-5">
          <FacultyCardItem />
          <FacultyCardItem />
          <FacultyCardItem />
        </div>
      </div>
    </div>
  );
};

export default Faculity;
