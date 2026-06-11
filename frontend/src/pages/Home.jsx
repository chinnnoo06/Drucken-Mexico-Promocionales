import React, { useEffect } from 'react';
import { SectionWrapper } from '../components/layout/SectionWrapper'
import heroBg from '../assets/image-background.webp';
import { HomeProductsCarousel } from '../components/home/HomeProductsCarousel';
import { HomeMainContent } from '../components/home/HomeMainContent';
import { About } from './About';
import { OurServices } from './OurServices';
import { Contact } from './Contact';

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div id="inicio" className="relative isolate min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/15 z-[1] pointer-events-none" aria-hidden="true"></div>
        <SectionWrapper className="container-main-content relative z-[2] flex flex-col lg:flex-row min-h-screen justify-center items-center gap-8 lg:gap-10 mx-auto max-w-[1300px] pt-24">
          <HomeMainContent />
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <div className='tittle-section flex justify-between items-center'>
          <h2 className='text-[#9F531B] titulo-seccion font-bold text-4xl lg:text-6xl mb-6 relative inline-block '>
            Productos Para ti
            <span className="absolute left-0 bottom-[-20px] w-20 h-1 bg-[#9F531B] rounded-full"></span>
          </h2>
        </div>
        <HomeProductsCarousel/>
      </SectionWrapper>

      <section id="nosotros" className=" bg-gray-50">
        <About />
      </section>

      {/* Sección Servicios */}
      <section id="servicios">
        <OurServices />
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className=" bg-gray-50">
        <Contact />
      </section>
    </>
  );
}
