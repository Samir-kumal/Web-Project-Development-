import React from "react";

const Section_3 = () => {
  return (
    <div>
      <section className="h-[500px] ">
        <div className="third-section w-full flex justify-center ">
          <h1 className="text-4xl">About us</h1>
        </div>
        <br />
        <br />
        <br />
        <div className="About-us flex w-[70%] m-auto px-10 gap-24 shadow-2xl p-4 h-[400px]">
          <p className="text-xl pt-10">
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
