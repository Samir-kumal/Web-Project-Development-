import React from "react";
import 'tw-elements';
import Dropdownmenu from "./Layout/Dropdownmenu";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import Section_1 from "./Layout/Section_1";
import Section_2 from "./Layout/Section_2";
import Section_3 from "./Layout/Section_3";
import Section_4 from "./Layout/Section_4";
import Section_5 from "./Layout/Section_5";

const Main = () => {
  return (
    <>
      <Header/>
      <main>
        <Section_1/>
        <Section_2/>
        <Section_3/>    
        <Section_4/>
        {/* <Section_5/> */}
      </main>
   <Footer/>
    </>
  );
};

export default Main;