import React from "react";

const FacultyCardItem = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="bg-blue-100 w-fit m-auto">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.tei9Vsc8styOGZ9nN0I3RAHaE8&pid=Api&P=0&h=180"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Shantanu!
            <div className="badge badge-secondary">Gold medalist</div>
          </h2>
          <p>b.tech IIT guwhati</p>
          <p>M.tech IIT guwhati</p>
          <p>10 year of teaching experience</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Computer</div>
            <div className="badge badge-outline">Mechanics</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyCardItem;
