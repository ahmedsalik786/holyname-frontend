// eslint-disable-next-line no-unused-vars
import React from "react";

import principal from "../../assets/principle.jpg";
import sign from "../../assets/signature.png";

const PrincipalDesk = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mt-8">
        <h1 className="text-center text-3xl font-bold mb-4">
          From Principal's Desk
        </h1>
        <p className="italic text-green-600 text-center border-l-4 border-blue-500 pl-4 my-4">
          " Flowers leave part of their fragrance in the hand that bestows them"
        </p>
        <div className="flex flex-wrap md:flex-nowrap mt-4">
          <div className="md:w-3/4 pr-4">
            <p className="text-black text-justify">
              Holy Name HS school Cherekapar Sivasagar has been, for years,
              known not just for its academic excellence but also for focussing
              on moral and character development, as referred to "holistic
              formation". It aims to provide an education that fosters
              intellectual growth, discipline, moral, integrity and social
              responsibility in our students. As education is a life long
              journey to embark on for which base is to be laid to our students
              from lower classes through the secondary level. Our school follows
              the academic curriculum framework as set by SEBA for high school
              and for the senior secondary by AHSEC. Our institution aims to
              create an atmosphere of excellence and hard work.We believe in the
              capacity of every student to grow and excel in his/her
              potentiality thereby they can contribute positively and
              productively to our society in the future. I am confident that we,
              with the support of the management, staff and students will
              continue to grow, prosper and reach new heights in our mission.
              Our parents are the another most strengthening power in moulding
              the future of our children. Their consistent support empowers us
              do more and more. I pay my gratitude to them for their faith in
              us. Education is not just a process of giving knowledge for a
              future job but a lifelong process that creates an understanding of
              moral and ethical values to guide one's life and make our students
              the future hope of our country. I would like to conclude this
              message with the words of Mahatma Gandhi: "The best way to find
              yourself is to lose yourself in the service of others." As I take
              on the responsibility of leading this school, with all sincerity
              and humility I dedicate myself to this noble calling and wish
              assure my beloved students, teachers, parents, non teaching staff
              and well wishers that with the help and guidance of the Almighty
              God I will do everything possible to elevate this prestigious
              institution to greater heights.
            </p>
            <p className="m-20 italic font-semibold">
              Aristotle once said that, "Educating the mind without educating
              the heart is no education at all".
            </p>
          </div>
          <div className="md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
            <img
              src={principal}
              alt="Principal"
              className="rounded-full shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            />
          </div>
        </div>
        <div>
          <footer className="mt-8 flex flex-col items-center italic text-gray-600 text-center">
            <img
              src={sign}
              className="
          h-10"
              alt=""
            />
            <span> Fr Hemanta Pegu</span>
            <span>(Principal)</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDesk;
