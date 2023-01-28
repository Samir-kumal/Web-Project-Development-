import React from "react";
import 'tw-elements';
import Slide1 from "/src/Images/Slide1.jpg"
import Slide2 from "/src/Images/Slide2.jpg";
import Slide3 from "/src/Images/Slide3.jpg";

const Section_1 = () => {
  return (
    <div>
      <section className="relative">
        <div
          id="carouselExampleControls"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden bg-black">
            <div className="carousel-item active relative float-left w-full opacity-50">
              <img src={Slide1} className="block w-full" alt="Wild Landscape" />
            </div>
            {/* <div className="carousel-item relative float-left w-full opacity-50">
                                <img
                                    src={Slide2}
                                    className="block w-full"
                                    alt="Camera"
                                />
                            </div>
                            <div className="carousel-item relative float-left w-full opacity-50">
                                <img
                                    src={Slide3}
                                    className="block w-full"
                                    alt="Exotic Fruits"
                                />
                            </div> */}
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className=" inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden"></span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="page-main-content absolute top-[45%] left-8 text-white">
          <h1 className="text-xl font-semibold text-white">Welcome to</h1>
          <h1 className="text-4xl font-semibold text-red-600">
            {" "}
            Subsriber.org{" "}
          </h1>
          <h1 className="text-5xl">
            Nepal's Leading Digital Marketing Agency!
          </h1>
          <br />
          <p className="text-xl">
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
