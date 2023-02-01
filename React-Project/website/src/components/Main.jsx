import React from "react";
import 'tw-elements';
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Language_slider from "./Layout/language_slider";
import Recent_projects from "./Layout/Recent_projects";

import Section_1 from "./Layout/Section_1";
import Section_2 from "./Layout/Section_2";
import Section_3 from "./Layout/Section_3";
import Section_4 from "./Layout/Section_4";

const Main = () => {
  return (
    <>
      <Header/>
      <main>
        <Section_1/>
        <Section_2/>
        <Recent_projects/>
        <Section_3/>   
        <Language_slider/>

        <Section_4/>

        {/* <Section_5/> */}
      </main>
   <Footer/>
    </>
  );
};

export default Main;