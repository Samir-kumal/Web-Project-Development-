import React from 'react'
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';

const AboutUs = () => {
  return (
    <div>
      <Header/>
      <main className='About_page'>
        <section className='About_section flex items-center justify-center bg-red-500 h-screen w-full'>
            <div>
                About US
            </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default AboutUs;
