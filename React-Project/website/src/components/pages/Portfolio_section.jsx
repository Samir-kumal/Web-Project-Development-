import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";

const Portfolio_section = () => {
  return (
    <div>
      <Header />
      <main className="h-fit  ">
       
          <div className="portfolio_section text-white">
          <div className=" w-full pt-[100px]  h-fit   ">
            <section className=" flex flex-col items-center gap-4  ">
              <h1 className=" text-white  text-6xl  font-semibold">
                Our Portfolio
              </h1>
              <h2 className="Recent relative text-2xl">Our Recent Works</h2>
              <p className="text-xl w-[900px] h-fit m-auto">
                Here are some of our major projects that we have completed
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique totam iste minima unde voluptatem. Nam velit illo
                harum, maiores sapiente numquam ipsum impedit distinctio quod
                libero officia non accusantium necessitatibus?
              </p>
              <div className="h-[400px] w-fit">
              <lottie-player 
  src="https://assets3.lottiefiles.com/private_files/lf30_wqypnpu5.json"  
  background="transparent"  
  speed="1"  
  style={{width: '500px', height: '500px'}}  
  loop  
  autoplay>
</lottie-player>
              </div>
            </section>
          </div>
          <section className="w-[1000px] m-auto mt-8 pb-8 grid-cols-5 text-black   h-fit ">
              <button className="border-1 w-28 h-12 mx-3 rounded-3xl bg-white border-red-600">
                All
              </button>
              <button className="border-1 px-12 h-12 mx-3 rounded-3xl bg-white border-red-600">
                Website
              </button>
              <button className="border-1 w-[12rem] h-12 mx-3 rounded-3xl bg-white border-red-600">
                Mobile Application
              </button>
              <button className="border-1 px-12 h-12 mx-3 rounded-3xl bg-white border-red-600">
                Logo Design
              </button>
              <button className="border-1 px-12 h-12 mx-3 rounded-3xl bg-white border-red-600">
                Graphics Design
              </button>
            </section>
          </div>

          <div className="portfolio_card_list grid w-[85%] m-auto py-4 mb-4  grid-cols-3 gap-8">
            <div className="portfolio_card m-auto project-card w-[350px] h-[300px] " >
            </div>
            <div className="portfolio_card m-auto project-card w-[350px] h-[300px] " >
            </div>
            <div className="portfolio_card m-auto project-card w-[350px] h-[300px] " >
            </div>
            <div className="portfolio_card m-auto project-card w-[350px] h-[300px] " >
            </div>
            <div className="portfolio_card m-auto project-card w-[350px] h-[300px] " >
            </div>
            <div className="portfolio_card m-auto project-card w-[350px] h-[300px] " >
            </div>
            <div className="portfolio_card m-auto project-card w-[350px] h-[300px] " >
            </div>
            <div className="portfolio_card m-auto project-card w-[350px] h-[300px] " >
            </div>
            <div className="portfolio_card m-auto project-card w-[350px] h-[300px] " >
            </div>
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio_section;
