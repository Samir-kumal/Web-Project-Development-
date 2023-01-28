import React from "react";
import 'tw-elements';
import Slide2 from "/src/Images/Slide2.jpg";
import Slide3 from "/src/Images/Slide3.jpg";

const Section_1 = () => {
  return (
    <div>
      <section className="relative h-fit bg-black ">
        <div className="image-slide opacity-40 w-full h-[700px] bg-red-300">

        </div>
        <div className="page-main-content absolute top-[45%] left-8 text-white">
          <h1 className="text-xl font-semibold text-white">Welcome to</h1>
          <h1 className="lg:text-4xl text-4xl font-semibold text-red-600">
            {" "}
            Subsriber.org{" "}
          </h1>
          <h1 className="lg:text-5xl  text-5xl">
            Nepal's Leading Digital Marketing Agency!
          </h1>
          <br />
          <p className="lg:visible lg:h-fit h-0  invisible lg:text-xl">
            Suscriber.org is a leading online company that provides a wide range
            of digital marketing, <br />
            web designing, and online reception services to help businesses of
            all sizes grow and succeed online.
          </p>
          <br />
          <br />
          <button className="absolute top-[90%] left-[0%]  rounded-3xl  px-12 py-4 text-black font-semibold bg-slate-100 transition duration-200  border-2 hover:bg-black hover:text-white">
            <a href="google.com">Get Started</a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section_1;
