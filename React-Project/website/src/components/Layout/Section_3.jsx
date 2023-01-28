import React from "react";

const Section_3 = () => {
  return (
    <div>
      <section className="mt-12 pt-4 pb-12 h-fit bg-white ">
        <div className="third-section w-full flex justify-center ">
          <h1 className="font-serif font-bold text-4xl">About Us</h1>
        </div>
        <div className="About-us lg:flex w-[70%] m-auto mt-8 px-10 gap-24 shadow-2xl p-4 h-fit">
          <p className="lg:text-xl pt-10">
            Suscriber.org is a leading online company <br />
            that provides a wide range of digital <br />
            marketing, web designing, and online reception <br />
            services to help businesses of allsizes grow and <br />
            succeed online. Our team of experts isdedicated to providing
            top-notch services that are tailored to the unique needs of each of
            our clients. <br />
          </p>
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
            alt=""
            height="300px"
            width="400px"
          />
        </div>
      </section>
    </div>
  );
};

export default Section_3;
