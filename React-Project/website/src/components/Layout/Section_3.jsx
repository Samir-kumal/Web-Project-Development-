import React from "react";

const Section_3 = () => {
  return (
    <div>
      <section className="aboutus_section mt-12 pt-4 pb-12 lg:h-[900px] h-fit bg-[#F1F2F3] ">
        <div className="third-section w-full flex justify-center ">
          <h1 className="font-serif font-bold text-4xl">About Us</h1>
        </div>
        <div className="About-us lg:flex lg:items-center w-[80%] m-auto mt-8 px-10 gap-24 shadow-2xl p-4 lg:h-[700px] h-fit">
          <div>
          <lottie-player 
  src="https://assets2.lottiefiles.com/packages/lf20_xmdlmtgz.json"  
  background="transparent"  
  speed="1"  
  style={{width: '600px', height: '700px'}}  
  loop  
  autoplay>
</lottie-player>
          </div>
          <div>
            <h1 className="text-4xl font-serif font-bold ">We are the Visionary Enthugiast</h1>
            <br />
            <br />
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus minima explicabo eligendi quas distinctio et, architecto similique porro excepturi, sunt reiciendis commodi officia facere eveniet? Magni autem architecto animi provident.</p>
            <br />
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ex quaerat praesentium dolore et nesciunt rerum quibusdam. Labore, id ab.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_3;
