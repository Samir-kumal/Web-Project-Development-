import React from 'react';
import Slide1 from '../Images/Slide1.jpg';
import Slide2 from '../Images/Slide2.jpg';
import Slide3 from '../Images/Slide3.jpg';
import Logo1 from '../assets/assets/Logo-design-logo.png';
import Logo2 from '../assets/assets/Digital-marketing-logo.png';
import Logo3 from '../assets/assets/Branding-logo.png';
import Logo4 from '../assets/assets/Web-development-logo.png';
import Logo5 from '../assets/assets/Reception-logo.png';
import Logo6 from '../assets/assets/UI-UX-logo.png';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

const Main = () => {
    return (
        <div>
        <Header/>
            <main>
                <section className="relative">
                    <div
                        id="carouselExampleControls"
                        className="carousel slide relative"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-inner relative w-full overflow-hidden bg-black">
                            <div
                                className="carousel-item active relative float-left w-full opacity-50"
                            >
                                <img
                                    src={Slide1}
                                    className="block w-full"
                                    alt="Wild Landscape"
                                />
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
                        <h1 className="text-4xl font-semibold text-red-600"> Subsriber.org </h1>
                        <h1 className="text-5xl">Nepal's Leading Digital Marketing Agency!</h1>
                        <br />
                        <p className="text-xl">
                            Suscriber.org is a leading online company that provides a wide range
                            of digital marketing, <br />
                            web designing, and online reception services to help businesses of
                            all sizes grow and succeed online.
                        </p>
                        <br />
                        <br />
                        <button className="absolute top-[90%] left-[0%] z-20 rounded-3xl  px-12 py-4 text-black font-semibold bg-slate-100 transition duration-200  border-2 hover:bg-black hover:text-white">
                            <a href="google.com">Get Started</a>
                        </button>
                    </div>
                </section>
                <section className="bg-[rgb(238,238,238)]">
                    <div className="cards-section w-[80%] m-auto h-[900px]">
                        <div className="desc h-32 flex justify-center items-center">
                            <h1 className="text-3xl">We Provide The Best Service With Our Tools</h1>
                        </div>
                        <div className="cards grid grid-cols-3  gap-12 justify-center">
                            <div className="flex justify-center transition duration-200 hover:scale-80">
                                <div className="flex flex-col items-center p-6 rounded-lg shadow-lg transition duration-200 hover:scale-105 bg-white max-w-sm">
                                    <h5
                                        className="text-gray-900 text-xl leading-tight font-bold mb-2"
                                    >
                                        Logo Designing
                                    </h5>
                                    <div className="logo-description">
                                        <img src={Logo1} alt="" height="80px" width="80px" />

                                    </div>
                                    <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                                    <p className="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Readmore
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center transition duration-200 hover:scale-105">
                                <div className="flex flex-col items-center p-6 rounded-lg shadow-lg transition duration-200  bg-white max-w-sm">
                                    <h5
                                        className="text-gray-900 text-xl leading-tight font-bold mb-2"
                                    >
                                        Digital Marketing
                                    </h5>
                                    <div className="logo-description">
                                        <img src={Logo2} alt="" height="80px" width="80px" />

                                    </div>
                                    <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                                    <p className="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Readmore
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center transition duration-200 hover:scale-105">
                                <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                    <h5
                                        className="text-gray-900 text-xl leading-tight font-bold mb-2"
                                    >
                                        Branding
                                    </h5>
                                    <div className="logo-description">
                                        <img src={Logo3} alt="" height="80px" width="80px" />

                                    </div>
                                    <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                                    <p className="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>

                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Readmore
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center transition duration-200 hover:scale-105">
                                <div className=" flex flex-col items-center p-6 rounded-lg shadow-lg bg-white max-w-sm ">
                                    <h5
                                        className="text-gray-900 px-4  text-xl leading-tight  font-bold mb-2"
                                    >
                                        Web Designing
                                    </h5>
                                    <div className="logo-description">
                                        <img src={Logo4} alt=" " height="80px" width="80px" />

                                    </div>


                                    <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                                    <p className="text-gray-700 text-base mt-4 mb-4">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Readmore
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center transition duration-200 hover:scale-105">
                                <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                    <h5
                                        className="text-gray-900 text-xl leading-tight font-bold mb-2"
                                    >
                                        Online Reception Services
                                    </h5>
                                    <div className="logo-description">
                                        <img src={Logo5} alt="" height="80px" width="80px" />

                                    </div>
                                    <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                                    <p className="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Readmore
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-center transition duration-200 hover:scale-105">
                                <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-white max-w-sm">
                                    <h5
                                        className="text-gray-900 text-xl leading-tight font-bold mb-2"
                                    >
                                        UI/UX
                                    </h5>
                                    <div className="logo-description">
                                        <img src={Logo6} alt="" height="80px" width="80px" />

                                    </div>
                                    <div className="w-full h-[1px] mt-4 bg-gray-400 opacity-60 "></div>

                                    <p className="text-gray-700 text-base mb-4">
                                        Some quick example text to build on the card title and make up
                                        the bulk of the card's content.
                                    </p>
                                    <button
                                        type="button"
                                        className="inline-block px-6 py-2.5 bg-red-500   text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-black hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Readmore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="h-screen">
                <div className="third-section w-full flex justify-center ">
                    <h1 className="text-4xl">About us</h1>
                </div>
                <br /><br /><br />
                <div className="About-us flex w-[70%] m-auto px-10 gap-24 shadow-2xl p-4 h-[400px]">

                    <p className="text-xl pt-10">
                        Suscriber.org is a leading online company         <br />
                        that provides a wide range of digital             <br />
                        marketing, web designing, and online reception    <br />
                        services to help businesses of allsizes grow and  <br />
                        succeed online. Our team of experts isdedicated
                        to providing top-notch services that are tailored
                        to the unique needs of each of our clients.       <br />
                    </p>
                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" height="300px" width="400px" />
                </div>
            </section>
        </main>
        <Footer/>
    </div >
  )
}

export default Main
